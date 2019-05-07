import React, { Component } from "react";
import Map from "../components/map/Map";
import { LoadScript } from "@react-google-maps/api";
import { getAddress, defaultMarkers } from "../utils/map";
import Locations from "../components/locations/Locations";
import "../utils/fonts";
import "../main.scss";

class Mainpage extends Component {
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
        <div className="container">
          <LoadScript
            id="script-loader"
            googleMapsApiKey="AIzaSyCuu74hM4bE6U0kxIcHElcLuSi2bGuFadk"
          >
            <Map markers={markers} />
          </LoadScript>
          <Locations locations={markers} />
        </div>
      </main>
    );
  }
}

export default Mainpage;
