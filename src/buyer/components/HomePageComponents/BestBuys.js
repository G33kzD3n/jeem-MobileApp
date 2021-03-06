import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import SimpleCard from '../../../common/components/SimpleCard';
import ComponentHeading from '../../../common/components/ComponentHeading';
import { apiUrlImageProducts } from '../../../config/config';
import { useSelector, useDispatch } from 'react-redux';
import { BEST_BUYS } from '../../../../store/actions/actionTypes';
import { getTagsProductAction } from '../../../../store/actions/homeAction';
import { useNavigation } from '@react-navigation/native';
import i18n from '../../../languages/i18n';

const BestBuys = () => {
	const navigation = useNavigation();
	const handleClick = () => {
		navigation.navigate('SubCategoryProduct', {
			name: i18n.t('homeScreen.Best Buys'),
			id: 2,
			apiName: 'Tag',
			totalItems: undefined
		}); //navigate with params
	};

	const bestBuys = useSelector(state => state.home.bestBuys);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTagsProductAction(BEST_BUYS, { id: 2, page: 0, limit: 4 }));
	}, []);

	const productView = id => {
		navigation.navigate('ProductDetails', { id });
	};

	if (!bestBuys) return <></>;

	return (
		<View style={styles.parent}>
			<ComponentHeading
				text={i18n.t('homeScreen.Best Buys')}
				more={bestBuys.totalRecords > 4 && i18n.t('homeScreen.View More')}
				onPress={() => handleClick()}
			/>
			<View style={styles.row}>
				<TouchableOpacity
					onPress={() => productView(bestBuys.data[0].id)}
					style={styles.child}
				>
					<SimpleCard
						image={
							apiUrlImageProducts +
							bestBuys.data[0].productName +
							'-' +
							bestBuys.data[0].productSku +
							'/' +
							bestBuys.data[0].productImages[0]
						}
						subTitle={`${i18n.t('homeScreen.For')} ${i18n.t('common.SAR')} ${
							bestBuys.data[0].productDiscountedPrice
						} ${i18n.t('homeScreen.only')}`}
						title={bestBuys.data[0].productName}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => productView(bestBuys.data[1].id)}
					style={styles.child}
				>
					<SimpleCard
						image={
							apiUrlImageProducts +
							bestBuys.data[1].productName +
							'-' +
							bestBuys.data[1].productSku +
							'/' +
							bestBuys.data[1].productImages[0]
						}
						subTitle={`${i18n.t('homeScreen.For')} ${i18n.t('common.SAR')} ${
							bestBuys.data[1].productDiscountedPrice
						} ${i18n.t('homeScreen.only')}`}
						title={bestBuys.data[1].productName}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.row}>
				<TouchableOpacity
					onPress={() => productView(bestBuys.data[2].id)}
					style={styles.child}
				>
					<SimpleCard
						image={
							apiUrlImageProducts +
							bestBuys.data[2].productName +
							'-' +
							bestBuys.data[2].productSku +
							'/' +
							bestBuys.data[2].productImages[0]
						}
						subTitle={`${i18n.t('homeScreen.For')} ${i18n.t('common.SAR')} ${
							bestBuys.data[2].productDiscountedPrice
						} ${i18n.t('homeScreen.only')}`}
						title={bestBuys.data[2].productName}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => productView(bestBuys.data[3].id)}
					style={styles.child}
				>
					<SimpleCard
						image={
							apiUrlImageProducts +
							bestBuys.data[3].productName +
							'-' +
							bestBuys.data[3].productSku +
							'/' +
							bestBuys.data[3].productImages[0]
						}
						subTitle={`${i18n.t('homeScreen.For')} ${i18n.t('common.SAR')} ${
							bestBuys.data[3].productDiscountedPrice
						} ${i18n.t('homeScreen.only')}`}
						title={bestBuys.data[3].productName}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default BestBuys;

const styles = StyleSheet.create({
	parent: {},
	row: {
		flexDirection: 'row',
		paddingBottom: 10
	},
	child: {
		width: '50%',
		paddingHorizontal: 8
	}
});
