import React from 'react';

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
    BorderContainer,
} from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Login: React.FC = () => {
    return (
        <Container>
            <BorderContainer></BorderContainer>
            <Content>
                <WelcomeContainer>
                    <WelcomeText>Bem Vindo</WelcomeText>
                    <RegisterText>Entre com seu e-mail e senha</RegisterText>
                </WelcomeContainer>

                <Input style={{ height: 44, width: 327 }} placeholder="E-mail" />
                <Input style={{ height: 44, width: 327 }} placeholder="Senha" />
                <Button style={{ height: 44, width: 311 }} onPress={() => {}}>
                    Login
                </Button>

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
