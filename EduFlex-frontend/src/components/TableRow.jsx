import React, { Component } from 'react'

 class TableRow extends Component {
  render() {
    return (
        <tr>
            <td>
                {this.props.obj.Course}
            </td>
            <td>
                {this.props.obj.Assignment_name}
            </td>
            <td>
                {this.props.obj.Deadline}
            </td>
            <td>
                <button className="btn btn-primary">Do This!!</button>
            </td>
      </tr>
    )
  }
}
export default TableRow;
