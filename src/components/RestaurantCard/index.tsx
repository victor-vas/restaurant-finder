import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { RestaurantType } from '../../containers/Home';

// import Skeleton from '../Skeleton';

import {
  Restaurant,
  RestaurantInfo,
  RestaurantPhoto,
  Title,
  Address,
} from './styled';

interface RestaurantCardProps {
  restaurant: RestaurantType;
  onClick: () => void;
}

const RestaurantCard = ({ restaurant, onClick }: RestaurantCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars
          count={5}
          isHalf
          value={restaurant.rating}
          edit={false}
          activeColor="#e7711c"
        />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantPhoto
        imageLoaded={imageLoaded}
        src="restaurant-fake1.png"
        onLoad={() => setImageLoaded(true)}
        alt="Foto do Restaurante"
      />
      {/* {!imageLoaded && <Skeleton width="100px" height="100px" />} */}
    </Restaurant>
  );
};

export default RestaurantCard;
