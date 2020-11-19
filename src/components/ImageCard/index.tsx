import React, { useState, useEffect } from 'react';

import { Card, Title } from './styled';
import Skeleton from '../Skeleton';

interface ImageCardProps {
  photo: string;
  title: string;
}

const ImageCard = ({ photo, title }: ImageCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload = () => setImageLoaded(true);
  }, [photo]);

  return (
    <>
      {imageLoaded ? (
        <Card photo={photo}>
          <Title>{title}</Title>
        </Card>
      ) : (
        <Skeleton width="90px" height="90px" />
      )}
    </>
  );
};

export default ImageCard;
