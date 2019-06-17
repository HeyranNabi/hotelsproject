import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Table from './Table';

class App extends Component {
  state = {
    hotels: [
      {
        "id": 1,
        "name": "Sunrise Hotel",
        "location": " Amsterdam, 17th Street",
        "created-at": "15.05.15"
      },
      {
        "id": 2,
        "name": "Sunrise Hotel 2",
        "location": " Amsterdam, 17th Street",
        "created-at": "15.05.15"
      },
      {
        "id": 3,
        "name": "Sunrise Hotel 3",
        "location": " Amsterdam, 17th Street",
        "created-at": "15.05.15"
      },
    ]
  };



  deleteItem = () => {
    console.log('item clicked');
  };

  render() {
    return (
      <section>
        <Tabs className="wrapper">
          <div className="menu">
            <TabList className="list">
              <Tab className="list-item">
                <button>Hotels</button>
              </Tab>
              <Tab className="list-item">
                <button>Partners</button>
              </Tab>
            </TabList>
          </div>
          <TabPanel className="details">


            <Table users={3} name={this.state.hotels[1].name}></Table>

          </TabPanel>
          <TabPanel className="details">
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
                <tr>
                  <th scope="row">1</th>
                  <td>Partners 1</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Partners 1</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Partners 1</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </TabPanel>
        </Tabs>
      </section>
    )

  }

}

export default App;
