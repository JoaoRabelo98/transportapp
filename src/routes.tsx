import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import colors from './styles/colors';

const App = createStackNavigator();

const Routes: React.FC = () => (
    <App.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: colors.primary,
            },
        }}
        initialRouteName="SignIn"
    >
        <App.Screen name="SignIn" component={Login} />
        <App.Screen name="ForgotPassword" component={ForgotPassword} />
    </App.Navigator>
);

export default Routes;
