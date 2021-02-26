import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
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

export const Title = styled.Text`
    font-size: 24px;
    color: ${colors.blue};
    font-weight: bold;
    margin: 37px 0 6px;
`;

export const MainContent = styled.View`
    align-items: center;
    margin-top: 10%;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const SubTitle = styled.Text`
    font-size: 14px;
    color: ${colors.subtitle};
    margin: 0px 0 48px;
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
    margin-bottom: 25px;
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
