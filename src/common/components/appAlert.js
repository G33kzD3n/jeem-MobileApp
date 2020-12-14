// import React, { useState } from 'react';
import { Alert } from 'react-native';

const appAlert = (title, msg, setDeleteAddress) => {
	Alert.alert(
		title,
		msg,
		[
			{ text: 'OK', onPress: () => setDeleteAddress(true) },
			{
				text: 'Cancel',
				// onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
		],
		{
			cancelable: false,
		}
	);
};

export default appAlert;
