import { Platform } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
    background-color: ${colors.primary};
`;

export const Content = styled.View`
    padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
    flex: 1;
    align-items: center;
    font-size: 14px;
    color: ${colors.place_holder};
    justify-content: center;
    width: 100%;
`;

export const WelcomeContainer = styled.View`
    margin-bottom: 60px;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const WelcomeText = styled.Text`
    font-size: 25px;
    color: ${colors.text_link};
    font-weight: bold;
    margin-bottom: 6px;
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

export const BorderContainer = styled.View`
    margin-top: 100%;
    height: 50px;
    border: 1px;
    border-color: ${colors.primary};
    border-bottom-color: transparent;
    border-radius: 50px;
    width: 100%;
    box-shadow: 0 -5px 3px #0000005f;
    align-self: center;
`;
