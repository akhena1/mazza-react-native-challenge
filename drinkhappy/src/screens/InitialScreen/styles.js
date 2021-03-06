import styled from 'styled-components/native';
import LogoImage from '../../assets/drinkhappy-logo-2.png';

export const TitleContainer = styled.View`
  padding: 0px 35px 10px 35px;
  width: 65%;
  margin: 0 auto;
  margin-top: 35px;
`;

export const Title = styled.Text`
  font-family: 'Barlow-Regular';
  font-size: 26px;
  color: #fff;
  margin: 0 auto;
`;

export const Logo = styled.Image.attrs({
  source: LogoImage,
})`
  margin: 0 auto;
`;

export const CategoryButton = styled.TouchableOpacity`
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: #e78200;
  border-radius: 10px;
  padding: 15px;
  margin-top: 29px;
`;

export const CategoryButtonText = styled.Text`
  font-family: 'Barlow-Regular';
  font-size: 21px;
  color: #e78200;
  margin: 0 auto;
`;

export const CategoryList = styled.FlatList`
  height: 67%;
  flex-grow: 0;
  margin-top: 20px;
`;

export const FooterMenu = styled.View`
  height: 60px;
  width: 100%;
  margin-right: 10px;
  background-color: #e78200;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  border-top-left-radius: 50px;
`;

export const FooterMenuButton = styled.TouchableOpacity`
  padding: 14px;
  flex-direction: row;
`;

export const SearchInput = styled.TextInput`
  width: 72%;
  background-color: #fff;
  height: 40px;
  border-radius: 10px;
  border-top-left-radius: 30px;
  font-size: 16px;
  padding-left: 15px;
`;
