import React from 'react';

import { View, Text, FlatList } from 'react-native';
import {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming
} from 'react-native-reanimated';

import { bannerRef, useSlider } from '../../context/SliderContext';
import PlaceCard from './PlaceCard';
import styles from './styles';

const Banner = () => {
    const { places } = useSlider();
    const translateX = useSharedValue(0);
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }]
        };
    });

    return (
        <View style={styles.root}>
            <FlatList
                ref={bannerRef}
                data={places}
                keyExtractor={(place) => place.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                renderItem={({ item }) => {
                    return <PlaceCard {...item} />;
                }}
            />
        </View>
    );
};

export default Banner;
