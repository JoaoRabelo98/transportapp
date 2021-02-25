import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled(RectButton)`
    width: 100%;
    height: 44px;
    background: ${colors.button};
    border-radius: 21px;
    margin-top: 8px;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    color: ${colors.primary};
    font-size: 14px;
`;
