import React from 'react';

import { Image } from 'react-native';
import {
    Container,
    Content,
    ForgotPasswordLinkContainer,
    ForgotPasswordLinkText,
    RegisterContainer,
    RegisterText,
    RegisterLinkText,
    WelcomeContainer,
    WelcomeText,
    FormView,
    ViewInputs,
} from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import colors from '../../styles/colors';
import logoImg from '../../assets/Logo.png';

const Login: React.FC = () => {
    return (
        <Container>
            <Image source={logoImg} />
            <Content
                style={{
                    elevation: 1,
                    shadowOffset: { width: 1, height: 1 },
                    shadowColor: colors.shadow,
                    shadowOpacity: 0.5,
                }}
            >
                <WelcomeContainer>
                    <WelcomeText>Bem Vindo</WelcomeText>
                    <RegisterText>Entre com seu e-mail e senha</RegisterText>
                </WelcomeContainer>

                <FormView>
                    <ViewInputs>
                        <Input
                            style={{ height: 44, width: 327 }}
                            placeholder="E-mail"
                        />
                        <Input
                            style={{ height: 44, width: 327 }}
                            placeholder="Senha"
                        />
                    </ViewInputs>

                    <Button style={{ height: 44, width: 311 }} onPress={() => {}}>
                        Login
                    </Button>
                </FormView>

                <ForgotPasswordLinkContainer>
                    <ForgotPasswordLinkText>
                        Esqueceu sua senha?
                    </ForgotPasswordLinkText>
                </ForgotPasswordLinkContainer>

                <RegisterContainer>
                    <RegisterText>
                        Não possui uma conta?
                        <RegisterLinkText> Cadastre-se</RegisterLinkText>
                    </RegisterText>
                </RegisterContainer>
            </Content>
        </Container>
    );
};

export default Login;
