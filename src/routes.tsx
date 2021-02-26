import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
        initialRouteName="ForgotPassword"
    >
        <App.Screen name="SignIn" component={Login} />
        <App.Screen name="ForgotPassword" component={ForgotPassword} />
    </App.Navigator>
);

export default Routes;
