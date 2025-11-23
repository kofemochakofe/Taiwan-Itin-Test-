export interface Location {
  id: string;
  name: string;
  note?: string;
  url: string;
  lat: number;
  lng: number;
}

export interface DayItinerary {
  day: number;
  locations: Location[];
}

export interface MapViewState {
  lat: number;
  lng: number;
  zoom: number;
}