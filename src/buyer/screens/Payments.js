import React, { useRef, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ComponentHeading from '../../common/components/ComponentHeading';
import colors from '../../config/colors';
import PlaceOrderBar from '../components/CartPageComponents/PlaceOrderBar';
import PriceDetails from '../components/CartPageComponents/PriceDetails';
import Collapsible from 'react-native-collapsible';
import ProfileCard from '../../common/components/ProfileCard';
import PaymentOptions from '../components/PaymentPageComponents/PaymentOptions';
import i18n from '../../languages/i18n';

const Payments = () => {
	const scrollViewRef = useRef();
	const [collapsedSubCat, setCollapsedSubCat] = useState(false);
	const [category, setCategory] = useState('');
	const toggleExpanded = selectedCategory => {
		// setCategory(selectedCategory);
		collapsedSubCat ? setCollapsedSubCat(false) : setCollapsedSubCat(true);
	};

	return (
		<>
			<ComponentHeading text={i18n.t('paymentScreen.PAYMENT OPTIONS')} />
			<ScrollView style={styles.scroll} ref={scrollViewRef}>
				<ProfileCard
					customStyle={styles.customStyle}
					heading={i18n.t('paymentScreen.Cash on delivery')}
					icon="cash"
					onPress={toggleExpanded}
					icon2={collapsedSubCat ? 'chevron-down' : 'chevron-up'}
				/>
				<Collapsible collapsed={collapsedSubCat} align="center">
					<PaymentOptions />
				</Collapsible>
				<View style={{ marginTop: 8 }}>
					<PriceDetails />
				</View>
			</ScrollView>

			<PlaceOrderBar
				scrollViewRef={scrollViewRef}
				navigationAddress="OrderDetails"
				// total={1024}
				text={i18n.t('paymentScreen.PLACE ORDER')}
			/>
		</>
	);
};

export default Payments;

const styles = StyleSheet.create({
	scroll: {
		backgroundColor: colors.primaryShade24,
		flex: 1
	},
	customStyle: {
		marginBottom: 2,
		backgroundColor: colors.white,
		height: 60,
		justifyContent: 'center'
	}
});
