import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './App.css';

import { Container, Button, Hero, HeroBody, Title } from "bloomer";
import RandomUser from "./components/RandomUser";

class App extends Component {
  state = { 
    userData: []
  };

  loadData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=8");
    const data = await response.json();
    return data;
  };

  handleClick = async () => {
    const userData = await this.loadData();

    this.setState({
      userData: userData.results,
    });
  }

  async componentDidMount() {
    const userData = await this.loadData();

    this.setState({
      userData: userData.results,
    });
  }

  render() {
      const { userData } = this.state;
      return (
        <div className="App">
          <Container isFluid>
            <Hero isColor='dark' isSize='medium'>
              <HeroBody>
                <Title>Random User</Title>
              </HeroBody>
            </Hero>
            <div className="cards">
              <Button isColor="black" isOutlined onClick={this.handleClick}>Load More Users</Button>
              {this.state.userData.length ? (
                <RandomUser userData={userData} />
              ) : (
                <p>No User Data</p>
                )}
            </div>
          </Container>
        </div>
    );
  }
}

export default App;
