import React, { Component } from "react";
import Map from "../components/map/Map";
import { LoadScript } from "@react-google-maps/api";
import { getAddress, defaultMarkers, filterResult } from "../utils/map";
import Locations from "../components/locations/Locations";
import ActionsMenu from "../components/actionsmenu/ActionsMenu";
import "../utils/fonts";
import "../main.scss";

class Mainpage extends Component {
  state = {
    markers: defaultMarkers,
    foundMarkers: [],
    noLocations: false
  };

  addMarker = location => {
    getAddress(google, location).then(result => {
      if (result.status === google.maps.GeocoderStatus.OK) {
        this.setFoundMarkers(result);
        this.changeLocationStatus();
      } else {
        this.changeLocationStatus();
      }
    });
  };

  changeLocationStatus = () => {
    this.setState(state => ({ noLocation: !state.noLocation }));
  };

  filterList = () => {};

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

          <ActionsMenu markers={markers} addLocation={this.addMarker} />
        </div>
      </main>
    );
  }
}

export default Mainpage;
