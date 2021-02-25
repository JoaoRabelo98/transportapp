import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
    width: 100%;
    height: 44px;
    padding: 0 16px;
    background: ${colors.backgroud_input};
    border-radius: 30px;
    margin-bottom: 8px;
    border-width: 2px;
    border-color: ${colors.backgroud_input};
    flex-direction: row;
    align-items: center;
`;

export const TextInput = styled.TextInput`
    flex: 1;
    color: ${colors.place_holder};
    ::placeholder {
        color: ${colors.place_holder};
        font-size: 14px;
    }
`;
