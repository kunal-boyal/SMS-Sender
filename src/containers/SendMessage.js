import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import axios from 'axios'

import * as actions from '../store/actions'
import errorHandler from '../hoc/withErrorHandler'


class SendMessage extends Component {

    state = {
        message: ''
    }

    sendMessage = () => {
        this.props.onSendMessage({ message: this.state.message, phoneNumber: this.props.num })
        if (!this.props.loading) this.props.history.replace("/contacts")
    }

    handleInputChange = (e) => {
        this.setState({ message: e.target.value })
    };

    render() {
        return (
            <Form style={{ padding: '20px', width: '80%', border: '2px solid grey', borderRadius: '10px', margin: 'auto', marginTop: '20px' }}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Write the text here...</Form.Label>
                    <Form.Control onChange={this.handleInputChange} as="textarea" rows={3} />
                </Form.Group>
                <Button onClick={this.sendMessage} variant="primary" >
                    Send Message
                </Button>
            </Form>
        );
    }
}
const mapStateToProps = state => {
    return {
        num: state.phoneNumber,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSendMessage: (data) => dispatch(actions.sendMessage(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(SendMessage, axios))