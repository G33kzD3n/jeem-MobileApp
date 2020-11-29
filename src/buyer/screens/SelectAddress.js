import React, { useState } from 'react';
import {
	StyleSheet,
	ScrollView,
	View,
	TouchableWithoutFeedback,
} from 'react-native';
import colors from '../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from '../../common/components/AppButton';
import AddressCard from '../components/AddressPageComponents/AddressCard';
import ComponentHeading from '../../common/components/ComponentHeading';
import AddressButtons from '../components/AddressPageComponents/AddressButtons';

const data = [
	{
		id: 1,
		name: 'Basit Mir',
		address: 'Naseem Bagh, Habak, Near Masjid yasir',
		locality: 'Naseem Bagh',
		city: 'Srinagar',
		state: 'Jammu & Kashmir',
		pincode: '190006',
		mobile: '9858536852',
	},
	{
		id: 2,
		name: 'Basit Mir',
		address: 'Naseem Bagh, Habak, Near Masjid yasir',
		locality: 'Naseem Bagh',
		city: 'Srinagar',
		state: 'Jammu & Kashmir',
		pincode: '190006',
		mobile: '9858536852',
	},
	{
		id: 3,
		name: 'Basit Mir',
		address: 'Naseem Bagh, Habak, Near Masjid yasir',
		locality: 'Naseem Bagh',
		city: 'Srinagar',
		state: 'Jammu & Kashmir',
		pincode: '190006',
		mobile: '9858536852',
	},
	{
		id: 4,
		name: 'Basit Mir',
		address: 'Naseem Bagh, Habak, Near Masjid yasir',
		locality: 'Naseem Bagh',
		city: 'Srinagar',
		state: 'Jammu & Kashmir',
		pincode: '190006',
		mobile: '9858536852',
	},
	{
		id: 5,
		name: 'Basit Mir',
		address: 'Naseem Bagh, Habak, Near Masjid yasir',
		locality: 'Naseem Bagh',
		city: 'Srinagar',
		state: 'Jammu & Kashmir',
		pincode: '190006',
		mobile: '9858536852',
	},
	{
		id: 6,
		name: 'Basit Mir',
		address: 'Naseem Bagh, Habak, Near Masjid yasir',
		locality: 'Naseem Bagh',
		city: 'Srinagar',
		state: 'Jammu & Kashmir',
		pincode: '190006',
		mobile: '9858536852',
	},
];

const SelectAddress = () => {
	const [selectedItem, onSelectedItem] = useState(1);
	return (
		<>
			<ScrollView style={{ backgroundColor: colors.primaryShade24 }}>
				<View style={styles.addAdressContainer}>
					<View style={styles.addAdress}>
						<AppButton
							color1={colors.white}
							color2={colors.white}
							text="Add New Address"
							textColor={colors.primary1}
							paddingVertical="2.5%"
							textTransform="uppercase"
						/>
					</View>
				</View>
				<ComponentHeading text="ADDRESS" />
				{data.map((item, index) => (
					<React.Fragment key={index}>
						<TouchableWithoutFeedback onPress={() => onSelectedItem(item.id)}>
							<View style={styles.topContainer}>
								<View style={styles.cartImage}>
									<MaterialCommunityIcons
										name={
											selectedItem === item.id
												? 'radiobox-marked'
												: 'radiobox-blank'
										}
										size={24}
										color={colors.primary1}
									/>
								</View>
								<View style={styles.dataContainer}>
									<AddressCard data={item} />
								</View>
							</View>
						</TouchableWithoutFeedback>
						<AddressButtons />
					</React.Fragment>
				))}
			</ScrollView>
			<View style={styles.appButton}>
				<AppButton
					color1={colors.primaryShade11}
					color2={colors.primaryShade13}
					text="CONFIRM"
					borderRadius={3}
					textColor={colors.white}
					textTransform="uppercase"
				/>
			</View>
		</>
	);
};

export default SelectAddress;

const styles = StyleSheet.create({
	topContainer: {
		backgroundColor: colors.white,
		marginBottom: 1,
		flexDirection: 'row',
		flex: 1,
		height: 120,
		borderColor: 'red',
		padding: 10,
		justifyContent: 'space-evenly',
	},
	cartImage: {
		flex: 1,
		paddingRight: 10,
		alignItems: 'center',
		justifyContent: 'center',
		// borderColor: colors.primary1,
		// borderWidth: 1,
	},
	dataContainer: {
		// paddingBottom: 5,
		flex: 4,
		//  justifyContent:'space-around'
	},
	addAdressContainer: {
		padding: 10,
		backgroundColor: colors.white,
	},
	addAdress: {
		borderColor: colors.primary1,
		borderWidth: 1,
		borderRadius: 3,
	},
	appButton: {
		padding: 5,
		backgroundColor: colors.white,
	},
});
