import React from 'react';

import { Container, Content } from './styles';
import Button from '../../components/Button';

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <Button style={{height: 44, width: 311}} onPress={() => { }}>Login</Button>
      </Content>
    </Container>
  );
};

export default Login;
