import React, { Component } from "react";
import Map from "../components/map/Map";
import { LoadScript } from "@react-google-maps/api";
import { defaultMarkers, configMaps } from "../utils/map";
import { getAllData } from "../api/foursquare";
import ActionsMenu from "../components/actionsmenu/ActionsMenu";
import "../utils/fonts";
import "../main.scss";
import { sortArrayLocation } from "../utils/globals";

class Mainpage extends Component {
  state = {
    markers: defaultMarkers,
    mapCenter: configMaps.mapCenter
  };

  changeStateModal = (marker, isOpened) => {
    marker.modal.isOpened = isOpened;
    const allMarkers = this.state.markers.filter(mk => mk.name !== marker.name);
    this.setState({
      markers: allMarkers
        .concat([marker])
        .sort((a, b) => sortArrayLocation(a, b))
    });
  };
  handleLocationClick = marker => {
    const newMarkers = this.state.markers.filter(mk => mk.name !== marker.name);
    marker.modal.isOpened = true;
    this.setState({
      markers: newMarkers
        .concat([marker])
        .sort((a, b) => sortArrayLocation(a, b)),
      mapCenter: marker.coords
    });
  };

  insertMarker = async marker => {
    const infoWindow = await getAllData({
      lat: marker.geometry.location.lat(),
      lng: marker.geometry.location.lng()
    });

    const newMarker = {
      name: marker.formatted_address,
      coords: {
        lat: marker.geometry.location.lat(),
        lng: marker.geometry.location.lng()
      },
      modal: {
        ...infoWindow
      }
    };

    this.setState(state => ({
      markers: state.markers
        .concat([newMarker])
        .sort((a, b) => sortArrayLocation(a, b)),
      mapCenter: newMarker.coords
    }));
  };

  render() {
    const { markers, mapCenter } = this.state;

    return (
      <main className="mainpage">
        <div className="container">
          <LoadScript
            id="script-loader"
            googleMapsApiKey="AIzaSyCuu74hM4bE6U0kxIcHElcLuSi2bGuFadk"
          >
            <Map
              centered={mapCenter}
              changeStateModal={this.changeStateModal}
              markers={markers}
            />
          </LoadScript>

          <ActionsMenu
            markers={markers}
            handleSearch={this.handleSearch}
            addLocation={this.insertMarker}
            handleLocationClick={this.handleLocationClick}
          />
        </div>
      </main>
    );
  }
}

export default Mainpage;
