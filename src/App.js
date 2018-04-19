import React, { Component } from 'react';
import UserListComponent from './components/user-list.component';

class App extends Component {
  render() {
    return (
      <div className="uk-container">
        <h1 className="uk-heading-primary">Intelliware Talent Finder</h1>

        <UserListComponent />
      </div>
    );
  }
}

export default App;
