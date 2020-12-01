import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ComponentHeading from '../../../common/components/ComponentHeading';
import AppForm from '../../../common/components/forms/AppForm';
import AppFormFeild from '../../../common/components/forms/AppFormFeild';
import SubmitButton from '../../../common/components/forms/SubmitButton';
import validationSchema from '../../../common/components/forms/validationSchema';
import colors from '../../../config/colors';

const AddAddress = () => {
	return (
		<View>
			<View styles={styles.formContainer}>
				<AppForm
					initialValues={{
						name: '',
						mobile: '',
						pin: '',
						address: '',
						locality: '',
						city: '',
						state: '',
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
								<AppFormFeild
									placeholder="Mobile No"
									name="mobile"
									selectionColor={colors.primary2}
									placeholderTextColor={colors.primaryShade22}
									overrideContainer={styles.outerLayer}
									overrideTextbox={styles.overrideTextbox}
									keyboardType="phone-pad"
								/>
							</View>
							<ComponentHeading text="ADDRESS" />
							<View style={styles.contactDetails}>
								<AppFormFeild
									placeholder="Pin Code"
									name="pin"
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
									name="locality"
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
