import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

// Services
import Icon from 'react-native-vector-icons/FontAwesome';
import drinksService from '../../services/drinksService';

// Actions
import { handleLoadingState } from '../../redux/actions/settings';

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
  ActivityIndicatorContainer,
} from './styles';

const { getDrinkDetailsByIdService } = drinksService;

const DrinkDetails = () => {
  const dispatch = useDispatch();
  const { goBack } = useNavigation();
  const selectedDrinkId = useSelector((state) => state.drinks.selectedDrinkId);
  const isLoading = useSelector((state) => state.settings.isLoading);
  const [drinkDetails, setDrinkDetails] = useState([]);

  async function getDrinkDetailsById() {
    dispatch(handleLoadingState({ isLoading: true }));
    const { drinks } = await getDrinkDetailsByIdService(selectedDrinkId);
    setDrinkDetails(drinks[0]);
    dispatch(handleLoadingState({ isLoading: false }));
  }

  useEffect(() => {
    getDrinkDetailsById();
  }, []);
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
            <DetailsContainer scrollEnabled>
              {isLoading ? (
                <ActivityIndicatorContainer>
                  <ActivityIndicator size="large" color="#e87200" />
                </ActivityIndicatorContainer>
              ) : (
                <>
                  <Title>{drinkDetails.strDrink}</Title>
                  <DrinkImage
                    source={{
                      uri: drinkDetails.strDrinkThumb,
                    }}
                  />
                  <Row>
                    <TopicTitle>Glass: </TopicTitle>
                    <TopicContent outsideFirstRow>
                      {drinkDetails.strGlass}
                    </TopicContent>
                  </Row>
                  <TopicTitle>Ingredients:</TopicTitle>
                  {drinkDetails.strIngredient1 ? (
                    <Row>
                      <TopicContent>
                        {'\u2022'} {drinkDetails.strIngredient1}
                      </TopicContent>
                      <TopicContent>
                        {':  '}
                        {drinkDetails.strMeasure1}
                      </TopicContent>
                    </Row>
                  ) : (
                    <></>
                  )}
                  {drinkDetails.strIngredient2 ? (
                    <Row>
                      <TopicContent>
                        {'\u2022'} {drinkDetails.strIngredient2}
                      </TopicContent>
                      <TopicContent>
                        {':  '}
                        {drinkDetails.strMeasure2}
                      </TopicContent>
                    </Row>
                  ) : (
                    <></>
                  )}
                  {drinkDetails.strIngredient3 ? (
                    <Row>
                      <TopicContent>
                        {'\u2022'} {drinkDetails.strIngredient3}
                      </TopicContent>
                      <TopicContent>
                        {':  '}
                        {drinkDetails.strMeasure3}
                      </TopicContent>
                    </Row>
                  ) : (
                    <></>
                  )}
                  {drinkDetails.strIngredient4 ? (
                    <Row>
                      <TopicContent>
                        {'\u2022'} {drinkDetails.strIngredient4}
                      </TopicContent>
                      <TopicContent>
                        {':  '}
                        {drinkDetails.strMeasure4}
                      </TopicContent>
                    </Row>
                  ) : (
                    <></>
                  )}
                  {drinkDetails.strIngredient5 ? (
                    <Row>
                      <TopicContent>
                        {'\u2022'} {drinkDetails.strIngredient5}
                      </TopicContent>
                      <TopicContent>
                        {':  '}
                        {drinkDetails.strMeasure5}
                      </TopicContent>
                    </Row>
                  ) : (
                    <></>
                  )}
                  {drinkDetails.strIngredient6 ? (
                    <Row>
                      <TopicContent>
                        {'\u2022'} {drinkDetails.strIngredient6}
                      </TopicContent>
                      <TopicContent>
                        {':  '}
                        {drinkDetails.strMeasure6}
                      </TopicContent>
                    </Row>
                  ) : (
                    <></>
                  )}
                  {drinkDetails.strIngredient7 ? (
                    <Row>
                      <TopicContent>
                        {'\u2022'} {drinkDetails.strIngredient7}
                      </TopicContent>
                      <TopicContent>
                        {':  '}
                        {drinkDetails.strMeasure7}
                      </TopicContent>
                    </Row>
                  ) : (
                    <></>
                  )}
                  {drinkDetails.strIngredient8 ? (
                    <Row>
                      <TopicContent>
                        {'\u2022'} {drinkDetails.strIngredient8}
                      </TopicContent>
                      <TopicContent>
                        {':  '}
                        {drinkDetails.strMeasure8}
                      </TopicContent>
                    </Row>
                  ) : (
                    <></>
                  )}
                  {drinkDetails.strIngredient9 ? (
                    <Row>
                      <TopicContent>
                        {'\u2022'} {drinkDetails.strIngredient9}
                      </TopicContent>
                      <TopicContent>
                        {':  '}
                        {drinkDetails.strMeasure9}
                      </TopicContent>
                    </Row>
                  ) : (
                    <></>
                  )}
                  {drinkDetails.strIngredient10 ? (
                    <Row>
                      <TopicContent>
                        {'\u2022'} {drinkDetails.strIngredient10}
                      </TopicContent>
                      <TopicContent>
                        {':  '}
                        {drinkDetails.strMeasure10}
                      </TopicContent>
                    </Row>
                  ) : (
                    <></>
                  )}
                  {drinkDetails.strIngredient11 ? (
                    <Row>
                      <TopicContent>
                        {'\u2022'} {drinkDetails.strIngredient11}
                      </TopicContent>
                      <TopicContent>
                        {':  '}
                        {drinkDetails.strMeasure11}
                      </TopicContent>
                    </Row>
                  ) : (
                    <></>
                  )}
                  {drinkDetails.strIngredient12 ? (
                    <Row>
                      <TopicContent>
                        {'\u2022'} {drinkDetails.strIngredient12}
                      </TopicContent>
                      <TopicContent>
                        {':  '}
                        {drinkDetails.strMeasure12}
                      </TopicContent>
                    </Row>
                  ) : (
                    <></>
                  )}
                  {drinkDetails.strIngredient13 ? (
                    <Row>
                      <TopicContent>
                        {'\u2022'} {drinkDetails.strIngredient13}
                      </TopicContent>
                      <TopicContent>
                        {':  '}
                        {drinkDetails.strMeasure13}
                      </TopicContent>
                    </Row>
                  ) : (
                    <></>
                  )}
                  {drinkDetails.strIngredient14 ? (
                    <Row>
                      <TopicContent>
                        {'\u2022'} {drinkDetails.strIngredient14}
                      </TopicContent>
                      <TopicContent>
                        {':  '}
                        {drinkDetails.strMeasure14}
                      </TopicContent>
                    </Row>
                  ) : (
                    <></>
                  )}
                  {drinkDetails.strIngredient15 ? (
                    <Row>
                      <TopicContent>
                        {'\u2022'} {drinkDetails.strIngredient15}
                      </TopicContent>
                      <TopicContent>
                        {':  '}
                        {drinkDetails.strMeasure15}
                      </TopicContent>
                    </Row>
                  ) : (
                    <></>
                  )}
                  <TopicTitle>How to prepare: </TopicTitle>
                  <TopicContent>{drinkDetails.strInstructions}</TopicContent>
                </>
              )}
            </DetailsContainer>
          </InsideContainer>
        </BackgroundOverlay>
      </Background>
    </Container>
  );
};

export default DrinkDetails;
