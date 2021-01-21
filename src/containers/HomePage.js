import React, { Component } from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import axios from 'axios'

import errorHandler from '../hoc/withErrorHandler'

class HomePage extends Component {
    render() {
        return (
            <Jumbotron fluid >
                <Container style={{ marginTop: '10rem' }}>
                    <h1>Welcome to Kisan Network</h1>
                    <p>
                        Kisan Network connects Indian farmers directly to businesses across the 
                        country by taking complete control of the supply chain. Each step is captured and 
                        monitored by our tech enabled rural management portal.
                    </p>
                </Container>
            </Jumbotron>
        );
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(HomePage, axios))