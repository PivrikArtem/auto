import axios from 'axios';

const initilState = {
    isReady: false,
    items: [],
    editMode: false,
    title: null
};

const actions = {
    GET_CARDS: "GET_CARDS",
    EDIT_MODE: "EDIT_MODE",
    CHANGE_TITLE: "CHANGE_TITLE"

}

export const getCards = (data) => ({
    type: actions.GET_CARDS,
    payload: data
});
export const goToEditMode = () => ({
    type: actions.EDIT_MODE,
})
export const changeTitle = () => ({
    type: actions.CHANGE_TITLE,
    // payload: e.currenTurget.value
})

export const getCardsThunk = () => (dispatch) => {
    axios.get('/db.json').then(({data}) => {
        dispatch(getCards(data.ads))
    })
}

export default (state = initilState, action) => {
    switch (action.type) {
        case actions.EDIT_MODE:
            return {
                ...state,
                editMode: true
            }
            break;
        case  actions.CHANGE_TITLE:
            return {
                ...state,
                title:action.payload
            }
        case actions.GET_CARDS:
            let newItems = [];
            action.payload.forEach((elem, i) => {
                while (i < 3) {
                    newItems.push(elem);
                    break;
                }
            });
            return {
                ...state,
                isReady: true,
                items: newItems,
            }

        default:
            return state
    }
}
