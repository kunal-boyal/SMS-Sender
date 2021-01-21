import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import ReactPaginate from 'react-paginate';

import TableRows from './TableRows'
import './TableList.css'

class TableList extends Component {

    state = {
        offset: 0,
        tableData: [],
        orgtableData: [],
        perPage: 10,
        currentPage: 0
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });

    };

    loadMoreData() {
        const data = this.state.orgtableData;

        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            tableData: slice
        })

    }

    componentDidMount() {
        var tdata = this.props.contactList;
        var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)
        this.setState({
            pageCount: Math.ceil(tdata.length / this.state.perPage),
            orgtableData: tdata,
            tableData: slice
        })
    }
    render() {
        return (
            <div style={{ width: '80%', border: '2px solid grey', borderRadius: '20px', margin: 'auto', marginBottom: '20px',marginTop:'20px'}}>
                <Table hover >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableData.map((contact, i) => <TableRows key={contact.id} id={contact.id} click={this.props.click} firstName={contact.first_name} lastName={contact.last_name} phoneNumber={contact.phone_number} index={contact.id} />)}
                    </tbody>
                </Table>
                <div style={{marginLeft:'30%'}}>
                <ReactPaginate 
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages"}
                    activeClassName={"active"} />
                </div>
            </div>
        );
    }
}

export default TableList