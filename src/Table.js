import React, { Component } from 'react';

export default class Table extends Component {


  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>

          {[1, 2, 3].map(user => (
            <tr key>
              <th scope="row">1</th>
              <td> {this.props.name} </td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <span onClick={this.deleteItem}>❌</span>
                <span>🛠</span>
              </td>
            </tr>
          ))}



          {/* <tr>
            <th scope="row">2</th>
            <td>{this.props.name}  </td>

            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <span onClick={this.deleteItem}>❌</span>
              <span>🛠</span>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td> {this.props.name} </td>

            <td>the Bird</td>
            <td>@twitter</td>
            <td>
              <span>❌</span>
              <span>🛠</span>
            </td>
          </tr>
         */}


        </tbody>
      </table>
    )
  }
}