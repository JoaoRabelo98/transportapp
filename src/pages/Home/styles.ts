import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const ScrollView = styled.ScrollView`
    background: ${colors.primary};
`;

export const Container = styled.View`
    flex: 1;
    width: 100%;
`;

export const Header = styled.View`
    width: 100%;
    height: 94px;
    position: relative;
    background: ${colors.button};
    align-items: center;
`;

export const UserAvatarContent = styled.View`
    position: absolute;
    margin-top: 35px;
    align-self: flex-start;
    margin-left: 10%;
    flex-direction: row;
`;

export const UserAvatar = styled.Image`
    width: 65px;
    height: 65px;
    border-radius: 35px;
`;

export const PersonName = styled.Text`
    margin-left: 10px;
    font-size: 18px;
    color: ${colors.primary};
`;

export const WelcomeContent = styled.View`
    margin-top: 60px;
    padding: 10px 10px 0 75px;
    width: 80%;
    border-radius: 10px;
    background: ${colors.primary};
    flex-direction: row;
    justify-content: space-between;
`;

export const WelcomeMessage = styled.Text`
    font-size: 14px;
    color: ${colors.subtitle};
`;

export const MegaphoneImgateStyled = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 35px;
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

export const MainContent = styled.View`
    margin-top: 10px;
    flex: 1;
    width: 80%;
    align-self: center;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: ${colors.black};
`;

export const SubTitle = styled.Text`
    margin-top: 10px;
    font-size: 13px;
    color: ${colors.black};
`;

export const InputQRCodeContent = styled.View`
    margin-top: 20px;
`;

export const CardsContent = styled.View`
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between;
`;

export const CardImage = styled.Image`
    width: 65px;
    height: 65px;
`;

export const CardTitle = styled.Text`
    margin-top: 10px;
    font-size: 13px;
    color: ${colors.black};
`;
