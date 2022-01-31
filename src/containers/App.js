import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
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
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
          ;
        </Scroll>
      </div>
    );
  }
}

export default App;
