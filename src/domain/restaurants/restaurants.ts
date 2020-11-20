export interface IRestaurant {
  business_status: string;
  geometry: {
    location: {
      lat: () => number;
      lng: () => number;
    };
  };
  place_id: string;
  name: string;
  rating: number;
  formatted_address: string;
  formatted_phone_number: string;
  icon: string;
  opening_hours: {
    isOpen: () => boolean;
  };
  photos: {
    height: number;
    width: number;
    getUrl: () => string;
  }[];
  plus_code: {
    compound_code: string;
    global_code: string;
  };
  price_level: number;
  reference: string;
  scope: string;
  types: string[];
  user_ratings_total: number;
  vicinity: string;
}
