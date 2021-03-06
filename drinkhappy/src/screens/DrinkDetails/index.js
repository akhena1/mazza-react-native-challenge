import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

// Components
import {
  Background,
  BackgroundOverlay,
  Container,
} from '../../components/Background';
import { TitleBar, BackButton } from '../../components/TitleBar';
import {
  InsideContainer,
  DetailsContainer,
  Title,
  DrinkImage,
  Row,
  TopicTitle,
  TopicContent,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const DrinkDetails = () => {
  const { goBack } = useNavigation();
  const selectedDrinkId = useSelector((state) => state.drinks.selectedDrinkId);

  return (
    <Container>
      <Background>
        <BackgroundOverlay>
          <TitleBar>
            <BackButton onPress={() => goBack()}>
              <Icon name="arrow-left" size={22} color="#e78200" />
            </BackButton>
          </TitleBar>
          <InsideContainer>
            <DetailsContainer scrollEnabled={true}>
              <Title>3 - Mile Long island Iced Tea</Title>
              <DrinkImage
                source={{
                  uri:
                    'https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg',
                }}
              />
              <Row>
                <TopicTitle>Glass: </TopicTitle>
                <TopicContent outsideRow >Collins Glass</TopicContent>
              </Row>
              <TopicTitle>Ingredients:</TopicTitle>
              <TopicContent>{'\u2022'} Gin</TopicContent>
              <TopicContent>{'\u2022'} Light Rum</TopicContent>
              <TopicContent>{'\u2022'} Tequila</TopicContent>
              <TopicContent>{'\u2022'} Triple sec</TopicContent>
              <TopicContent>{'\u2022'} Vodka</TopicContent>
              <TopicContent>{'\u2022'} Coca-cola</TopicContent>
              <TopicContent>{'\u2022'} Sweet and sour</TopicContent>
              <TopicContent>{'\u2022'} Bitters</TopicContent>
              <TopicContent>{'\u2022'} Lemon</TopicContent>
              <TopicTitle>How to prepare: </TopicTitle>
              <TopicContent>
                Fill 14oz glass with ice and alcohol. Fill 2/3 glass with cola
                and remainder with sweet sour. Top with dash of bitters and
                lemon wedge.
              </TopicContent>
            </DetailsContainer>
          </InsideContainer>
        </BackgroundOverlay>
      </Background>
    </Container>
  );
};

export default DrinkDetails;
