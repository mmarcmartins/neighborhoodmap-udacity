import React, { Component } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { configMaps } from "../../utils/map";
import map from "./Map.scss";
import markercss from "./Marker.scss";

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
            <Marker
              key={index}
              position={marker.coords}
              icon={marker.icon}
              onClick={() => {
                this.props.changeStateModal(marker, true);
              }}
            >
              {marker.modal.isOpened && (
                <InfoWindow
                  position={marker.modal.coords}
                  onCloseClick={() =>
                    this.props.changeStateModal(marker, false)
                  }
                >
                  <div className={map.infowindow}>
                    <h1 className={markercss.title}>{marker.name}</h1>
                    {marker.modal.photo && (
                      <img
                        className={markercss.img}
                        alt={`A picture of ${marker.name}`}
                        src={marker.modal.photo}
                      />
                    )}
                    <p className={markercss.link}>
                      Para saber mais detalhes sobre o local clique{" "}
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={marker.modal.link}
                      >
                        aqui
                      </a>
                    </p>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          ))}
      </GoogleMap>
    );
  }
}

export default Map;
