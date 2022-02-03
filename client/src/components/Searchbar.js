import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="searchbar"
        placeholder='Search by title...'
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
