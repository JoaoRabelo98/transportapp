import React from 'react';

import {
    Image,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    View,
} from 'react-native';
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
    SubTitleContent,
} from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import colors from '../../styles/colors';
import logoImg from '../../assets/Logo.png';

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
                            <Title>Forgot password</Title>
                            <SubTitleContent>
                                <SubTitle>
                                    Por favor, indique o seu endereço de e-mail. Você
                                    recebera um código para criar uma nova senha
                                </SubTitle>
                            </SubTitleContent>
                        </View>

                        <Form onSubmit={() => {}}>
                            <GroupInputs>
                                <Input style={{ height: 44 }} placeholder="E-mail" />
                            </GroupInputs>

                            <ViewButton>
                                <Button onPress={() => {}}>Entrar</Button>
                            </ViewButton>
                        </Form>
                    </MainContent>
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Login;
