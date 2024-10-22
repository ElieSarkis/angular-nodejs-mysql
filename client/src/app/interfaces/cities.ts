export interface City {
    city_id: number,
    city_name: string;
    name_native: string;
    country: string;
    continent: string;
    latitude: string;
    longitude: string;
    population: string;
    founded: string;
    landmarks: string[];
    image?: string;
    imageSelected?: boolean;
  }
  
 export interface CitiesResponse {
    cities: City[];
  }
  
  export interface cityDetails {
    city_name: string;
    longitude: string;
    latitude: string;
    landmarks: string[];
  }