import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import { Location } from '../types';
import L from 'leaflet';

// Function to create a numbered div icon
const createNumberedIcon = (index: number, isSelected: boolean) => {
  return L.divIcon({
    className: isSelected ? 'custom-marker-icon custom-marker-selected' : 'custom-marker-icon',
    html: `<div class="marker-pin" data-index="${index}"></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30], // Point of the pin
    popupAnchor: [0, -30]
  });
};

interface MapViewProps {
  locations: Location[];
  selectedLocationId: string | null;
  onMarkerClick: (loc: Location) => void;
}

// Component to handle map bounds updates
const MapController: React.FC<{ locations: Location[], selectedLocationId: string | null }> = ({ locations, selectedLocationId }) => {
  const map = useMap();

  useEffect(() => {
    if (locations.length > 0) {
      const bounds = L.latLngBounds(locations.map(l => [l.lat, l.lng]));
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 15 });
    }
  }, [locations, map]);

  useEffect(() => {
    if (selectedLocationId) {
       const loc = locations.find(l => l.id === selectedLocationId);
       if (loc) {
         map.setView([loc.lat, loc.lng], 16, { animate: true });
       }
    }
  }, [selectedLocationId, locations, map]);

  return null;
};

export const MapView: React.FC<MapViewProps> = ({ locations, selectedLocationId, onMarkerClick }) => {
  // Calculate path for polyline
  const polylinePositions = locations.map(loc => [loc.lat, loc.lng] as [number, number]);

  return (
    <MapContainer center={[22.99, 120.21]} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapController locations={locations} selectedLocationId={selectedLocationId} />
      
      {locations.map((loc, index) => (
        <Marker 
            key={loc.id} 
            position={[loc.lat, loc.lng]}
            icon={createNumberedIcon(index + 1, selectedLocationId === loc.id)}
            eventHandlers={{
                click: () => onMarkerClick(loc)
            }}
            zIndexOffset={selectedLocationId === loc.id ? 1000 : 0}
        >
          <Popup>
            <div className="p-1 text-center">
                <strong className="block mb-1 font-medium text-sm text-indigo-700">
                   <span className="inline-block w-5 h-5 bg-indigo-100 text-indigo-700 rounded-full text-xs leading-5 mr-1">
                     {index + 1}
                   </span>
                   {loc.name}
                </strong>
                <a href={loc.url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline">Open in Google Maps</a>
            </div>
          </Popup>
        </Marker>
      ))}

      {locations.length > 1 && (
        <Polyline 
            positions={polylinePositions} 
            pathOptions={{ 
              color: '#6366f1', 
              weight: 4, 
              opacity: 0.7, 
              dashArray: '10, 10' 
            }} 
        />
      )}
    </MapContainer>
  );
};