import React, { Component } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { configMaps } from "../../utils/map";
import "./Map.scss";

class Map extends Component {
  render() {
    const { markers, centered } = this.props;
    return (

      <GoogleMap
        id="neighborhoodmap"
        mapContainerStyle={configMaps.mapStyle}
        zoom={7}
        center={centered}
      >

        {markers.length > 0 &&
          markers.map((marker, index) => (
            <Marker key={index} position={marker.coords}
              onClick={() => {
                this.props.changeStateModal(marker, true)

              }}>

              {marker.modal.isOpened && (
                <InfoWindow
                  position={marker.coords}
                  onCloseClick={() => this.props.changeStateModal(marker, false)}
                >
                  <h1>{marker.name}</h1>
                  <img alt={`A picture of ${marker.name}`} src={marker.photo} />
                  <p>{marker.desc}</p>
                </InfoWindow>
              )}

            </Marker>
          ))}
      </GoogleMap>
    );
  }
}

export default Map;
