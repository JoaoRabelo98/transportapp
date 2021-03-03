import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { Form as Unform } from '@unform/mobile';
import colors from '../../styles/colors';

export const Container = styled.View`
    flex: 1;
    background: ${colors.primary};
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding-top: ${Platform.OS === 'android' ? 80 : 40}px;
`;

export const Header = styled.View`
    margin-top: 0;
    width: 100%;
    height: 24px;
    position: relative;
`;

export const MainContent = styled.View`
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;

export const BackButton = styled.TouchableOpacity``;

export const Title = styled.Text`
    font-size: 25px;
    color: ${colors.black};
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
    max-height: 108px;
    max-width: 281px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const ViewButton = styled.View`
    width: 311px;
    margin-top: 42px;
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

export const ViewRegressive = styled.View`
    margin-top: 16px;
`;

export const RegressiveText = styled.Text`
    font-size: 13px;
    color: ${colors.text_bellow_input};
`;

export const ViewResendCode = styled.View`
    margin-top: 126px;
`;
export const TextResendCode = styled.Text`
    color: ${colors.light_gray};
`;
export const ViewResendCodeButton = styled.View`
    align-items: center;
    margin-top: 6px;
`;
export const ResendCodeButton = styled.TouchableOpacity``;
export const ResendCodeText = styled.Text`
    color: ${colors.dark_text_link};
`;
