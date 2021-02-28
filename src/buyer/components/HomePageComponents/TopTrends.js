import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import ComponentHeading from '../../../common/components/ComponentHeading';
import SimpleCard from '../../../common/components/SimpleCard';
import { getTagsProductAction } from '../../../../store/actions/homeAction';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { TOP_TRENDS } from '../../../../store/actions/actionTypes';
import { apiUrlImage, apiUrlImageProducts } from '../../../config/config';
import i18n from '../../../languages/i18n';

const TopTrends = () => {
	const navigation = useNavigation();
	const handleClick = () => {
		navigation.navigate('SubCategoryProduct', {
			name: i18n.t('homeScreen.Top Trends'),
			id: 3,
			apiName: 'Tag',
			totalItems: undefined
		}); //navigate with params
	};

	const topTrends = useSelector(state => state.home.topTrends);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTagsProductAction(TOP_TRENDS, { id: 3, page: 0, limit: 6 }));
	}, []);

	const productView = id => {
		navigation.navigate('ProductDetails', { id });
	};

	if (!topTrends) return <></>;
	return (
		<View style={styles.parent}>
			<ComponentHeading
				text={i18n.t('homeScreen.Top Trends')}
				more={topTrends.totalRecords > 6 && i18n.t('homeScreen.View More')}
				onPress={() => handleClick()}
			/>
			<View style={styles.row}>
				{topTrends.data.map((data, index) => (
					<React.Fragment key={data.id}>
						{index < 3 && (
							<TouchableOpacity
								onPress={() => productView(data.id)}
								style={styles.child}
							>
								<SimpleCard
									image={
										apiUrlImageProducts +
										data.productName +
										'-' +
										data.productSku +
										'/' +
										data.productImages[0]
									}
									textStyle={styles.text}
									logoStyle={styles.logo}
									imageStyle={styles.image}
									brandLogo={apiUrlImage + data.productImages[0]}
									title={`${data.productDiscount}% ${i18n.t('homeScreen.Off')}`}
								/>
							</TouchableOpacity>
						)}
					</React.Fragment>
				))}
			</View>
			<View style={styles.row}>
				{topTrends.data.map((data, index) => (
					<React.Fragment key={data.id}>
						{index > 2 && (
							<TouchableOpacity
								onPress={() => productView(data.id)}
								style={styles.child}
							>
								<SimpleCard
									image={
										apiUrlImageProducts +
										data.productName +
										'-' +
										data.productSku +
										'/' +
										data.productImages[0]
									}
									textStyle={styles.text}
									logoStyle={styles.logo}
									imageStyle={styles.image}
									brandLogo={apiUrlImage + data.sellerLogo}
									title={`${data.productDiscount}% Off`}
								/>
							</TouchableOpacity>
						)}
					</React.Fragment>
				))}
			</View>
		</View>
	);
};

export default TopTrends;

const styles = StyleSheet.create({
	text: {
		bottom: 5
	},
	parent: {},
	row: {
		flexDirection: 'row',
		paddingBottom: 10,
		flex: 1
	},
	child: {
		flex: 3,
		// width:'50%',
		paddingHorizontal: 5
	},
	image: {
		height: 120,
		marginBottom: 5,
		borderTopRightRadius: 5,
		borderTopLeftRadius: 5
	},
	logo: {
		height: 30
	}
});
