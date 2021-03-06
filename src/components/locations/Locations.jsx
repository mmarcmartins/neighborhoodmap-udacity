import React, { Component } from "react";
import style from "./Locations.scss";
class Locations extends Component {
  render() {
    const { locations } = this.props;
    return (
      <ul tabIndex="1" className={style["locations-list"]}>
        {locations.map((location, index) => (
          <li
            key={index}
            onClick={() => this.props.handleLocationClick(location)}
            className={style["locations-list-item"]}
            tabIndex="1"
          >
            {location.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default Locations;
