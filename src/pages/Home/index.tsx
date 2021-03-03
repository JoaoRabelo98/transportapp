import React from 'react';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';

import {
    Container,
    Header,
    BackgroundImageStyled,
    DeliverymanImageStyled,
} from './styles';

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
                    <Header></Header>
                    <BackgroundImageStyled source={BackgroundImage1} />
                    <DeliverymanImageStyled source={DeliverymanImage} />
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Home;
