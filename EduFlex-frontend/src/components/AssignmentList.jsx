import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

class AssignmentList extends Component {
    constructor(props) {
        super(props);
        this.state = { assignments: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/assignments/')
            .then(response => {
                this.setState({ assignments: response.data });
            })
            .catch(error => {
                console.error('Error fetching assignments:', error);
            });
    }

    tabRow() {
        return this.state.assignments.map((object, i) => (
            <TableRow obj={object} key={i} />
        ));
    }

    render() {
        return (
            <div>
                <h1 align="center">Assignment List</h1>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Assignment Name</th>
                            <th>Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AssignmentList;
