/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

// Services
import Icon from 'react-native-vector-icons/FontAwesome';
import drinksService from '../../services/drinksService';

// Actions
import { setSelectedDrinkId } from '../../redux/actions/drinks';
import { handleLoadingState } from '../../redux/actions/settings';

// Components
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
  NotFoundText,
  ActivityIndicatorContainer,
} from './styles';

const { getDrinksByCategoryService, getDrinksByNameService } = drinksService;

const Drinks = () => {
  const dispatch = useDispatch();
  const { goBack, navigate } = useNavigation();
  const [drinksList, setDrinksList] = useState([]);
  const drinkCategory = useSelector((state) => state.drinks.drinkCategory);
  const searchText = useSelector((state) => state.drinks.searchDrinkText);
  const senderName = useSelector((state) => state.drinks.senderName);
  const isLoading = useSelector((state) => state.settings.isLoading);

  async function getDrinksByCategory() {
    const { drinks } = await getDrinksByCategoryService(drinkCategory);
    setDrinksList(drinks);
    dispatch(handleLoadingState({ isLoading: false }));
  }

  async function getDrinksByName() {
    const drinkName = searchText.trim().toLowerCase();
    const { drinks } = await getDrinksByNameService(drinkName);
    setDrinksList(drinks);
    dispatch(handleLoadingState({ isLoading: false }));
  }

  function handleSelectedDrink(selectedDrinkId) {
    dispatch(setSelectedDrinkId({ selectedDrinkId }));
    navigate('drink-details');
  }

  useEffect(() => {
    dispatch(handleLoadingState({ isLoading: true }));
    if (senderName === 'category') {
      getDrinksByCategory();
    }

    if (senderName === 'search') {
      getDrinksByName();
    }
  }, []);

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
              {isLoading ? (
                <ActivityIndicatorContainer>
                  <ActivityIndicator size="large" color="#e87200" />
                </ActivityIndicatorContainer>
              ) : drinksList ? (
                <DrinksList
                  windowSize={12}
                  data={drinksList}
                  renderItem={({ item }) => (
                    <DrinkItemContainer>
                      <DrinkItemInsideContainer>
                        <DrinkItemImage
                          source={{ uri: `${item.strDrinkThumb}/preview` }}
                        />
                        <DrinkItemTitle>{item.strDrink}</DrinkItemTitle>
                      </DrinkItemInsideContainer>
                      <DrinkItemButton
                        onPress={() => handleSelectedDrink(item.idDrink)}
                      >
                        <DrinkItemButtonText>Ver</DrinkItemButtonText>
                      </DrinkItemButton>
                    </DrinkItemContainer>
                  )}
                  keyExtractor={(item) => item.idDrink}
                />
              ) : (
                <DrinkItemContainer>
                  <NotFoundText>
                    Unfortunately, we dont find a cocktail called {searchText}
                    :(
                  </NotFoundText>
                </DrinkItemContainer>
              )}
            </InsideContainer>
          </BackgroundOverlay>
        </Background>
      </Container>
    </>
  );
};

export default Drinks;
