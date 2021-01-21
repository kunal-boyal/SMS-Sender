import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'


function TableRows(props) {
    return (
        <Card style={{ maxWidth: "20rem" }}>
            <ListGroup className="list-group-flush"  >
                <ListGroupItem>First Name : {props.firstName}</ListGroupItem>
                <ListGroupItem>Last Name : {props.lastName}</ListGroupItem>
                <ListGroupItem>OTP : {props.otp}</ListGroupItem>
            </ListGroup>
        </Card>
    );
}

export default TableRows