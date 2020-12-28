import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ComponentHeading from '../../../common/components/ComponentHeading';
import AppForm from '../../../common/components/forms/AppForm';
import AppFormFeild from '../../../common/components/forms/AppFormFeild';
import SubmitButton from '../../../common/components/forms/SubmitButton';
import validationSchema from '../../../common/components/forms/validationSchema';
import colors from '../../../config/colors';
import { useSelector, useDispatch } from 'react-redux';
import { addAddressAction } from '../../../../store/actions';
import {
	ADD_ADDRESS,
	REMOVE_ADDRESS_MESSAGE,
} from '../../../../store/actions/actionTypes';
import { useNavigation } from '@react-navigation/native';
import Loader from '../../../common/components/Loader';

const AddAddress = () => {
	const navigation = useNavigation();
	const [loading, setLoading] = useState(false);
	const userId = useSelector(
		(state) => state.auth.login && state.auth.login.user.id
	);
	const response = useSelector((state) => state.address.message);
	const dispatch = useDispatch();

	useEffect(() => {
		if (response) {
			setLoading(false);
			navigation.goBack();
		}
		return () => dispatch({ type: REMOVE_ADDRESS_MESSAGE });
	}, [response]);

	const handleSubmit = (values) => {
		setLoading(true);
		dispatch(addAddressAction(ADD_ADDRESS, values));
	};
	return (
		<View>
			{loading && <Loader />}
			<View styles={styles.formContainer}>
				<AppForm
					initialValues={{
						name: '',
						// mobile: '',
						pincode: '',
						address: '',
						address1: '',
						city: '',
						state: '',
						userId: userId,
						country: 'Saudi Arabia',
					}}
					onSubmit={(values) => handleSubmit(values)}
					validationSchema={validationSchema.validationAddress}
				>
					<View style={styles.topContainer}>
						<ScrollView style={{ backgroundColor: colors.primaryShade24 }}>
							<ComponentHeading text="CONTACT DETAILS" />
							<View style={styles.contactDetails}>
								<AppFormFeild
									placeholder="Name"
									name="name"
									selectionColor={colors.primary2}
									placeholderTextColor={colors.primaryShade22}
									overrideContainer={styles.outerLayer}
									overrideTextbox={styles.overrideTextbox}
								/>
								{/* <AppFormFeild
									placeholder="Mobile No"
									name="mobile"
									selectionColor={colors.primary2}
									placeholderTextColor={colors.primaryShade22}
									overrideContainer={styles.outerLayer}
									overrideTextbox={styles.overrideTextbox}
									keyboardType="phone-pad"
								/> */}
							</View>
							<ComponentHeading text="ADDRESS" />
							<View style={styles.contactDetails}>
								<AppFormFeild
									placeholder="Pin Code"
									name="pincode"
									selectionColor={colors.primary2}
									placeholderTextColor={colors.primaryShade22}
									overrideContainer={styles.outerLayer}
									overrideTextbox={styles.overrideTextbox}
									keyboardType="number-pad"
								/>
								<AppFormFeild
									placeholder="Address (House No, Building, Street, Area)"
									name="address"
									selectionColor={colors.primary2}
									placeholderTextColor={colors.primaryShade22}
									overrideContainer={styles.outerLayer}
									overrideTextbox={styles.overrideTextbox}
								/>
								<AppFormFeild
									placeholder="Locality/Town"
									name="address1"
									selectionColor={colors.primary2}
									placeholderTextColor={colors.primaryShade22}
									overrideContainer={styles.outerLayer}
									overrideTextbox={styles.overrideTextbox}
								/>
								<AppFormFeild
									placeholder="City"
									name="city"
									selectionColor={colors.primary2}
									placeholderTextColor={colors.primaryShade22}
									overrideContainer={styles.outerLayer}
									overrideTextbox={styles.overrideTextbox}
								/>
								<AppFormFeild
									placeholder="State"
									name="state"
									selectionColor={colors.primary2}
									placeholderTextColor={colors.primaryShade22}
									overrideContainer={styles.outerLayer}
									overrideTextbox={styles.overrideTextbox}
								/>
							</View>
						</ScrollView>
					</View>
					<View style={styles.button}>
						<SubmitButton text="ADD" borderRadius={0} />
					</View>
				</AppForm>
			</View>
		</View>
	);
};

export default AddAddress;

const styles = StyleSheet.create({
	topContainer: {
		// borderColor: 'green',
		// borderWidth: 3,
		paddingBottom: '12%',
		height: '100%',
	},
	button: {
		width: '100%',
		position: 'absolute', //Here is the trick
		bottom: 0, //Here is the trick
		padding: 5,
		backgroundColor: colors.white,
	},
	formContainer: {
		flex: 1,
	},
	contactDetails: {
		backgroundColor: colors.white,
		padding: 10,
	},
	overrideTextbox: {
		paddingVertical: 10,
		color: colors.primary1,
	},
	outerLayer: {
		borderColor: colors.primary2,
		borderWidth: 0.5,
		borderBottomColor: colors.primary2,
	},
});
