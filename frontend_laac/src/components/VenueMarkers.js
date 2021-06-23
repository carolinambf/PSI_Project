import React, { Fragment } from "react";
import L from "leaflet";
import { Marker, Popup } from "react-leaflet";

//array com várias cores (para utilização futura)
const venueColor = [
  "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
  "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png",
  "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png",
  "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png",
  "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png",
  "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png",
];

//variavel que gera um número aleatório
const randomValue = Math.floor(Math.random() * venueColor.length);

const VenueLocationIcon = L.icon({
  iconUrl: venueColor[randomValue],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const VenueMarkers = (props) => {
  const { venues } = props;

  const markers = venues.map((venue) => (
    <Marker
      key={0}
      position={[venue.latitude, venue.longitude]}
      icon={VenueLocationIcon}
    >
      <Popup>
        <div className="poup-text">
          Latitude: {venue.latitude}
          <br />
          Longitude: {venue.longitude}
          <br />
          nome: {venue.nome}
          <br />
          idade: {venue.idade}
          <br />
          historia: {venue.descricao}
          <br />
          
        </div>
      </Popup>
    </Marker>
  ));

  return <Fragment>{markers}</Fragment>;
};

export default VenueMarkers;
