import React, { Component } from "react";
import Map from "../components/map/Map";
import { LoadScript } from "@react-google-maps/api";
import { getAddress, defaultMarkers } from "../utils/map";
import Locations from "../components/locations/Locations";
import ActionsMenu from "../components/actionsmenu/ActionsMenu";
import "../utils/fonts";
import "../main.scss";
import ModalLocations from "../components/modalLocations/ModalLocations";

class Mainpage extends Component {
  state = {
    markers: defaultMarkers,
    noLocations: false
  };

  addMarker = location => {
    getAddress(google, location).then(result => {
      if (result.status === google.maps.GeocoderStatus.OK) {
        this.insertMarker(result.results[0]);
        this.changeLocationStatus();
      } else {
        this.changeLocationStatus();
      }
    });
  };

  insertMarker = marker => {
    const newMarker = {
      name: marker.formatted_address,
      coords: {
        lat: marker.geometry.location.lat(),
        lng: marker.geometry.location.lng(),
      }
    }
    this.setState(state => ({
      markers: state.markers.concat([newMarker])
    }));
  };


  changeLocationStatus = () => {
    this.setState(state => ({ noLocation: !state.noLocation }));
  };


  filterList = () => { };

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
