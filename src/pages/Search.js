import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Row from "../components/Row";
import SearchForm from "../components/SearchForm";

class Search extends Component {
  state = {
    search: "",
    repos: [],
    resultByName: {},
    error: ""
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  searchByName = repoName => {
    API.getRepoList()
      .then(res => {
        // if (res.data.status === "error") {
        //   throw new Error(res.data.message);
        // }
        this.setState({
          repos: res.data
        });
      })
      .catch(err => this.setState({ error: err.message }));

    this.state.repos.map(repo => {
      if (repo.name === repoName) {
        this.setState({ resultByName: repo });
      }
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchByName(this.state.search);
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Repo Name!</h1>

          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            search={this.state.search}
          />

          <Row>{this.state.resultByName.name}</Row>
          <Row>{this.state.resultByName.forks_count}</Row>
          <Row>{this.state.resultByName.language}</Row>
        </Container>
      </div>
    );
  }
}

export default Search;
