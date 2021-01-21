import React, { Component } from 'react'
import { CardColumns } from 'react-bootstrap'
import { connect } from 'react-redux'
import axios from 'axios'

import CardData from '../components/Card'
import errorHandler from '../hoc/withErrorHandler'

class SentMessages extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        const newData = this.props.data.filter((contact) => contact.hasOwnProperty('otp'))
        this.setState({ data: newData })
    }

    render() {
        let card = <h1 style={{ padding: '20px',margin: 'auto', marginTop: '20px',textAlign:'center' }}>No messages has been sent yet !</h1>
        if (this.state.data.length !== 0) {
            card = <CardColumns style={{ padding: '20px', margin: "auto", marginTop: '20px' }}>
                        {this.state.data.map(contact => <CardData key={contact.id} firstName={contact.first_name} lastName={contact.last_name} otp={contact.otp} />)}
                    </CardColumns>
        }
        return (
            card
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.data,
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(SentMessages, axios))