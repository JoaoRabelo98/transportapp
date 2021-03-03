import React, { useCallback } from 'react';

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
    MainContent,
    SubTitleContent,
    BackButton,
    Header,
    ViewRegressive,
    RegressiveText,
    ViewResendCode,
    TextResendCode,
    ResendCodeButton,
    ResendCodeText,
    ViewResendCodeButton,
} from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import colors from '../../styles/colors';

const PhoneVerification: React.FC = () => {
    const { goBack, navigate } = useNavigation();

    const navigateToRedefinePassword = useCallback(() => {
        navigate('RedefinePassword');
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

                    <MainContent>
                        <View style={{ alignItems: 'center' }}>
                            <Title>Verificação do código</Title>
                            <SubTitleContent>
                                <SubTitle>Insira seu código aqui</SubTitle>
                            </SubTitleContent>
                        </View>

                        <Form
                            onSubmit={() => {
                                console.log('submit');
                            }}
                        >
                            <GroupInputs>
                                <Input
                                    keyboardType="numeric"
                                    maxLength={1}
                                    style={{ height: 44, width: 44 }}
                                />
                                <Input
                                    keyboardType="numeric"
                                    maxLength={1}
                                    style={{ height: 44, width: 44 }}
                                />
                                <Input
                                    keyboardType="numeric"
                                    maxLength={1}
                                    style={{ height: 44, width: 44 }}
                                />
                                <Input
                                    keyboardType="numeric"
                                    maxLength={1}
                                    style={{ height: 44, width: 44 }}
                                />
                            </GroupInputs>
                            <ViewRegressive>
                                <RegressiveText>04:00</RegressiveText>
                            </ViewRegressive>

                            <ViewResendCode>
                                <TextResendCode>
                                    Você não recebeu nenhum código?
                                </TextResendCode>

                                <ViewResendCodeButton>
                                    <ResendCodeButton
                                        onPress={() => {
                                            console.log('pressionado');
                                        }}
                                    >
                                        <ResendCodeText>
                                            Reenviar novo código
                                        </ResendCodeText>
                                    </ResendCodeButton>
                                </ViewResendCodeButton>
                            </ViewResendCode>
                        </Form>
                    </MainContent>
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default PhoneVerification;
