import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Donation from './src/screens/Donation';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import Wallet from './src/screens/Wallet';

const Tab = createMaterialBottomTabNavigator();


export default function App() {

	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="Home"
				activeColor="#fff"
				inactiveColor="#555E9F"
				barStyle={{ backgroundColor: '#000D6B' }}
				>
				<Tab.Screen
					name="Home"
					component={Home}
					options={{
					tabBarLabel: 'Trang chủ',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="home" color={color} size={24} />
					),
					}}
				/>
				
				<Tab.Screen
					name="Donation"
					component={Donation}
					options={{
					tabBarLabel: 'Quyên góp',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="heart" color={color} size={24} />
					),
					}}
				/>

				<Tab.Screen
					name="Wallet"
					component={Wallet}
					options={{
					tabBarLabel: 'Ví',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="credit-card" color={color} size={24} />
					),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

