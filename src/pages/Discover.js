import React, { Component } from "react";
import API from "../utils/API";

import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Discover extends Component {
  state = {
    repos: []
  };

  // When the component mounts, load all the repos
  componentDidMount() {
    this.loadRepos();
  }

  loadRepos = () => {
    API.getRepoList()
      .then(res => {
        // console.log("this is a repo" + res[1]);
        const formattedData = res.data
          .map(repo => {
            return {
              ...repo,
              name: repo.name.replace(/-/g, " ")
            };
          })
          .sort((a, b) => {
            if (a.forks_count > b.forks_count) {
              return -1;
            }

            if (a.forks_count < b.forks_count) {
              return 1;
            }

            return 0;
          });

        this.setState({
          repos: formattedData
        });
      })

      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>7Geese Repositories:</h1>
            </Jumbotron>
            {this.state.repos.length ? (
              <List>
                {this.state.repos.map(repo => (
                  <ListItem key={repo.id}>
                    <a href={repo.html_url}>
                      <p>
                        <strong>Name: {repo.name}</strong>
                      </p>
                      <p>
                        <strong>Fork count: {repo.forks_count}</strong>
                      </p>
                      <p>
                        <strong>Language: {repo.language}</strong>
                      </p>
                    </a>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Discover;
