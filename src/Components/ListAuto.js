import React, {Component} from 'react';
import OneAuto from './OneAuto';
import {connect} from 'react-redux';
import {getCardsThunk} from './../reducers/cards';

import '../Style/ListAuto.css'
import {goToEditMode} from "./../reducers/cards";
import {changeTitle} from "../reducers/cards";

class ListAuto extends Component {
    componentDidMount() {
        const {getAllCards} = this.props;
        getAllCards();
    }

    render() {
        const {cards, title, isReady, goToEditMode, editMode, changeTitle} = this.props;
        let items = [];
        if (isReady) {
            items = cards.map((elem, i) => {
                return (
                    <OneAuto title={title}
                             data={elem}
                             editMode={editMode}
                             goToEditMode={goToEditMode}
                             changeTitle={changeTitle} key={i}/>
                )
            })
            return items
        }
        return (
            <div className="wrapper-list-cards">
                {!isReady ? 'is Loading' : {items}}
            </div>
        );
    }
}

const mapStateToProps = ({cards}) => ({
    cards: cards.items,
    isReady: cards.isReady,
    editMode: cards.editMode,
    title: cards.title
})

const mapDispatchToProps = dispatch => ({
    getAllCards: () => {
        dispatch(getCardsThunk())
    },
    goToEditMode: () => {
        dispatch(goToEditMode())
    },
    changeTitle: () => {
        dispatch(changeTitle)

    }
})
export default connect(mapStateToProps, mapDispatchToProps)(ListAuto);
