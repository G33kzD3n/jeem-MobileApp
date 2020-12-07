import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableWithoutFeedback,
} from 'react-native';
import Card from '../../../common/components/Card';
import ComponentHeading from '../../../common/components/ComponentHeading';

const data = [
	{
		title: 'Flat 30% Off',
		subTitle: 'Limited Time Offer',
		brand: 'Levis',
		image:
			'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000',
	},
	{
		title: 'Flat 30% Off',
		subTitle: 'Limited Time Offer',
		brand: 'Levis',
		image:
			'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000',
	},
	{
		title: 'Flat 30% Off',
		subTitle: 'Limited Time Offer',
		brand: 'Levis',
		image:
			'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000',
	},
	{
		title: 'Flat 30% Off',
		subTitle: 'Limited Time Offer',
		brand: 'Levis',
		image:
			'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000',
	},
	{
		title: 'Flat 30% Off',
		subTitle: 'Limited Time Offer',
		brand: 'Levis',
		image:
			'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000',
	},
	{
		title: 'Flat 30% Off',
		subTitle: 'Limited Time Offer',
		brand: 'Levis',
		image:
			'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000',
	},
	{
		title: 'Flat 30% Off',
		subTitle: 'Limited Time Offer',
		brand: 'Levis',
		image:
			'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000',
	},
	{
		title: 'Flat 30% Off',
		subTitle: 'Limited Time Offer',
		brand: 'Levis',
		image:
			'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000',
	},
	{
		title: 'Flat 30% Off',
		subTitle: 'Limited Time Offer',
		brand: 'Levis',
		image:
			'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000',
	},
	{
		title: 'Flat 30% Off',
		subTitle: 'Limited Time Offer',
		brand: 'Levis',
		image:
			'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000',
	},
	{
		title: 'Flat 30% Off',
		subTitle: 'Limited Time Offer',
		brand: 'Levis',
		image:
			'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000',
	},
];

const DealsOfTheDay = () => {
	return (
		<View>
			<ComponentHeading text="DEALS OF THE DAY" more="View More" />
			<FlatList
				data={data}
				horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={(data, index) => index.toString()}
				renderItem={({ item }) => (
					<View style={{ paddingHorizontal: 5, width: 170 }}>
						<TouchableWithoutFeedback onPress={() => console.log(item)}>
							<Card
								image={item.image}
								brand={item.brand}
								title={item.title}
								subTitle={item.subTitle}
							/>
						</TouchableWithoutFeedback>
					</View>
				)}
			/>
		</View>
	);
};

export default DealsOfTheDay;

const styles = StyleSheet.create({});
