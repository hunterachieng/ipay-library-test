import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Image, Text, Animated } from 'react-native';
import Toast from 'react-native-root-toast';

import * as SplashScreen from 'expo-splash-screen';
import splashScreenStyles from './styles';

import * as Font from 'expo-font';


SplashScreen.preventAutoHideAsync();

export default function InitialScreen({ navigation }) {
	const [appIsReady, setAppIsReady] = useState(false);
	const fadeAnim = useRef(new Animated.Value(0)).current;

	const splashCheck =  () => {
        console.log("hey");
	
				navigation.replace('Cashout');
		
		
	};

	const fadeIn = () => {
		// Will change fadeAnim value to 1 in 5 seconds
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 2000,
			useNativeDriver: true,
		}).start(splashCheck);
	};

	useEffect(() => {
		fadeIn();
		async function prepare() {
			try {
				await Font.loadAsync(Entypo.font);
			} catch (error) {
				Toast.show(`${error.message}`, {
					duration: Toast.durations.LONG,
				});
			} finally {
				setAppIsReady(true);
			}
		}
		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);
	if (!appIsReady) {
		return null;
	}

	return (
		<View style={splashScreenStyles.container} onLayout={onLayoutRootView}>
							<Text style={splashScreenStyles.outerText}>Simply Convenient</Text>
	</View>
	);
}
