import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TouchableOpacityView } from './styles';

const ServiceCard: React.FC<TextInputProps> = ({ ...rest }) => {
    return (
        <Container
            {...rest}
            style={{
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.18,
                shadowRadius: 1.0,
                elevation: 1,
            }}
        >
            <TouchableOpacityView>{rest.children}</TouchableOpacityView>
        </Container>
    );
};

export default ServiceCard;
