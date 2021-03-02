import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Home';

const TabNavigator = createBottomTabNavigator();

const Tabs: React.FC = () => {
    return (
        <TabNavigator.Navigator>
            <TabNavigator.Screen name="Home" component={HomeScreen} />
        </TabNavigator.Navigator>
    );
};

export default Tabs;
