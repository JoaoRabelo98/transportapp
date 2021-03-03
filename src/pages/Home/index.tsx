import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

import {
    ScrollView,
    Container,
    Header,
    BackgroundImageStyled,
    DeliverymanImageStyled,
    WelcomeContent,
    WelcomeMessage,
    PersonName,
    UserAvatarContent,
    UserAvatar,
    MegaphoneImgateStyled,
    MainContent,
    Title,
    SubTitle,
} from './styles';

import profileImg from '../../assets/profile/ProfileHome.png';
import MegaphoneImg from '../../assets/Home/Megaphone.png';
import BackgroundImage1 from '../../assets/Home/BackgroundImage1.png';
import DeliverymanImage from '../../assets/Home/BackgroundImage2.png';

const Home: React.FC = () => {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled
        >
            <ScrollView keyboardShouldPersistTaps="handled">
                <Container>
                    <Header>
                        <WelcomeContent>
                            <View style={{ flex: 1 }}>
                                <WelcomeMessage>
                                    Seja bem vindo Claudinei!
                                </WelcomeMessage>
                                <WelcomeMessage>
                                    Como podemos ajuda-lo hoje?
                                </WelcomeMessage>
                            </View>
                            <MegaphoneImgateStyled source={MegaphoneImg} />
                        </WelcomeContent>
                        <UserAvatarContent>
                            <UserAvatar source={profileImg} />
                            <PersonName>Claudinei Silva</PersonName>
                        </UserAvatarContent>
                    </Header>
                    <BackgroundImageStyled source={BackgroundImage1} />
                    <DeliverymanImageStyled source={DeliverymanImage} />
                    <MainContent>
                        <Title>Fique tranquilo</Title>
                        <SubTitle>
                            Insira o número da etiqueta ou escanei o código para{' '}
                            <SubTitle style={{ textDecorationLine: 'underline' }}>
                                rastrear
                            </SubTitle>{' '}
                            ou{' '}
                            <SubTitle style={{ textDecorationLine: 'underline' }}>
                                registrar
                            </SubTitle>{' '}
                            um item
                        </SubTitle>
                    </MainContent>
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Home;
