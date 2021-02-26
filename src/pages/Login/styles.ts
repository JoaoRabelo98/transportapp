import { Platform } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primary};
    padding-top: ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Content = styled.View`
    flex: 1;
    align-items: center;
    font-size: 14px;
    color: ${colors.place_holder};
    justify-content: center;
    margin-top: 20%;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const FormView = styled.View`
    margin-top: 40px;
    align-items: center;
`;

export const WelcomeContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const WelcomeText = styled.Text`
    font-size: 25px;
    margin-top: 6px;
    color: ${colors.text_link};
    font-weight: bold;
`;

export const ForgotPasswordLinkContainer = styled.View`
    margin-top: 37px;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const ForgotPasswordLinkText = styled.Text`
    font-size: 14px;
    color: ${colors.text_bellow_input};
`;

export const RegisterContainer = styled.View`
    margin-top: 37px;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const RegisterText = styled.Text`
    font-size: 14px;
    color: ${colors.subtitle};
`;

export const RegisterLinkText = styled.Text`
    font-size: 14px;
    color: ${colors.text_link};
    font-weight: bold;
`;

export const ViewInputs = styled.View`
    flex: 1;
    justify-content: space-around;
    max-height: 128px;
`;
