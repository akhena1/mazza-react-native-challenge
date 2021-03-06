import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

// Components
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  Background,
  BackgroundOverlay,
  InsideContainer,
} from '../../components/Background';
import { TitleBar, BackButton } from '../../components/TitleBar';
import { TitleContainer, Title } from './styles';

const Drinks = () => {
  const { goBack } = useNavigation();
  const drinkCategory = useSelector((state) => state.drinks.drinkCategory);

  useEffect(() => {
    console.log(drinkCategory)
  }, [])

  return (
    <>
      <Container>
        <Background>
          <BackgroundOverlay>
            <TitleBar>
              <BackButton onPress={() => goBack()}>
                <Icon name="arrow-left" size={22} color="#e78200" />
              </BackButton>
            </TitleBar>
            <InsideContainer>
              <TitleContainer>
                <Title>{drinkCategory}</Title>
              </TitleContainer>
            </InsideContainer>
          </BackgroundOverlay>
        </Background>
      </Container>
    </>
  );
};

export default Drinks;
