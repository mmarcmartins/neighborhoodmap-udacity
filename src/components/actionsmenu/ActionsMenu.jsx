import React, { Component } from "react";
import style from "./ActionsMenu.scss";
import { getAddress } from "../../utils/map";

class ActionsMenu extends Component {
  state = {
    add: "",
    search: "",
    noLocation: false,
    repeatable: false
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  addMarker = location => {
    const google = window.google; //Const created by @react-google-maps/api on window object
    getAddress(google, location).then(result => {
      if (result.status === google.maps.GeocoderStatus.OK) {
        const resultAddress = result.results[0];
        if (!this.isNotRepeated(resultAddress)) {
          this.props.addLocation(resultAddress);
          this.setState({ noLocation: false, add: "" });
        } else {
          this.setState({ repeatable: true });
        }
      } else {
        this.setState({ noLocation: true });
      }
    });
  };

  isNotRepeated = local => {
    return this.props.markers.some(
      l => l.name.toLowerCase() === local.formatted_address.toLowerCase()
    );
  };

  render() {
    const { add, search } = this.state;
    return (
      <div className={style.form}>
        <div className={style.add}>
          <label>Adicione um local ao mapa</label>
          <input
            type="text"
            value={this.state.add}
            name="add"
            onChange={evt => this.handleChange(evt)}
          />
          <input
            type="button"
            className={style["add-button"]}
            onClick={() => this.addMarker(add)}
            value="Adicionar"
          />
        </div>

        <div className={style.search}>
          <label>
            Digite para filtrar os locais
            <input
              type="text"
              name="search"
              value={this.state.search}
              onChange={evt => this.handleChange(evt)}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default ActionsMenu;
