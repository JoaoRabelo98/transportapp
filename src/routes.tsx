import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './pages/Login';
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
  </App.Navigator>
);

export default Routes;
