import L from "leaflet";
import React, { Component, useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Markers from "./VenueMarkers";
import axios from "axios";
import "./Mapa.css";

// MOUSE MARKER //

const MouseIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [39.23, -8.68],
      zoomLvl: 7,
      pontos: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost/getAllLocations.php")
      .then((res) =>
        this.setState({ pontos: res.data }, () => console.log(this.state))
      )
      .catch((err) => console.error(err));
  }

  render() {
    const { center, zoomLvl, pontos } = this.state;

    return (
      <div className="zonaMapa">
        <MapContainer
          center={center} // centro inicial do mapa
          zoom={zoomLvl} // nivel de zoom inicial do mapa
          minZoom={3} // máximo de zoom do mapa
          maxBounds={[
            [-90, -180],
            [90, 180],
          ]} // limite do mapa
          doubleClickZoom={false} // o double click não faz mais zoom
          scrollWheelZoom={true} // o scroll está ligado, permitindo dar zoom in e zoom out através do mesmo
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Markers venues={pontos} />
        </MapContainer>
      </div>
    );
  }
}
