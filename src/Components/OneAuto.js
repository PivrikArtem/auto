import React from 'react';
import '../Style/OneAuto.css';
import {Table} from 'reactstrap';

const OneAuto = (props) => {
    const {goToEditMode, title, editMode, changeTitle} = props;
    let displayElement;
    if (editMode) {
        displayElement = <input  value={title} onBlur={changeTitle}/>
    } else {
        displayElement = <td onDoubleClick={goToEditMode}>10000</td>
    }
    return (
        <tr>
            <th scope="row"></th>
            <td>BMW</td>
            <td>Germany</td>
            {displayElement}
        </tr>
    )
};


export default OneAuto;
