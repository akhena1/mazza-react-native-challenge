import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { MOCK_DRINKS_LIST } from './drinksFixture';

// Actions
import { setSelectedDrinkId } from '../../redux/actions/drinks';

// Components
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  Background,
  BackgroundOverlay,
  InsideContainer,
} from '../../components/Background';
import { TitleBar, BackButton } from '../../components/TitleBar';
import {
  TitleContainer,
  Title,
  DrinksList,
  DrinkItemContainer,
  DrinkItemImage,
  DrinkItemTitle,
  DrinkItemButton,
  DrinkItemButtonText,
  DrinkItemInsideContainer,
} from './styles';

const Drinks = () => {
  const dispatch = useDispatch();
  const { goBack, navigate } = useNavigation();
  const drinkCategory = useSelector((state) => state.drinks.drinkCategory);
  const searchText = useSelector((state) => state.drinks.searchDrinkText);
  const senderName = useSelector((state) => state.drinks.senderName);

  function handleSelectedDrink(selectedDrinkId) {
    dispatch(setSelectedDrinkId({ selectedDrinkId }));
    navigate('drink-details');
  }

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
                <Title>
                  {senderName === 'category' ? drinkCategory : searchText}
                </Title>
              </TitleContainer>
              <DrinksList
                windowSize={12}
                data={MOCK_DRINKS_LIST}
                renderItem={({ item }) => {
                  return (
                    <DrinkItemContainer>
                      <DrinkItemInsideContainer>
                        <DrinkItemImage source={{ uri: item.strDrinkThumb }} />
                        <DrinkItemTitle>{item.strDrink}</DrinkItemTitle>
                      </DrinkItemInsideContainer>
                      <DrinkItemButton
                        onPress={() => handleSelectedDrink(item.idDrink)}
                      >
                        <DrinkItemButtonText>Ver</DrinkItemButtonText>
                      </DrinkItemButton>
                    </DrinkItemContainer>
                  );
                }}
                keyExtractor={(item) => item.idDrink}
              />
            </InsideContainer>
          </BackgroundOverlay>
        </Background>
      </Container>
    </>
  );
};

export default Drinks;
