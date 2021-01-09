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
	HELP_QUERY,
	REMOVE_HELP_QUERY,
} from '../../../store/actions/actionTypes';
import { sendQueryAction, updateProfileAction } from '../../../store/actions';
import Loader from '../../common/components/Loader';
import appAlert from '../../common/components/appAlert';

const HelpCenter = () => {
	const [loading, setLoading] = useState(false);

	const queryResponse = useSelector(
		(state) => state.profile && state.profile.queryResponse
	);

	console.log(queryResponse,'queryyyyyyyyyyyyyy');

	const dispatch = useDispatch();

	useEffect(() => {
		if(queryResponse){
			setLoading(false);
			dispatch({type:REMOVE_HELP_QUERY});
			appAlert('SUCCESS', 'Query send sucessfully');
		}
	
	}, [queryResponse]);

	const handleQuery = (data,resetForm) => {
		setLoading(true);
		dispatch(sendQueryAction(HELP_QUERY, data));
		resetForm()
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
							message: '',
						}}
						onSubmit={(values,{resetForm}) => handleQuery(values,resetForm)}
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
										name="message"
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
