import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (mapContainerRef.current && !mapContainerRef.current.innerHTML) {
      // Coordinates for India
      const indiaCoordinates = [20.5937, 78.9629];
      
      // Initialize the map centered around India
      const map = L.map(mapContainerRef.current).setView(indiaCoordinates, 5); // Zoom level 5
      
      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);
    }
  }, []);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '400px' , marginLeft:'20px' }} />;
}

export default Map;
