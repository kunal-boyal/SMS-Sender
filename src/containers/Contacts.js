import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import axios from 'axios'

import TableList from "../components/TableList/TableList"
import Spinner from '../components/Spinner'
import errorHandler from '../hoc/withErrorHandler'
import * as actions from '../store/actions'

class Contacts extends Component {
    state = {
        file: null,
        data: null
    }

    onClickContact = (e) => {
        this.props.onClickContact(e.target.id)
        this.props.history.push("/contacts/detailedInfo")
    }

    uploadFile = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]
            this.setState({ file: img })
        }
    }

    onUploadFile = () => {
        this.props.onUploadJSONFile(this.state.file)
    }

    render() {
        let table = null
        if (this.props.contactList.length !== 0) table = <TableList click={this.onClickContact} contactList={this.props.contactList} />
        if (this.props.loading && this.props.contactList.length === 0) {
            table = <Spinner />
        }
        return (
            <React.Fragment >
                <Form style={{ padding: '20px', width: '80%', border: '2px solid grey', borderRadius: '10px', margin: 'auto', marginTop: '20px' }}>
                    <h3 style={{ paddingBottom: '10px' }}>Upload your contacts here !</h3>
                    <Form.Group style={{ margin: 'auto', paddingBottom: '10px' }}>
                        <Form.File id="exampleFormControlFile1" onChange={this.uploadFile} />
                    </Form.Group>
                    <Button onClick={this.onUploadFile} variant="secondary">Upload</Button>
                </Form>
                {table}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        contactList: state.data,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUploadJSONFile: (data) => dispatch(actions.uploadFile({ data: data })),
        onClickContact: (id) => dispatch(actions.contactId(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(Contacts, axios))