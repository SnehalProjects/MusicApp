// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import PlayerScreen from './screens/PlayerScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string;

            switch (route.name) {
              case 'Home':
                iconName = 'home-outline';
                break;
              case 'Player':
                iconName = 'heart-outline';
                break;
              default:
                iconName = 'ellipse'; // fallback icon
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: { backgroundColor: '#1f0033' },
          tabBarActiveTintColor: '#a363f7',
          tabBarInactiveTintColor: 'white',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Player" component={PlayerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}