import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { Form as Unform } from '@unform/mobile';
import colors from '../../styles/colors';

export const Container = styled.View`
    background: ${colors.backgroud_modal};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const MainContent = styled.View`
    background: ${colors.primary};
    align-items: center;
    justify-content: space-around;
    width: 80%;
    height: 50%;
    border-radius: 20px;
    padding: 5%;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: ${colors.blue};
    font-weight: bold;
    text-align: center;
`;

export const SubTitle = styled.Text`
    font-size: 14px;
    color: ${colors.subtitle};
    text-align: center;
`;

export const ViewButton = styled.View`
    width: 80%;
`;

export const SvgStyled = styled.View`
    width: 80%;
    align-items: center;
    justify-content: center;
`;
