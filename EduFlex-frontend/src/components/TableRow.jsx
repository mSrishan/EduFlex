import React, { Component } from 'react';

class TableRow extends Component {
  handleButtonClick = () => {
    // Placeholder function for button click action
    // Implement your logic here
    alert(`Assignment for ${this.props.obj.Assignment_name} clicked!`);
  };

  render() {
    const { Course, Assignment_name, Deadline } = this.props.obj;

    return (
      <tr>
        <td>{Course}</td>
        <td>{Assignment_name}</td>
        <td>{Deadline}</td>
        <td>
          <button
            className="btn btn-primary"
            onClick={this.handleButtonClick}
          >
            Do This!!
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
