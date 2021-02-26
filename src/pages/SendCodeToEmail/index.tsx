import React from 'react';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';

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
import PadlockSvg from '../../assets/svgs/PadlockSvg';

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
                        <SvgStyled>
                            <PadlockSvg />
                        </SvgStyled>
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
