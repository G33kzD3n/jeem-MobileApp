import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ComponentHeading from '../../../common/components/ComponentHeading';
import RecommendCarousel from './RecommendCarousel';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTagsAction } from '../../../../store/actions/homeAction';
import { GET_ALL_TAGS } from '../../../../store/actions/actionTypes';

const RecommendedForYou = () => {
	const getAllTags = useSelector((state) => state.home.allTags);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllTagsAction(GET_ALL_TAGS));
	}, []);

	if (!getAllTags) return <></>;
	return (
		<View>
			<ComponentHeading text="Recommended" />
			<RecommendCarousel allTags={getAllTags} />
		</View>
	);
};

export default RecommendedForYou;

const styles = StyleSheet.create({});
