import React from 'react';
import { TextInputProps, TouchableOpacity } from 'react-native';

import { Container, TextInput, QRCodeStyled } from './styles';
import colors from '../../styles/colors';

import QRCodeImg from '../../assets/QRCode/qr.png';

const Input: React.FC<TextInputProps> = ({ ...rest }) => {
    return (
        <Container
            {...rest}
            style={{
                shadowOffset: {
                    width: 1,
                    height: 2,
                },
                shadowOpacity: 0.18,
                shadowRadius: 1.0,
                elevation: 1,
            }}
        >
            <TextInput
                keyboardAppearance="dark"
                placeholderTextColor={colors.place_holder}
                {...rest}
            />
            <TouchableOpacity>
                <QRCodeStyled source={QRCodeImg} />
            </TouchableOpacity>
        </Container>
    );
};

export default Input;
