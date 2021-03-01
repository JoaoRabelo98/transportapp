import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { Form as Unform } from '@unform/mobile';
import colors from '../../styles/colors';

export const Container = styled.View`
    flex: 1;
    background: ${colors.primary};
    width: 100%;
`;

export const Header = styled.View`
    padding-top: ${Platform.OS === 'android' ? 80 : 40}px;
    margin-top: 0;
    width: 100%;
    height: 94px;
    position: relative;
`;

export const MainContent = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-bottom: 20%;
`;

export const BackButton = styled.TouchableOpacity``;

export const Title = styled.Text`
    font-size: 25px;
    color: ${colors.button};
    font-weight: bold;
    margin: 37px 0 6px;
`;

export const SubTitleContent = styled.View`
    margin-top: 20px;
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
    /* max-height: 108px; */
    justify-content: center;
`;

export const ViewButton = styled.View`
    width: 311px;
    margin-top: 42px;
`;

export const Form = styled(Unform)`
    width: 100%;
    align-items: center;
`;
