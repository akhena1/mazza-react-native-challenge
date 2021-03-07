import React, { useState, useEffect } from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';

// Service
import drinkService from '../../services/drinksService';

// Actions
import { setDrinkCategory, setSearchText } from '../../redux/actions/drinks';
import { handleLoadingState } from '../../redux/actions/settings';

// Components
import {
  Container,
  Background,
  BackgroundOverlay,
  InsideContainer,
} from '../../components/Background';
import {
  Title,
  TitleContainer,
  Logo,
  CategoryButton,
  CategoryButtonText,
  CategoryList,
  FooterMenu,
  FooterMenuButton,
  SearchInput,
} from './styles';

const { getCategoriesListService } = drinkService;

const InitialScreen = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const [hideSearchInput, setHideSearchInput] = useState(true);
  const [searchDrinkText, setSearchDrinkText] = useState('');
  const [categoriesList, setCategoriesList] = useState([]);
  const isLoading = useSelector((state) => state.settings.isLoading);

  async function getCategoriesList() {
    dispatch(handleLoadingState({ isLoading: true }));
    const { drinks } = await getCategoriesListService();
    setCategoriesList(drinks);
    dispatch(handleLoadingState({ isLoading: false }));
  }

  function handleSearchText() {
    if (searchDrinkText.length > 0) {
      dispatch(setSearchText({ searchDrinkText, senderName: 'search' }));
      navigate('drinks');
    }
  }

  function handleSelectedCategory(drinkCategory) {
    dispatch(setDrinkCategory({ drinkCategory, senderName: 'category' }));
    navigate('drinks');
  }

  useEffect(() => {
    getCategoriesList();
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#e78200" />
      <Container>
        <Background>
          <BackgroundOverlay>
            <InsideContainer>
              <Logo />
              <TitleContainer>
                <Title>Categories</Title>
              </TitleContainer>
              {isLoading ? (
                <ActivityIndicator size="large" color="#e87200" />
              ) : (
                <CategoryList
                  data={categoriesList}
                  renderItem={({ item }) => (
                    <CategoryButton
                      onPress={() => handleSelectedCategory(item.strCategory)}
                    >
                      <CategoryButtonText>
                        {item.strCategory}
                      </CategoryButtonText>
                    </CategoryButton>
                  )}
                  keyExtractor={(item) => item.id}
                />
              )}
            </InsideContainer>
            <FooterMenu>
              {hideSearchInput ? (
                <FooterMenuButton onPress={() => setHideSearchInput(false)}>
                  <Icon name="search" color="#fff" size={20} />
                </FooterMenuButton>
              ) : (
                <>
                  <SearchInput
                    value={searchDrinkText}
                    onChangeText={(text) => setSearchDrinkText(text)}
                    autoFocus
                    placeholder="Search a cocktail.."
                  />
                  <FooterMenuButton onPress={() => handleSearchText()}>
                    <Icon
                      name="search"
                      color={searchDrinkText ? '#fff' : '#d3d3d3'}
                      size={20}
                    />
                  </FooterMenuButton>
                  <FooterMenuButton onPress={() => setHideSearchInput(true)}>
                    <Icon name="chevron-down" size={20} color="#fff" />
                  </FooterMenuButton>
                </>
              )}
            </FooterMenu>
          </BackgroundOverlay>
        </Background>
      </Container>
    </>
  );
};

export default InitialScreen;
