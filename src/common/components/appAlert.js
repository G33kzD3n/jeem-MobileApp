// import React, { useState } from 'react';
import { Alert } from 'react-native';

const appAlert = (title, msg, handleOk) => {
	Alert.alert(
		title,
		msg,
		[
			{ text: 'OK', onPress: handleOk },
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
