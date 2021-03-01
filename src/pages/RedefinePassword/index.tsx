import React from 'react';

import { KeyboardAvoidingView, ScrollView, Platform, View } from 'react-native';
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
import colors from '../../styles/colors';

const RedefinePassword: React.FC = () => {
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
                                top: 60,
                                left: 28,
                            }}
                            onPress={goBack}
                        >
                            <Icon name="arrow-left" size={24} color={colors.icons} />
                        </BackButton>
                    </Header>

                    <MainContent>
                        <View style={{ alignItems: 'center', marginTop: 37 }}>
                            <Title>Redefinir Senha</Title>
                            <SubTitleContent>
                                <SubTitle>Digite sua nova senha</SubTitle>
                            </SubTitleContent>
                        </View>

                        <Form onSubmit={() => {}}>
                            <GroupInputs>
                                <Input
                                    style={{ height: 44 }}
                                    placeholder="Senha"
                                    secureTextEntry={true}
                                />
                                <Input
                                    style={{ height: 44 }}
                                    placeholder="Confirmar senha"
                                    secureTextEntry={true}
                                />
                            </GroupInputs>

                            <ViewButton>
                                <Button>Confirmar</Button>
                            </ViewButton>
                        </Form>
                    </MainContent>
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default RedefinePassword;
