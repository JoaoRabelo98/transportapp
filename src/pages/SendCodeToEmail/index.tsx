import React from 'react';
import { KeyboardAvoidingView, ScrollView, Platform, Image } from 'react-native';

import SvgUri from 'react-native-svg-uri';
import {
    Container,
    Title,
    SubTitle,
    MainContent,
    ViewButton,
    SvgStyled,
} from './styles';
import colors from '../../styles/colors';
import Button from '../../components/Button';
import padLockImg from '../../assets/PadLock.png';

const Login: React.FC = () => {
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
                    <MainContent>
                        <Image source={padLockImg} />
                        <Title>Enviamos um código para o seu email</Title>
                        <SubTitle>
                            Em breve, você receberá um e-mail com um código para
                            configurar uma nova senha.
                        </SubTitle>

                        <ViewButton>
                            <Button onPress={() => {}}>Entrar</Button>
                        </ViewButton>
                    </MainContent>
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Login;
