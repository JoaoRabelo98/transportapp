import React from 'react';

import {
    Image,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';
import {
    Container,
    Form,
    Title,
    SubTitle,
    GroupInputs,
    ViewButton,
    MainContent,
    SubTitleContent,
    BackButton,
    Header,
} from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import logoImg from '../../assets/Logo.png';
import colors from '../../styles/colors';

const Login: React.FC = () => {
    const { goBack } = useNavigation();
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
                        <BackButton
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 28,
                            }}
                            onPress={goBack}
                        >
                            <Icon name="arrow-left" size={24} color={colors.icons} />
                        </BackButton>
                    </Header>

                    <Image source={logoImg} />

                    <MainContent>
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
