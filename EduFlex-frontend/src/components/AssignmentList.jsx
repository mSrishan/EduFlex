import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

const styles = {
  container: {
    padding: '2rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#0044cc', // Blue color
  },
  table: {
    margin: '0 auto',
    width: '100%',
    maxWidth: '800px',
    borderCollapse: 'collapse',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  tableHeader: {
    backgroundColor: '#f8f9fa',
    color: '#333',
    textAlign: 'left',
    padding: '1rem',
  },
  tableRow: {
    borderBottom: '1px solid #dee2e6',
  },
  tableCell: {
    padding: '1rem',
    textAlign: 'left',
  },
};

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
      <div style={styles.container}>
        <h1 style={styles.header}>Assignment List</h1>
        <table className="table table-striped" style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Course Name</th>
              <th style={styles.tableHeader}>Assignment Name</th>
              <th style={styles.tableHeader}>Deadline</th>
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
