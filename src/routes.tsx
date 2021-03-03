import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SendCodeToEmail from './pages/SendCodeToEmail';
import RedefinePassword from './pages/RedefinePassword';
import SingUP from './pages/SingUP';
import TabNavigator from './pages/TabNavigator';
import colors from './styles/colors';
import PhoneVerification from './pages/PhoneVerification';

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
        <App.Screen name="SingUP" component={SingUP} />
        <App.Screen name="ForgotPassword" component={ForgotPassword} />
        <App.Screen name="SendCodeToEmail" component={SendCodeToEmail} />
        <App.Screen name="RedefinePassword" component={RedefinePassword} />
        <App.Screen name="TabNavigator" component={TabNavigator} />
        <App.Screen name="PhoneVerification" component={PhoneVerification} />
    </App.Navigator>
);

export default Routes;
