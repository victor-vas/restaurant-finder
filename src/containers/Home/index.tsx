import { ChangeEvent, useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import {
  Wrapper,
  Container,
  Search,
  Logo,
  CarouselTitle,
  Carousel,
} from './styled';
import { Card, Loader } from '../../components';

interface Restaurant {
  place_id: string;
  name: string;
  photos?: string[];
}

const HomeContainer = () => {
  const restaurants: Restaurant[] = [
    {
      place_id: '1',
      name: 'Sei Lá',
    },
    {
      place_id: '2',
      name: 'Sei Lá',
    },
    {
      place_id: '3',
      name: 'Sei Lá',
    },
    {
      place_id: '4',
      name: 'Sei Lá',
    },
    {
      place_id: '5',
      name: 'Sei Lá',
    },
    {
      place_id: '6',
      name: 'Sei Lá',
    },
  ];

  const [inputValue, setInputValue] = useState('');

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src="logo.svg" alt="Logo do buscador" />
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input
              value={inputValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.target.value)
              }
            />
          </TextField>

          {restaurants.length > 0 ? (
            <>
              <CarouselTitle>Na sua Área</CarouselTitle>
              <Carousel {...settings}>
                {restaurants.map((restaurant) => (
                  <Card
                    key={restaurant.place_id}
                    photo={`restaurant-fake${restaurant.place_id}.png`}
                    title={restaurant.name}
                  />
                ))}
              </Carousel>
            </>
          ) : (
            <Loader />
          )}
        </Search>
      </Container>
    </Wrapper>
  );
};

export default HomeContainer;
