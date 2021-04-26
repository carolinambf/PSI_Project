import React, { Component } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import data from "../assets/data";
import Markers from "./VenueMarkers";

const center = { lat: 39.23, lng: -8.68 };

// esta função retorna a latitude e longitude na consola
function MouseLocation() {
  const mapa = useMapEvents({
    click: () => {
      mapa.on("click", function (e) {
        console.log("LatLon : " + e.latlng);
      });
    },
  });
  return null;
}

class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: center,
      zoomLvl: 7,
    };
  }

  render() {
    const { center, zoomLvl } = this.state;

    return (
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
        <MouseLocation />
        <Markers venues={data.venues} />
      </MapContainer>
    );
  }
}

export default Mapa;
