import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';
import colors from '../../styles/colors';

const Input: React.FC<TextInputProps> = ({ ...rest }) => {
    return (
        <Container {...rest}>
            <TextInput
                keyboardAppearance="dark"
                placeholderTextColor={colors.place_holder}
                {...rest}
            />
        </Container>
    );
};

export default Input;
