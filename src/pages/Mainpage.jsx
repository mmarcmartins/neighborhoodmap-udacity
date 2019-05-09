import React, { Component } from "react";
import Map from "../components/map/Map";
import { LoadScript } from "@react-google-maps/api";
import { defaultMarkers } from "../utils/map";
import Locations from "../components/locations/Locations";
import ActionsMenu from "../components/actionsmenu/ActionsMenu";
import "../utils/fonts";
import "../main.scss";

class Mainpage extends Component {
  state = {
    markers: defaultMarkers
  };

  insertMarker = marker => {
    const newMarker = {
      name: marker.formatted_address,
      coords: {
        lat: marker.geometry.location.lat(),
        lng: marker.geometry.location.lng()
      }
    };
    this.setState(state => ({
      markers: state.markers.concat([newMarker])
    }));
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

          <ActionsMenu markers={markers} addLocation={this.insertMarker} />
        </div>
      </main>
    );
  }
}

export default Mainpage;
