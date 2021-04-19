import React, { Component } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import data from "../assets/data";
import Markers from "./VenueMarkers";

class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: { lat: 39.23, lng: -8.68 },
      zoomLvl: 7,
    };
  }

  render() {
    const { center, zoomLvl } = this.state;

    return (
      <MapContainer
        center={center}
        zoom={zoomLvl}
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
