import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
    flex: 1;
    background: ${colors.primary};
    width: 100%;
`;

export const Header = styled.View`
    width: 100%;
    height: 94px;
    position: relative;
    background: ${colors.button};
    align-items: center;
`;

export const UserAvatarButton = styled.View`
    margin-top: -115px;
    align-self: flex-start;
    margin-left: 10%;
    flex-direction: row;
`;

export const UserAvatar = styled.Image`
    width: 65px;
    height: 65px;
    border-radius: 35px;
`;

export const Title = styled.Text`
    margin-left: 10px;
    font-size: 18px;
    color: ${colors.primary};
`;

export const WelcomeContent = styled.View`
    margin-top: 60px;
    width: 80%;
    height: 94px;
    border-radius: 10px;
    position: relative;
    background-color: #000;
`;
export const BackgroundImageStyled = styled.Image`
    margin-top: -63px;
    width: 100%;
    height: 308px;
`;

export const DeliverymanImageStyled = styled.Image`
    margin-top: -172px;
    margin-left: 18%;
    width: 181px;
    height: 172px;
`;
