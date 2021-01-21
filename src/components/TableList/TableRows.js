import React from 'react'

function TableRows(props) {
    return (
        <tr id={props.id} onClick={props.click}>
            <td id={props.id}>{props.index}</td>
            <td id={props.id}>{props.firstName}</td>
            <td id={props.id}>{props.lastName}</td>
            <td id={props.id}>{props.phoneNumber}</td>
        </tr>
    );
}

export default TableRows