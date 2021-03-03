import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
    width: 30%;
    height: 150px;
    background: ${colors.primary};
    border-radius: 10px;
    border: 1px;
    border-color: ${colors.primary};
    justify-content: center;
    align-items: center;
`;

export const TouchableOpacityView = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;
