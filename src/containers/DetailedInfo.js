import React, { Component } from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import axios from 'axios'

import * as actions from '../store/actions'
import errorHandler from '../hoc/withErrorHandler'


class DetailedInfo extends Component {

    state = {
        firstName: '',
        lastName: '',
        phoneNumber: null
    }

    componentDidMount() {
        const contact = this.props.contactList.find(contact => +contact.id === +this.props.id)
        this.setState({firstName:contact.first_name,lastName:contact.last_name,phoneNumber:contact.phone_number})
    }

    onSendMessage = () => {
        this.props.onSendMessage(this.state.phoneNumber)
        this.props.history.push("/contacts/sendMessage")
    }

    render() {
        return (
                <Card style={{ padding: '20px', width: '50rem', border: '2px solid grey', borderRadius: '10px', margin: 'auto', marginTop: '20px' }}>
                    <ListGroup className="list-group-flush" style={{ paddingBottom: "10px" }}>
                        <ListGroupItem>First Name : {this.state.firstName}</ListGroupItem>
                        <ListGroupItem>Last Name : {this.state.lastName}</ListGroupItem>
                        <ListGroupItem>Phone Number : {this.state.phoneNumber}</ListGroupItem>
                    </ListGroup>
                    <Button variant="primary" onClick={this.onSendMessage}>
                        Send Message
                    </Button>
                </Card>
        );
    }
}
const mapStateToProps = state => {
    return {
        contactList: state.data,
        id: state.contactId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSendMessage: (num) => dispatch(actions.phoneNumber(num))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(DetailedInfo, axios))