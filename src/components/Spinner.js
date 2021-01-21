import React from 'react'
import { Spinner } from 'react-bootstrap'


function SpinnerC(props) {
    return (
        <div style={{ textAlign: "center", marginTop: '5rem' }}>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="dark" />
        </div>
    );
}

export default SpinnerC