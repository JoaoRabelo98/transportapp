import React, { useCallback } from 'react';

import {
    Image,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    ForgotPassword,
    ForgotPasswordText,
    Form,
    Title,
    SubTitle,
    GroupInputs,
    ViewButton,
    RegisterAccountText,
    RegisterAccount,
    RegisterAccountButton,
    RegisterAccountButtonText,
    MainContent,
} from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import colors from '../../styles/colors';
import logoImg from '../../assets/Logo.png';

const Login: React.FC = () => {
    const { navigate } = useNavigation();

    const navigateToForgtoPassword = useCallback(() => {
        navigate('ForgotPassword');
    }, [navigate]);

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
                    <Image source={logoImg} />

                    <MainContent
                        style={{
                            shadowColor: colors.shadow,
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.18,
                            shadowRadius: 1.0,

                            elevation: 1,
                        }}
                    >
                        <View style={{ alignItems: 'center', marginTop: 37 }}>
                            <Title>Bem Vindo</Title>
                            <SubTitle>Entre com seu e-mail e senha</SubTitle>
                        </View>

                        <Form onSubmit={() => console.log('submit')}>
                            <GroupInputs>
                                <Input style={{ height: 44 }} placeholder="E-mail" />
                                <Input
                                    style={{ height: 44 }}
                                    placeholder="Senha"
                                    secureTextEntry={true}
                                />
                            </GroupInputs>

                            <ViewButton>
                                <Button onPress={() => console.log('entrar :s')}>
                                    Entrar
                                </Button>
                            </ViewButton>
                        </Form>

                        <ForgotPassword onPress={navigateToForgtoPassword}>
                            <ForgotPasswordText>
                                Esqueceu sua senha?
                            </ForgotPasswordText>
                        </ForgotPassword>

                        <RegisterAccount>
                            <RegisterAccountButton
                                onPress={() => {
                                    console.log('esqueci :s');
                                }}
                            >
                                <RegisterAccountText>
                                    Não possui uma conta?
                                    <RegisterAccountButtonText>
                                        {' '}
                                        Cadastre-se
                                    </RegisterAccountButtonText>
                                </RegisterAccountText>
                            </RegisterAccountButton>
                        </RegisterAccount>
                    </MainContent>
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Login;
