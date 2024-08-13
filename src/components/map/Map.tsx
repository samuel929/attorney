"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import { CardDemo } from "@/components/card/Card";
import { Sheriff } from "@/types";
import { FaSearch } from "react-icons/fa";
// The SVG markup as a string
const svgIcon = `
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
    <polygon points='12,2 14,9 21,9 15,13 17,20 12,15 7,20 9,13 3,9 10,9' fill='currentColor'/>
  </svg>
`;

// Convert the SVG string to a base64 data URL
const svgDataUrl = `data:image/svg+xml;base64,${btoa(svgIcon)}`;

// Create the Leaflet icon using the data URL
const ICON = icon({
  iconUrl: svgDataUrl,
  iconSize: [50, 50],
});

export default function Map() {
  const sheriffs: Sheriff[] = [
    {
      name: "Sheriff John Doe",
      contactDetail: "johndoe@example.com",
      phoneNumber: "+27 11 123 4567",
      coordinates: { lat: -26.2041, lng: 28.0473 }, //
      city: "Johannesburg City Center",
    },
    {
      name: "Sheriff Jane Smith",
      contactDetail: "janesmith@example.com",
      phoneNumber: "+27 11 234 5678",
      coordinates: { lat: -26.1926, lng: 28.0313 }, //
      city: " Rosebank",
    },
    {
      name: "Sheriff Peter Brown",
      contactDetail: "peterbrown@example.com",
      phoneNumber: "+27 11 345 6789",
      coordinates: { lat: -26.1378, lng: 28.05 }, //
      city: " Sandton",
    },
    {
      name: "Sheriff Sarah Johnson",
      contactDetail: "sarahjohnson@example.com",
      phoneNumber: "+27 11 456 7890",
      coordinates: { lat: -26.2057, lng: 28.049 }, //
      city: " Braamfontein",
    },
    {
      name: "Sheriff Michael Davis",
      contactDetail: "michaeldavis@example.com",
      phoneNumber: "+27 11 567 8901",
      coordinates: { lat: -26.1457, lng: 28.0388 }, //
      city: "Randburg",
    },
    {
      name: "Sheriff Lisa White",
      contactDetail: "lisawhite@example.com",
      phoneNumber: "+27 11 678 9012",
      coordinates: { lat: -26.1033, lng: 28.0578 }, //
      city: "Fourways",
    },
    {
      name: "Sheriff Kevin Wilson",
      contactDetail: "kevinwilson@example.com",
      phoneNumber: "+27 11 789 0123",
      coordinates: { lat: -26.1342, lng: 28.0615 },
      city: " Bryanston",
    },

    {
      name: "Sheriff David Lee",
      contactDetail: "davidlee@example.com",
      phoneNumber: "+27 11 901 2345",
      coordinates: { lat: -26.1595, lng: 28.076 }, //
      city: "Bedfordview",
    },
    {
      name: "Sheriff Nancy Turner",
      contactDetail: "nancyturner@example.com",
      phoneNumber: "+27 11 012 3456",
      coordinates: { lat: -26.2017, lng: 28.0456 }, //
      city: " Newtown",
    },
  ];

  const johannesburgCoordinates = { lat: -26.2041, lng: 28.0473 };

  return (
    <>
      <div className='absolute top-4 left-1/2 transform -translate-x-1/2 z-[1000] w-full max-w-lg p-2'>
        <div className='relative'>
          <input
            title='Search'
            placeholder='Search'
            type='search'
            className='w-full p-2 pl-10 rounded-full border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500'
          />
          <FaSearch className='absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500' />
        </div>
      </div>
      <MapContainer
        center={johannesburgCoordinates}
        zoom={13}
        scrollWheelZoom={true} // Enable scroll wheel zoom
        className='h-screen w-full'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {sheriffs.map((item, index) => (
          <Marker key={index} position={item.coordinates} icon={ICON}>
            <Popup>
              <CardDemo sheriff={item} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
