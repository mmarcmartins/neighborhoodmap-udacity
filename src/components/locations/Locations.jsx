import React, { Component } from "react";
import "./Locations.scss";
class Locations extends Component {
  render() {
    const { locations } = this.props;
    return (
      <ul className="locations-list">
        {locations.map((location, index) => (
          <li key={index} className="locations-list-item">
            {location.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default Locations;
