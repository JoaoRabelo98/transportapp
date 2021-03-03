import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
    flex: 1;
    background: ${colors.primary};
    /* background-color: #000; */
    width: 100%;
`;

export const Header = styled.View`
    padding-top: 113px;
    margin-top: 0;
    width: 100%;
    height: 94px;
    position: relative;
    background: ${colors.button};
`;

export const BackgroundImageStyled = styled.Image`
    width: 100%;
    margin-top: -63px;
    height: 308px;
`;

export const DeliverymanImageStyled = styled.Image`
    margin-top: -172px;
    margin-left: 18%;
    width: 181px;
    height: 172px;
`;
