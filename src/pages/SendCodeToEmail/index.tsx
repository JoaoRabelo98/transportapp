import React, { useCallback } from 'react';
import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Container, Title, SubTitle, MainContent, ViewButton } from './styles';
import Button from '../../components/Button';
import padLockImg from '../../assets/PadLock.png';
import colors from '../../styles/colors';

const ModalSendCodeToEmail: React.FC = () => {
    const { navigate } = useNavigation();
    const navigateToPhoneVerification = useCallback(() => {
        navigate('RedefinePassword');
    }, [navigate]);

    return (
        <Container>
            <MainContent
                style={{
                    shadowColor: colors.shadow,
                    shadowOffset: { width: 1, height: 1 },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation: 170,
                }}
            >
                <Image source={padLockImg} />
                <Title>Enviamos um código para o seu email</Title>
                <SubTitle>
                    Em breve, você receberá um e-mail com um código para configurar
                    uma nova senha.
                </SubTitle>

                <ViewButton>
                    <Button onPress={navigateToPhoneVerification}>Confirmar</Button>
                </ViewButton>
            </MainContent>
        </Container>
    );
};

export default ModalSendCodeToEmail;
