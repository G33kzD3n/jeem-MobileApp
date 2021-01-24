// import React, { useState } from 'react';
import { Alert } from 'react-native';
import i18n from '../../languages/i18n';

const appAlert = (title, msg, handleOk) => {
	Alert.alert(
		title,
		msg,
		[
			{ text: i18n.t('appAlert.OK'), onPress: handleOk },
			{
				text:i18n.t('appAlert.Cancel'),
				// onPress: () => console.log('Cancel Pressed'),
				style: 'cancel'
			}
		],
		{
			cancelable: false
		}
	);
};

export default appAlert;
