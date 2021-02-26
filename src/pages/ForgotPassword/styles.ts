import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { Form as Unform } from '@unform/mobile';
import colors from '../../styles/colors';

export const Container = styled.View`
    flex: 1;
    background: ${colors.primary};
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const MainContent = styled.View`
    align-items: center;
    margin-top: 20%;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding-bottom: 20%;
`;

export const Title = styled.Text`
    font-size: 25px;
    color: ${colors.blue};
    font-weight: bold;
    margin: 37px 0 6px;
`;

export const SubTitleContent = styled.View`
    width: 80%;
`;

export const SubTitle = styled.Text`
    font-size: 14px;
    color: ${colors.subtitle};
    margin: 0px 0 48px;
    text-align: center;
`;

export const GroupInputs = styled.View`
    max-width: 327px;
    max-height: 108px;
    justify-content: center;
`;

export const ViewButton = styled.View`
    width: 311px;
    margin-top: 42px;
`;

export const ForgotPassword = styled.TouchableOpacity`
    margin-top: 25px;
`;

export const ForgotPasswordText = styled.Text`
    color: ${colors.text_bellow_input};
    font-size: 14px;
`;

export const RegisterAccount = styled.View`
    margin-top: 53px;
`;

export const RegisterAccountText = styled.Text`
    color: ${colors.subtitle};
    font-size: 14px;
`;

export const RegisterAccountButton = styled.TouchableOpacity``;
export const RegisterAccountButtonText = styled.Text`
    color: ${colors.text_link};
    font-weight: bold;
`;

export const Form = styled(Unform)`
    width: 100%;
    align-items: center;
`;
