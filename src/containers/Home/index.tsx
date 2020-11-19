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
  ModalTitle,
  ModalContent,
} from './styled';
import {
  Card,
  Loader,
  RestaurantCard,
  Skeleton,
  Modal,
} from '../../components';

export interface RestaurantType {
  place_id?: string;
  name?: string;
  photos?: string[];
  rating?: number;
  vicinity?: string;
  formatted_address?: string;
  formatted_phone_number?: string;
  opening_hours?: {
    open_now: string;
  };
}

const HomeContainer = () => {
  const restaurants: RestaurantType[] = [
    {
      place_id: '1',
      name: 'Sei Lá',
      rating: 3,
      vicinity: 'asdasdasd dasdasd',
      formatted_address: 'das dadaw dasda dadsad',
      formatted_phone_number: '2332131',
    },
    {
      place_id: '2',
      name: 'Sei Lá',
      rating: 4,
      vicinity: 'asdasdasd dasdasd',
      formatted_address: 'das dadaw dasda dadsad',
      formatted_phone_number: '2332131',
    },
    {
      place_id: '3',
      name: 'Sei Lá',
      rating: 3.5,
      vicinity: 'asdasdasd dasdasd',
      formatted_address: 'das dadaw dasda dadsad',
      formatted_phone_number: '2332131',
    },
    {
      place_id: '4',
      name: 'Sei Lá',
      rating: 5,
      vicinity: 'asdasdasd dasdasd',
      formatted_address: 'das dadaw dasda dadsad',
      formatted_phone_number: '564654',
    },
    {
      place_id: '5',
      name: 'Sei Lá',
      rating: 3,
      vicinity: 'asdasdasd dasdasd',
      formatted_address: 'das dadaw dasda dadsad',
      formatted_phone_number: '54646546',
    },
    {
      place_id: '6',
      name: 'Sei Lá',
      rating: 3,
      vicinity: 'asdasdasd dasdasd',
      formatted_address: 'das dadaw dasda dadsad',
      formatted_phone_number: '5464654',
    },
  ];

  const [restaurantSelected, setrestaurantSelected] = useState<RestaurantType>(
    {},
  );
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);
  const [placeId, setPlaceId] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  const handleOpenModal = (placeId: string) => {
    setPlaceId(placeId);
    setModalOpened(true);
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

        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.place_id}
            onClick={() => handleOpenModal(restaurant.place_id)}
            restaurant={restaurant}
          />
        ))}
      </Container>
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        {restaurantSelected ? (
          <>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModalContent>
              {restaurantSelected?.formatted_phone_number}
            </ModalContent>
            <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
            <ModalContent>
              {restaurantSelected?.opening_hours?.open_now
                ? 'Aberto agora'
                : 'Fechado neste momento'}
            </ModalContent>
          </>
        ) : (
          <>
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
          </>
        )}
      </Modal>
    </Wrapper>
  );
};

export default HomeContainer;
