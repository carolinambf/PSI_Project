import React, { Component } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import data from "../assets/data";
import Markers from "./VenueMarkers";

const center = { lat: 39.23, lng: -8.68 };

class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: center,
      zoomLvl: 4,
    };
  }

  render() {
    const { center, zoomLvl } = this.state;

    return (
      <MapContainer
        center={center}
        zoom={zoomLvl}
        minZoom={2}
        maxBounds={[
          [-90, -180],
          [90, 180],
        ]}
        doubleClickZoom={false} // o double click não faz mais zoom
        scrollWheelZoom={true} // o scroll está ligado, permitindo dar zoom in e zoom out através do mesmo
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <Markers venues={data.venues} />
      </MapContainer>
    );
  }
}

export default Mapa;
