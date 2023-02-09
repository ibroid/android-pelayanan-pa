import * as React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Profil from '../screens/Profil';
import AuthStack from '../stack/AuthStack';
import BerandaStack from '../stack/BerandaStack';
import { AuthContext } from "../context/AuthContext"
import EncryptedStorage from "react-native-encrypted-storage";

import Splash from "../screens/Splash";

const Tab = createBottomTabNavigator();

export default function MainStack() {

	const { state, authContext } = React.useContext(AuthContext);

	React.useEffect(() => {
		// Fetch the token from storage then navigate to our appropriate place
		const bootstrapAsync = async () => {
			let userToken;

			try {
				userToken = await EncryptedStorage.getItem('token');
			} catch (e) {
				// Restoring token failed
				console.log(e)
			}

			// After restoring token, we may need to validate it in production apps

			// This will switch to the App screen or Auth screen and this loading
			// screen will be unmounted and thrown away.
			// console.log(userToken)
			authContext.restore(userToken);
		};

		bootstrapAsync();
	}, []);

	if (state.isLoading == true) {
		return <Splash />
	}


	return (
		<NavigationContainer>
			{state.userToken == null ? (
				<AuthStack />
			) : (
				<Tab.Navigator
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {
							let iconName;

							if (route.name === 'Home') {
								iconName = focused
									? 'home'
									: 'home-outline';
							} else if (route.name === 'Profil') {
								iconName = focused ? 'person' : 'person-outline';
							}

							// You can return any component that you like here!
							return <Ionicons name={iconName ? iconName : 'home'} size={size} color={color} />;
						},
						tabBarActiveTintColor: 'teal',
						tabBarInactiveTintColor: 'gray',
						headerShown: false
					})}
				>
					<Tab.Screen name="Home" component={BerandaStack} />
					<Tab.Screen name="Profil" component={Profil} />
				</Tab.Navigator>
			)}

		</NavigationContainer>
	)
}