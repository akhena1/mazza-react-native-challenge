import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';

// Actions
import { setDrinkCategory, setSearchText } from '../../redux/actions/drinks';

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
  {
    id: '7',
    name: 'Shot',
  },
  {
    id: '8',
    name: 'Shot',
  },
  {
    id: '9',
    name: 'Shot',
  },
  {
    id: '10',
    name: 'Shot',
  },
  {
    id: '11',
    name: 'Shot',
  },
  {
    id: '12',
    name: 'Shot',
  },
  {
    id: '13',
    name: 'Shot',
  },
  {
    id: '14',
    name: 'Shot',
  },
  {
    id: '15',
    name: 'Shot',
  },
  {
    id: '16',
    name: 'Shot',
  },
  {
    id: '17',
    name: 'Shot',
  },
  {
    id: '18',
    name: 'Shot',
  },
  {
    id: '19',
    name: 'Shot',
  },
  {
    id: '20',
    name: 'Shot',
  },
  {
    id: '21',
    name: 'Shot',
  },
  {
    id: '22',
    name: 'Shot',
  },
  {
    id: '23',
    name: 'Shot',
  },
  {
    id: '24',
    name: 'Shot',
  },
  {
    id: '25',
    name: 'Shot',
  },
];

const InitialScreen = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const [hideSearchInput, setHideSearchInput] = useState(true);
  const [searchDrinkText, setSearchDrinkText] = useState('');

  function handleSearchText() {
    if (searchDrinkText.length > 0) {
      dispatch(setSearchText({ searchDrinkText, senderName: "search" }));
      navigate('drinks');
    }
  }

  function handleSelectedCategory(drinkCategory) {
    dispatch(setDrinkCategory({ drinkCategory, senderName: "category" }));
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
                <Title>Categories</Title>
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
