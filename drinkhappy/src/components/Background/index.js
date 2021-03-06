import styled from 'styled-components/native';
import background from '../../assets/background-1.jpg';

export const Container = styled.View`
  flex: 1;
`;

export const Background = styled.ImageBackground.attrs({
  source: background,
})`
  flex: 1;
`;

export const BackgroundOverlay = styled.View`
  flex: 1;
  background-color: black;
  opacity: 0.88;
`;

export const InsideContainer = styled.View`
  flex: 1;
  padding: 25px;
`;
