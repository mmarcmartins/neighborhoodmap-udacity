import React, { Component } from "react";
import Map from "../components/map/Map";
import { LoadScript } from "@react-google-maps/api";
import { defaultMarkers, configMaps } from "../utils/map";
import { getAllData } from "../api/foursquare";
import ActionsMenu from "../components/actionsmenu/ActionsMenu";
import "../utils/fonts";
import style from "../main.scss";
import { sortArrayLocation, BLUE_ICON, RED_ICON } from "../utils/globals";
import Locations from "../components/locations/Locations";
import escapeRegExp from "escape-string-regexp";

class Mainpage extends Component {
  state = {
    markers: defaultMarkers.sort((a, b) => sortArrayLocation(a, b)),
    mapCenter: configMaps.mapCenter,
    query: ""
  };

  changeMarkerIcon = isOpened => (isOpened ? BLUE_ICON : RED_ICON);
  handleSearch = query => {
    this.setState({
      query: query.trim()
    });
  };

  changeStateModal = (marker, isOpened) => {
    marker.modal.isOpened = isOpened;
    marker.icon = this.changeMarkerIcon(isOpened);
    const allMarkers = this.state.markers.filter(mk => mk.name !== marker.name);
    allMarkers.forEach(mk => {
      mk.modal.isOpened = false;
      mk.icon = RED_ICON;
    });
    this.setState({
      markers: allMarkers
        .concat([marker])
        .sort((a, b) => sortArrayLocation(a, b))
    });
  };

  handleLocationClick = marker => {
    const newMarkers = this.state.markers.filter(mk => mk.name !== marker.name);
    newMarkers.forEach(mk => {
      mk.modal.isOpened = false;
      mk.icon = RED_ICON;
    });
    marker.modal.isOpened = true;
    marker.icon = this.changeMarkerIcon(marker.modal.isOpened);
    this.setState({
      markers: newMarkers
        .concat([marker])
        .sort((a, b) => sortArrayLocation(a, b)),
      mapCenter: marker.coords
    });
  };

  createMarker = async marker => {
    const infoWindow = await this.insertMarkerInfoWindow(marker);
    new Promise(resolve => {
      const newMarker = {
        name: marker.formatted_address,
        icon: RED_ICON,
        coords: {
          lat: marker.geometry.location.lat(),
          lng: marker.geometry.location.lng()
        },
        modal: {
          ...infoWindow,
          coords: {
            lat: marker.geometry.location.lat() + 0.5,
            lng: marker.geometry.location.lng()
          }
        }
      };

      this.setState(state => ({
        markers: state.markers
          .concat([newMarker])
          .sort((a, b) => sortArrayLocation(a, b)),
        mapCenter: newMarker.coords
      }));
      resolve();
    });
  };

  insertMarkerInfoWindow = async marker => {
    return await getAllData({
      lat: marker.geometry.location.lat(),
      lng: marker.geometry.location.lng()
    });
  };

  render() {
    const { markers, mapCenter } = this.state;

    let filterMarkers;
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), "i");
      filterMarkers = this.state.markers.filter(c => match.test(c.name));
    } else {
      filterMarkers = this.state.markers;
    }
    return (
      <main className="mainpage">
        <div className={style.container}>
          <h1 className="main-title">Neighborhood Map</h1>
          <LoadScript
            id="script-loader"
            googleMapsApiKey="AIzaSyCuu74hM4bE6U0kxIcHElcLuSi2bGuFadk"
          >
            <Map
              centered={mapCenter}
              changeStateModal={this.changeStateModal}
              markers={filterMarkers}
            />
          </LoadScript>
          <Locations
            handleLocationClick={this.handleLocationClick}
            locations={filterMarkers}
          />
          <ActionsMenu
            markers={markers}
            handleSearch={this.handleSearch}
            addLocation={this.createMarker}
            handleLocationClick={this.handleLocationClick}
          />
        </div>
      </main>
    );
  }
}

export default Mainpage;
