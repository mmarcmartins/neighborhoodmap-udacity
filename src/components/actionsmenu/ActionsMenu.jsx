import React, { Component } from "react";
import style from "./ActionsMenu.scss";
import { getAddress } from "../../utils/map";

import Loader from "../Loader/loader";

class ActionsMenu extends Component {
  state = {
    add: "",
    search: "",
    isLoading: false
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  addMarker = location => {
    const google = window.google; //Const created by @react-google-maps/api on window object
    if (location.length === 0) {
      alert("Favor inserir uma localização");
      return;
    }
    this.setState({ isLoading: true });
    getAddress(google, location)
      .then(result => {
        if (result.status === google.maps.GeocoderStatus.OK) {
          const resultAddress = result.results[0];
          if (!this.isNotRepeated(resultAddress)) {
            this.props.addLocation(resultAddress).then(_ => {
              this.setState({ noLocation: false, add: "" });
              this.setState({ isLoading: false });
              alert("Local inserido com sucesso");
            });
          } else {
            this.setState({ isLoading: false });
            alert("Local repetido");
          }
        } else {
          this.setState({ isLoading: false });
          alert("Local não encontrado");
        }
      })
      .catch(e => {
        this.setState({ isLoading: false });
        alert("Um erro ocorreu durante a requisição (MAPS - GETADDRESS): " + e);
      });
  };

  isNotRepeated = local => {
    return this.props.markers.some(
      l => l.name.toLowerCase() === local.formatted_address.toLowerCase()
    );
  };

  render() {
    const { add } = this.state;

    return (
      <div>
        <div className={style.form}>
          <div className={style.add}>
            <label id="addlocal">Insira um local que deseja adicionar</label>
            <input
              type="text"
              value={this.state.add}
              name="add"
              onChange={evt => this.handleChange(evt)}
              aria-labelledby="addlocal"
            />
            <input
              type="button"
              className={style["add-button"]}
              onClick={() => this.addMarker(add)}
              value="Adicionar"
              aria-label="Clique para adicionar o local"
            />
            {this.state.isLoading && <Loader />}
          </div>

          <div className={style.search}>
            <label id="searchbtn">
              Digite para filtrar os locais
              <input
                type="text"
                name="search"
                value={this.state.search}
                onChange={evt => {
                  this.handleChange(evt);
                  this.props.handleSearch(evt.target.value);
                }}
                aria-labelledby="searchbtn"
              />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default ActionsMenu;
