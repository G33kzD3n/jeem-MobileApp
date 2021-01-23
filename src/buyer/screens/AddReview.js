import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import AppForm from '../../common/components/forms/AppForm';
import AppFormFeild from '../../common/components/forms/AppFormFeild';
import SubmitButton from '../../common/components/forms/SubmitButton';
import validationSchema from '../../common/components/forms/validationSchema';
import colors from '../../config/colors';
import { Rating } from 'react-native-ratings';
import TopSections from '../components/ProfilePageComponents/TopSections';
import { useSelector, useDispatch } from 'react-redux';
import {
	ADD_REVIEWS_OF_PRODUCT,
	REMOVE_REVIEWS_OF_PRODUCT
} from '../../../store/actions/actionTypes';
import Loader from '../../common/components/Loader';
import appAlert from '../../common/components/appAlert';
import { addProductReviews } from '../../../store/actions/productAction';
import { useNavigation } from '@react-navigation/native';

const AddReview = ({ route }) => {
	const navigation = useNavigation();
	const { order } = route.params;

	const [reviewData, setReviewData] = useState({ content: '', rating: 3 });
	const [loading, setLoading] = useState(false);

	const profileDetails = useSelector(
		state => state.auth.login && state.auth.login
	);

	const reviewResponse = useSelector(
		state => state && state.product.reviewResponse
	);

	const dispatch = useDispatch();

	useEffect(() => {
		if (reviewResponse) {
			setLoading(false);
			appAlert('SUCCESS', 'Review added successfully', () => handleOk());
			dispatch({ type: REMOVE_REVIEWS_OF_PRODUCT });
		}
	}, [reviewResponse]);

	const handleOk = () => {
		navigation.goBack();
	};

	const handleReview = (data, resetForm) => {
		// orderProductId
		setLoading(true);
		dispatch(
			addProductReviews(ADD_REVIEWS_OF_PRODUCT, order.orderProductId, data)
		);
		resetForm();
	};
	const ratingCompleted = rating => {
		setReviewData({ ...reviewData, rating: rating });
	};
	return (
		<>
			{loading && <Loader />}
			<View>
				<View styles={styles.formContainer}>
					<AppForm
						initialValues={{
							name: profileDetails.user.name,
							email: profileDetails.user.email,
							message: ''
						}}
						onSubmit={
							(values, { resetForm }) =>
								handleReview(
									{ ...reviewData, content: values.message },
									resetForm
								)
							// console.log({...reviewData,content:values.message})
						}
						validationSchema={validationSchema.validationHelp}
					>
						<View style={styles.topContainer}>
							<ScrollView style={{ backgroundColor: colors.primaryShade24 }}>
								<View style={styles.profilePic}>
									<TopSections
										edit={true}
										image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRl6ZZOcgLnGAST1XFkmKLB5mFHwyX0dCBQQ&usqp=CAU&ec=45761791"
									/>
								</View>
								<Rating
									style={styles.ratings}
									startingValue={2.5}
									imageSize={35}
									fractions={1}
									ratingCount={5}
									onFinishRating={ratingCompleted}
								/>
								<View style={styles.contactDetails}>
									<AppFormFeild
										placeholder="Name"
										name="name"
										editable={false}
										selectTextOnFocus={false}
										selectionColor={colors.primaryShade22}
										placeholderTextColor={colors.primaryShade22}
										overrideContainer={styles.outerLayer}
										overrideTextbox={styles.overrideTextbox}
									/>
									<AppFormFeild
										placeholder="Email"
										keyboardType="email-address"
										name="email"
										editable={false}
										selectTextOnFocus={false}
										selectionColor={colors.primaryShade22}
										placeholderTextColor={colors.primaryShade22}
										overrideContainer={styles.outerLayer}
										overrideTextbox={styles.overrideTextbox}
									/>
									<AppFormFeild
										placeholder="Write your review"
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
							<SubmitButton text="SUBMIT" borderRadius={0} />
						</View>
					</AppForm>
				</View>
			</View>
		</>
	);
};

export default AddReview;

const styles = StyleSheet.create({
	ratings: {
		// alignSelf: 'flex-start',
	},
	textArea: {
		color: colors.primary1,
		width: '100%',
		height: '100%',
		padding: 0,
		margin: 0
	},
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
		color: colors.primary1,
		width: '100%'
	},
	outerLayer: {
		borderColor: colors.primary2,
		borderWidth: 0.5,
		borderBottomColor: colors.primary2
	}
});
