import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import AppForm from '../../common/components/forms/AppForm';
import AppFormFeild from '../../common/components/forms/AppFormFeild';
import SubmitButton from '../../common/components/forms/SubmitButton';
import validationSchema from '../../common/components/forms/validationSchema';
import colors from '../../config/colors';
import TopSections from '../components/ProfilePageComponents/TopSections';
import { useSelector, useDispatch } from 'react-redux';
import {
	EDIT_PROFILE,
	LOGIN,
	REMOVE_EDIT_PROFILE
} from '../../../store/actions/actionTypes';
import { updateProfileAction } from '../../../store/actions';
import Loader from '../../common/components/Loader';
import appAlert from '../../common/components/appAlert';
import i18n from '../../languages/i18n';

const EditProfile = () => {
	const [loading, setLoading] = useState(false);

	const profileDetails = useSelector(
		state => state.auth.login && state.auth.login
	);

	const profileStatus = useSelector(
		state => state.profile && state.profile.updateMessage
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (profileStatus) {
			setLoading(false);
			const data = {
				role: { role: 'Buyer' },
				status: 'success',
				token: profileDetails.token,
				user: {
					...profileDetails.user,
					name: profileStatus.name,
					phonenumber: profileStatus.phonenumber,
					seller_category_name: profileStatus.seller_category_name
				}
			};
			appAlert(i18n.t('profileScreen.SUCCESS'),i18n.t('profileScreen.Profile updated Successfully'));
			dispatch({ type: LOGIN, value: data });
			dispatch({ type: REMOVE_EDIT_PROFILE });
		}
	}, [profileStatus]);

	const handleUpdate = data => {
		setLoading(true);
		dispatch(updateProfileAction(EDIT_PROFILE, data));
	};
	return (
		<>
			{loading && <Loader />}
			<View>
				<View styles={styles.formContainer}>
					<AppForm
						initialValues={{
							name: profileDetails.user.name,
							phonenumber: profileDetails.user.phonenumber,
							email: profileDetails.user.email,
							location: profileDetails.user.seller_category_name //store as location
						}}
						onSubmit={values => handleUpdate(values)}
						validationSchema={validationSchema.validationProfile}
					>
						<View style={styles.topContainer}>
							<ScrollView style={{ backgroundColor: colors.primaryShade24 }}>
								<View style={styles.profilePic}>
									<TopSections edit={true} />
								</View>

								<View style={styles.contactDetails}>
									<AppFormFeild
										placeholder={i18n.t('profileScreen.Email')}
										keyboardType="email-address"
										name="email"
										editable={false}
										selectTextOnFocus={false}
										selectionColor={colors.primaryShade22}
										placeholderTextColor={colors.primaryShade22}
										overrideContainer={styles.outerLayer}
										overrideTextbox={{
											paddingVertical: 10,
											color: colors.primaryShade22
										}}
									/>
									<AppFormFeild
										placeholder={i18n.t('profileScreen.Name')}
										name="name"
										selectionColor={colors.primary2}
										placeholderTextColor={colors.primaryShade22}
										overrideContainer={styles.outerLayer}
										overrideTextbox={styles.overrideTextbox}
									/>
									<AppFormFeild
										placeholder={i18n.t('profileScreen.Mobile No')}
										name="phonenumber"
										selectionColor={colors.primary2}
										placeholderTextColor={colors.primaryShade22}
										overrideContainer={styles.outerLayer}
										overrideTextbox={styles.overrideTextbox}
										keyboardType="phone-pad"
									/>
									<AppFormFeild
										placeholder={i18n.t('profileScreen.Location')}
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
							<SubmitButton text={i18n.t('profileScreen.SAVE')} borderRadius={0} />
						</View>
					</AppForm>
				</View>
			</View>
		</>
	);
};

export default EditProfile;

const styles = StyleSheet.create({
	topContainer: {
		// borderColor: 'green',
		// borderWidth: 3,
		paddingBottom: '12%',
		height: '100%'
	},
	button: {
		width: '100%',
		position: 'absolute', //Here is the trick
		bottom: 0, //Here is the trick
		padding: 5,
		backgroundColor: colors.white
	},
	formContainer: {
		flex: 1
	},
	contactDetails: {
		backgroundColor: colors.white,
		padding: 30
	},
	overrideTextbox: {
		paddingVertical: 10,
		color: colors.primary1
	},
	outerLayer: {
		borderColor: colors.primary2,
		borderWidth: 0.5,
		borderBottomColor: colors.primary2
	}
});
