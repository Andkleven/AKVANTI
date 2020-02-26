import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Spinner, Table } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default class apiList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: false
    };
  }

  componentDidMount() {
    fetch(
      "https://demo.cloudonex.com/?api_key=4fy5ays2yuplj8c1g0bja033uueu8q3e4rsm3g4y&ng=api/v2/customers"
    )
      .then(response => response.json())
      .then(response => {
        this.setState({
          loading: false,
          data: response
        });
      });
  }

  render() {
    if (this.state.loading) {
      return <Spinner color="primary" />;
    }
    return (
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((listValue, index) => {
            return (
              <tr key={index}>
                <td>{listValue.id}</td>
                <button onClick={this.buttonCliked}>{listValue.id}</button>
                <td>{listValue.account}</td>
                <td>{listValue.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}
