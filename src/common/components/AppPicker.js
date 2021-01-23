import React, { useState } from 'react';
import {
	FlatList,
	Modal,
	StyleSheet,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';
import AppText from './AppText';
import PickerItem from './PickerItem';

const AppPicker = ({
	icon,
	placeholder,
	item,
	selectedItem,
	onQuantityChange,
	pickerStyle,
	horizontal
}) => {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={styles.container}>
					<AppText style={styles.text}>
						{placeholder}: {selectedItem}
					</AppText>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={colors.primary2}
							style={styles.icon}
						/>
					)}
				</View>
			</TouchableWithoutFeedback>

			<Modal visible={modalVisible} animationType="slide" transparent={true}>
				<View style={styles.modalParent}>
					<TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
						<View style={styles.modal}></View>
					</TouchableWithoutFeedback>
					<View style={styles.list}>
						<TouchableOpacity
							onPress={() => setModalVisible(false)}
							style={styles.close}
						>
							<MaterialCommunityIcons
								name="close"
								size={20}
								color={colors.primary2}
								style={styles.icon}
							/>
						</TouchableOpacity>
						<FlatList
							data={item}
							horizontal={horizontal}
							keyExtractor={item => item.value.toString()}
							renderItem={({ item }) => (
								<PickerItem
									style={pickerStyle}
									label={item.label}
									onPress={() => {
										setModalVisible(false);
										onQuantityChange(item.value);
									}}
								/>
							)}
						/>
					</View>
				</View>
				{/* </View> */}
			</Modal>
		</>
	);
};

export default AppPicker;

const styles = StyleSheet.create({
	close: {
		alignSelf: 'flex-end',
		paddingRight: 10,
		paddingBottom: 5
	},
	modalParent: {
		flex: 1,
		opacity: 1,
		paddingTop: 5,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 15
	},
	list: {
		alignItems: 'center',
		backgroundColor: colors.white
	},
	container: { flexDirection: 'row' },
	modal: {
		flex: 1
	},
	text: {
		fontSize: 16,
		color: colors.primary1
	}
});
