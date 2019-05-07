import React, { Component } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { configMaps } from "../../utils/map";
import "./Map.scss";

class Map extends Component {
  render() {
    const { markers } = this.props;
    return (
      <GoogleMap
        id="neighborhoodmap"
        mapContainerStyle={configMaps.mapStyle}
        zoom={7}
        center={configMaps.mapCenter}
      >
        {markers.length > 0 &&
          markers.map((marker, index) => (
            <Marker key={index} position={marker.coords} />
          ))}
      </GoogleMap>
    );
  }
}

export default Map;
