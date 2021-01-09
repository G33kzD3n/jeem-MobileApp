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
	REMOVE_EDIT_PROFILE,
} from '../../../store/actions/actionTypes';
import { updateProfileAction } from '../../../store/actions';
import Loader from '../../common/components/Loader';
import appAlert from '../../common/components/appAlert';

const HelpCenter = () => {
	const [loading, setLoading] = useState(false);

	const profileDetails = useSelector(
		(state) => state.auth.login && state.auth.login
	);

	const profileStatus = useSelector(
		(state) => state.profile && state.profile.updateMessage
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
					seller_category_name: profileStatus.seller_category_name,
				},
			};
			appAlert('SUCCESS', 'Profile updated Successfully');
			dispatch({ type: LOGIN, value: data });
			dispatch({ type: REMOVE_EDIT_PROFILE });
		}
	}, [profileStatus]);

	const handleUpdate = (data) => {
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
							name: '',
							email: '',
							query: '',
						}}
						onSubmit={(values) => handleUpdate(values)}
						validationSchema={validationSchema.validationHelp}
					>
						<View style={styles.topContainer}>
							<ScrollView style={{ backgroundColor: colors.primaryShade24 }}>
								<View style={styles.profilePic}>
									<TopSections
										edit={true}
										image="https://st.depositphotos.com/1575949/1392/v/600/depositphotos_13928926-stock-illustration-white-question-mark-on-green.jpg"
									/>
								</View>

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
										placeholder="Email"
										keyboardType="email-address"
										name="email"
										selectionColor={colors.primary2}
										placeholderTextColor={colors.primaryShade22}
										overrideContainer={styles.outerLayer}
										overrideTextbox={styles.overrideTextbox}
									/>
									<AppFormFeild
										placeholder="Write your query"
										name="query"
										numberOfLines={6}
										multiline={true}
										selectionColor={colors.primary2}
										placeholderTextColor={colors.primaryShade22}
										overrideContainer={styles.outerLayer}
										overrideTextbox={styles.textArea}
									/>
								</View>
							</ScrollView>
						</View>
						<View style={styles.button}>
							<SubmitButton text="SEND" borderRadius={0} />
						</View>
					</AppForm>
				</View>
			</View>
		</>
	);
};

export default HelpCenter;

const styles = StyleSheet.create({
	textArea: {
		color: colors.primary1,
		width: '100%',
		height: '100%',
		padding: 0,
		margin: 0,
	},
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
		width: '100%',
	},
	outerLayer: {
		borderColor: colors.primary2,
		borderWidth: 0.5,
		borderBottomColor: colors.primary2,
	},
});
