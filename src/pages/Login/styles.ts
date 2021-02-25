import { Platform } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';


export const Container = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  justify-content: center;
  background-color: ${colors.primary};
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Content = styled.View `
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 40%;
`
