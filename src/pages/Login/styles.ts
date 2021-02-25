import { Platform } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';


export const Container = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  justify-content: center;
  background-color: ${colors.primary};
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Content = styled.View `
    flex: 1;
    align-items: center;
    font-size: 14px;
    color: ${colors.place_holder};
    justify-content: center;
    width: 100%;
    margin-top: 100%;
`

export const ForgotPasswordLinkContainer = styled.View`
   margin-top: 37px;
   width: 100%;
   justify-content: center;
   align-items: center;
`

export const ForgotPasswordLinkText = styled.Text`
    font-size: 14px;
    color: ${colors.text_bellow_input};
`

export const RegisterContainer = styled.View`
   margin-top: 37px;
   width: 100%;
   justify-content: center;
   align-items: center;
`

export const RegisterText = styled.Text`
    font-size: 14px;
    color: ${colors.subtitle};
`

export const RegisterLinkText = styled.Text`
    font-size: 14px;
    color: ${colors.text_link};
    font-weight: bold
`
