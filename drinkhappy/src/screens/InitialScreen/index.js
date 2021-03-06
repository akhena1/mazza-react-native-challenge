import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';

// Actions
import { setDrinkCategory } from '../../redux/actions/drinks';

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

const MOCK_DRINKS_CATEGORIES = [
  {
    id: '1',
    name: 'Ordinary Drink',
  },
  {
    id: '2',
    name: 'Cocktail',
  },
  {
    id: '3',
    name: 'Milk / Float / Shake',
  },
  {
    id: '4',
    name: 'Cocoa',
  },
  {
    id: '5',
    name: 'Shot',
  },
  {
    id: '6',
    name: 'Shot',
  },
];

const InitialScreen = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const [hideSearchInput, setHideSearchInput] = useState(true);
  const [searchText, setSearchText] = useState('');

  function handleSearch() {
    if (searchText.length > 0) {
      alert(searchText);
    }
  }

  function handleSelectedCategory(drinkCategory) {
    dispatch(setDrinkCategory({ drinkCategory }));
    navigate('drinks');
  }

  return (
    <>
      <StatusBar backgroundColor="#e78200" />
      <Container>
        <Background>
          <BackgroundOverlay>
            <InsideContainer>
              <Logo />
              <TitleContainer>
                <Title>Categorias</Title>
              </TitleContainer>
              <CategoryList
                data={MOCK_DRINKS_CATEGORIES}
                renderItem={({ item }) => (
                  <CategoryButton
                    onPress={() => handleSelectedCategory(item.name)}
                  >
                    <CategoryButtonText>{item.name}</CategoryButtonText>
                  </CategoryButton>
                )}
                keyExtractor={(item) => item.id}
              />
            </InsideContainer>
            <FooterMenu>
              {hideSearchInput ? (
                <FooterMenuButton onPress={() => setHideSearchInput(false)}>
                  <Icon name="search" color="#fff" size={20} />
                </FooterMenuButton>
              ) : (
                <>
                  <SearchInput
                    value={searchText}
                    onChangeText={(text) => setSearchText(text)}
                    autoFocus
                    placeholder="Search a cocktail.."
                  />
                  <FooterMenuButton onPress={() => handleSearch()}>
                    <Icon
                      name="search"
                      color={searchText ? '#fff' : '#d3d3d3'}
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
