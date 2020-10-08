import React, { Component } from 'react';
import RandomUser from "./components/RandomUser";
import './App.css';

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
          <header className="App-header">
            <h1>Random User</h1>
          </header>
          <div>
            <button onClick={this.handleClick}>Load More Users</button>
            {this.state.userData.length ? (
              <RandomUser userData={userData} />
            ) : (
              <p>No User Data</p>
              )}
          </div>
        </div>
    );
  }
}

export default App;
