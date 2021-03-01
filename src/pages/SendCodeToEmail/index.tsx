import React from 'react';
import { KeyboardAvoidingView, ScrollView, Platform, Image } from 'react-native';

import { Container, Title, SubTitle, MainContent, ViewButton } from './styles';
import Button from '../../components/Button';
import padLockImg from '../../assets/PadLock.png';
import colors from '../../styles/colors';

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
                    <MainContent
                        style={{
                            shadowColor: colors.shadow,
                            shadowOffset: { width: 1, height: 1 },
                            shadowOpacity: 0.5,
                            shadowRadius: 2,
                            elevation: 150,
                        }}
                    >
                        <Image source={padLockImg} />
                        <Title>Enviamos um código para o seu email</Title>
                        <SubTitle>
                            Em breve, você receberá um e-mail com um código para
                            configurar uma nova senha.
                        </SubTitle>

                        <ViewButton>
                            <Button onPress={() => {}}>Confirmar</Button>
                        </ViewButton>
                    </MainContent>
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Login;
