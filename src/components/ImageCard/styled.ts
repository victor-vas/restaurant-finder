import styled from 'styled-components';

interface CardProps {
  photo: string;
}

export const Card = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props: CardProps) => props.photo});
  background-size: cover;
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #ffffff;
  font-size: 16px;
`;
