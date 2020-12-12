import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import AppForm from '../../common/components/forms/AppForm';
import AppFormFeild from '../../common/components/forms/AppFormFeild';
import SubmitButton from '../../common/components/forms/SubmitButton';
import validationSchema from '../../common/components/forms/validationSchema';
import colors from '../../config/colors';
import TopSections from '../components/ProfilePageComponents/TopSections';

const EditProfile = () => {
	return (
		<View>
			<View styles={styles.formContainer}>
				<AppForm
					initialValues={{
						name: 'Basit mir',
						mobile: '9858536852',
						email: 'basitmir@gmail.com',
						location: 'Srinagar',
					}}
					onSubmit={(values) => handleSubmit(values)}
					validationSchema={validationSchema.validationProfile}
				>
					<View style={styles.topContainer}>
						<ScrollView style={{ backgroundColor: colors.primaryShade24 }}>
							<View style={styles.profilePic}>
								<TopSections edit={true} />
							</View>

							<View style={styles.contactDetails}>
								<AppFormFeild
									placeholder="Email"
									keyboardType="email-address"
									name="email"
									editable={false}
									selectTextOnFocus={false}
									selectionColor={colors.primaryShade22}
									placeholderTextColor={colors.primaryShade22}
									overrideContainer={styles.outerLayer}
									overrideTextbox={{
										paddingVertical: 10,
										color: colors.primaryShade22,
									}}
								/>
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
								<AppFormFeild
									placeholder="Location"
									name="location"
									selectionColor={colors.primary2}
									placeholderTextColor={colors.primaryShade22}
									overrideContainer={styles.outerLayer}
									overrideTextbox={styles.overrideTextbox}
								/>
							</View>
						</ScrollView>
					</View>
					<View style={styles.button}>
						<SubmitButton text="SAVE" borderRadius={0} />
					</View>
				</AppForm>
			</View>
		</View>
	);
};

export default EditProfile;

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
		padding: 30,
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
