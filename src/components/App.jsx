import React, { Component } from "react";
import Map from "./map";
import { LoadScript } from "@react-google-maps/api";
import { getAddress, defaultMarkers } from "../utils/map";

class App extends Component {
  state = {
    query: "",
    markers: defaultMarkers
  };

  updateQuery = evt => {
    this.setState({
      query: evt.target.value
    });
  };

  addMarker = () => {
    console.log("clicou");
    getAddress(google, this.state.query);
  };

  filterMap = () => {
    console.log("clicou");
  };

  render() {
    const { markers } = this.state;
    return (
      <main className="mainpage">
        <input type="text" onChange={evt => this.updateQuery(evt)} />
        <button type="button" onClick={() => this.addMarker()}>
          Adicionar marker
        </button>
        <button type="button" onClick={() => this.filterMap()}>
          Filtrar marker
        </button>

        <LoadScript
          id="script-loader"
          googleMapsApiKey="AIzaSyCuu74hM4bE6U0kxIcHElcLuSi2bGuFadk">
          <Map markers={markers} />
        </LoadScript>
      </main>
    );
  }
}

export default App;