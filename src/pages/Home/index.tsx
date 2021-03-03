import React from 'react';
import { KeyboardAvoidingView, ScrollView, Platform, View } from 'react-native';

import {
    Container,
    Header,
    BackgroundImageStyled,
    DeliverymanImageStyled,
    WelcomeContent,
    SubTitle,
    Title,
    UserAvatarContent,
    UserAvatar,
    MegaphoneImgateStyled,
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
            <ScrollView
                contentContainerStyle={{ flex: 1 }}
                keyboardShouldPersistTaps="handled"
            >
                <Container>
                    <Header>
                        <WelcomeContent>
                            <View style={{ flex: 1 }}>
                                <SubTitle>Seja bem vindo Claudinei!</SubTitle>
                                <SubTitle>Como podemos ajuda-lo hoje?</SubTitle>
                            </View>
                            <MegaphoneImgateStyled source={MegaphoneImg} />
                        </WelcomeContent>
                        <UserAvatarContent>
                            <UserAvatar source={profileImg} />
                            <Title>Claudinei Silva</Title>
                        </UserAvatarContent>
                    </Header>
                    <BackgroundImageStyled source={BackgroundImage1} />
                    <DeliverymanImageStyled source={DeliverymanImage} />
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Home;
