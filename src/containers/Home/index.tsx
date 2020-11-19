import { ChangeEvent, useState } from 'react';
import { Wrapper, Container, Search, Logo } from './styled';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

const HomeContainer = () => {
  const [inputValue, setInputValue] = useState('');

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
        </Search>
      </Container>
    </Wrapper>
  );
};

export default HomeContainer;
