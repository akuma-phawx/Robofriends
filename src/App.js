import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { robots: [], searchField: '' };
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    axios.get(url).then((res) => {
      this.setState({ robots: res.data });
    });
  }

  onSearchChange = (event) => {
    const searchField = event.target.value;
    this.setState(() => ({
      searchField: searchField,
    }));
  };
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />;
      </div>
    );
  }
}

export default App;
