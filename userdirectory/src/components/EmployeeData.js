import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchEmployee from "./SearchEmployee";
import EmployeeInfo from "./EmployeeInfo";
import API from "../utils/API";

class EmployeeData extends Component {
  state = {
    result: {},
    search: ""
  };

  // Search Joseph when component mounts
  componentDidMount() {
    this.searchEmployees("Joseph");
  }

  searchEmployees = query => {
    API.getUsers(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // Search the RandomMuserApi for the value of `this.state.search` once form is submitted
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Name || "Search for an Employee"}
            >
              {this.state.result.Title ? (
                <EmployeeInfo
                  name={this.state.result.Name}
                  position={this.state.result.Title}
                  employeeNumber={this.state.result.number}
                  email={this.state.result.email}
                />
              ) : (
                <h3>No Results found</h3>
              )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchEmployee
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmployeeData;