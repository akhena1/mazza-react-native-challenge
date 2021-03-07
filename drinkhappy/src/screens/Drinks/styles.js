import styled from 'styled-components';

export const TitleContainer = styled.Text`
  padding: 0px 30px 10px 30px;
  width: auto;
  margin: 0 auto;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #e78200;
`;

export const Title = styled.Text`
  font-family: 'Barlow-Regular';
  font-size: 20px;
  color: #e78200;
  margin: 0 auto;
`;

export const DrinksList = styled.FlatList`
  margin-top: 15px;
`;

export const DrinkItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  margin-top: 20px;
`;

export const DrinkItemInsideContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DrinkItemImage = styled.Image`
  border-radius: 10px;
  width: 83px;
  height: 87px;
`;

export const DrinkItemTitle = styled.Text`
  font-family: 'Lato-Regular';
  font-size: 16px;
  color: #fff;
  flex-direction: row;
  margin-left: 15px;
  max-width: 200px;
`;

export const DrinkItemButton = styled.TouchableOpacity`
  background-color: #fe7b02;
  border-radius: 5px;
  padding: 7px;
  margin-right: 6px;
`;

export const DrinkItemButtonText = styled.Text`
  font-family: 'Lato-Regular';
  font-size: 16px;
  color: #fff;
`;

export const NotFoundText = styled.Text`
  font-family: 'Barlow-Bold';
  font-size: 25px;
  color: #e87200;
  margin: 0 auto;
`;

export const ActivityIndicatorContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
