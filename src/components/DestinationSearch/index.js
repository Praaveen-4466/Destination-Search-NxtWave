import DestinationItem from "../DestinationItem";

import "./index.css";

import React, { Component } from "react";

class DestinationSearch extends Component {
  state = {
    searchInput: "",
  };

  onChangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    const { destinationsList } = this.props;
    const { searchInput } = this.state;
    const searchResults = destinationsList.filter((eachDestination) =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <>
        <div className="destination-container">
          <h1 className="title">Destination Search</h1>
          <div className="input-container">
            <input
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
              className="input-type"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>

          <ul className="destination-list">
            {searchResults.map((destinationElement) => (
              <DestinationItem
                key={destinationElement.id}
                destinationItemDetails={destinationElement}
              />
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default DestinationSearch;
