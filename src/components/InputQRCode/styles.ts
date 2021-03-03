import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
    width: 100%;
    height: 55px;
    padding: 0 20px 0 10px;
    background: ${colors.primary};
    border-radius: 10px;
    border: 1px;
    border-color: ${colors.border_qrcode_input};
    flex-direction: row;
    justify-content: space-between;
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

export const QRCodeStyled = styled.Image`
    margin-left: 10px;
    width: 20px;
    height: 20px;
    align-self: center;
`;
