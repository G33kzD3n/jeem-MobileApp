import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

const useKeyboardDetect = () => {
	const [keyboardShow, setKeyboardShow] = useState(false);
	useEffect(() => {
		Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
		Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

		// cleanup function
		return () => {
			Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
			Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
		};
	}, []);

	const _keyboardDidShow = () => {
		setKeyboardShow(true);
	};

	const _keyboardDidHide = () => {
		setKeyboardShow(false);
	};
	return keyboardShow;
};

export default useKeyboardDetect;
