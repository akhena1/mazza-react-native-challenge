import styled from 'styled-components';

export const InsideContainer = styled.ScrollView`
  flex: 1;
  padding: 20px;
  margin-bottom: 15px;
`;

export const DetailsContainer = styled.ScrollView`
  flex: 1;
  padding: 25px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-family: 'Lato-Regular';
  font-size: 16px;
  color: #fff;
  margin: 0 auto;
  padding: 10px;
`;

export const DrinkImage = styled.Image`
  width: 207px;
  height: 217px;
  border-radius: 10px;
  margin: 0 auto;
`;

export const Row = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;

export const TopicTitle = styled.Text`
  font-family: 'Lato-Bold';
  font-size: 16px;
  color: #fff;
  margin-top: 20px;
`;

export const TopicContent = styled.Text`
  font-family: 'Lato-Regular';
  font-size: 16px;
  color: #fff;
  margin-top: ${(props) => (props.outsideFirstRow ? '20' : '9')}px;
`;

export const ActivityIndicatorContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
