
import React, { Component } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { configMaps, getAddress } from "../utils/map";

class Map extends Component {
    render() {
        const { markers } = this.props;
        return (
            <GoogleMap
                id="example-map"
                mapContainerStyle={configMaps.mapStyle}
                zoom={7}
                center={configMaps.mapCenter}
            >
                {markers.length > 0 &&
                    markers.map((marker, index) => (
                        <Marker key={index} position={marker} />
                    ))}
            </GoogleMap>
        );
    }
}

export default Map;