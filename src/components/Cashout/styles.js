import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'center',
		padding: 20,
		minHeight: Math.round(Dimensions.get('window').height),
	},
	input: {
		backgroundColor: 'none',
        padding: 20,
	},
	button: {
		color: '#ffffff',
		backgroundColor: '#124AA1',
		textDecorationStyle: 'capitalized',
		marginVertical: 40,
		paddingVertical: 5,
	},
	phoneNumber: {
		color: '#124AA180',
		alignSelf: 'center',
	},
	welcome: {
		color: '#124AA1',
		fontSize: 25,
		marginBottom: 20,
		paddingVertical: 40,
	},
	errorText: {
		fontSize: 10,
		color: 'red',
	},
	icon: {
		color: '#124aa1',
		alignSelf: 'center',
	},
});

export default styles;
