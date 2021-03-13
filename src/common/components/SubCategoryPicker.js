import React from 'react';
import {
	StyleSheet,
	Modal,
	FlatList,
	TouchableOpacity,
	View
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Avatar from './Avatar';
import colors from '../../config/colors';
import { useNavigation } from '@react-navigation/native';
import { apiUrlImageStatic } from '../../config/config';

const SubCategoryPicker = ({
	visible,
	setModalVisible,
	productSubCategories
}) => {
	const navigation = useNavigation();
	const handelSubCategory = item => {
		setModalVisible(false);
		navigation.navigate('SubCategoryProduct', {
			name: item.productSubCategoryName,
			id: item.id
		}); //navigate with params
	};

	return (
		<Modal visible={visible} animationType="slide" transparent>
			<LinearGradient
				style={styles.modal}
				start={[0.2, 0]}
				end={[0.8, 0.9]}
				colors={[
					colors.primaryShade24,
					colors.primaryShade24,
					colors.primaryShade22,
					colors.primaryShade23,
					colors.primaryShade24
				]}
			>
				<TouchableOpacity
					onPress={() => setModalVisible(false)}
					style={styles.touch}
				>
					<MaterialCommunityIcons style={styles.icon} name="close" size={20} />
				</TouchableOpacity>
				{/* <Button title='Close'  color={colors.primary2} onPress={()=>setModalVisible(false)}/> */}
				<FlatList
					data={productSubCategories}
					numColumns={3}
					keyExtractor={data => data.id}
					renderItem={({ item }) => (
						<View style={styles.parent}>
							<TouchableOpacity onPress={() => handelSubCategory(item)}>
								<Avatar
									text={item.productSubCategoryName}
									image={apiUrlImageStatic+item.productSubCategoryImage}
									customStyles={styles.avatar}
								/>
							</TouchableOpacity>
						</View>
					)}
				/>
			</LinearGradient>
		</Modal>
	);
};

export default SubCategoryPicker;

const styles = StyleSheet.create({
	parent: {
		flex: 1,
		paddingVertical: 6
	},
	touch: {
		width: 30,
		height: 30,
		backgroundColor: colors.primaryShade22,
		borderRadius: 15,
		padding: 5,
		alignSelf: 'flex-end',
    marginTop:15,
		top: 6,
		right: 8
	},
	icon: {
		color: colors.primary1,
		textAlign: 'center'
	},
	avatar: {
		height: 80,
		width: 80,
		borderRadius: 50
	},
	modal: {
		backgroundColor: colors.primary2,
		flex: 1,
		opacity: 0.8
	}
});
