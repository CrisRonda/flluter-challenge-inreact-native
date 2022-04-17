import React from 'react';

import { View, Text, FlatList } from 'react-native';

import { bannerRef, useSlider } from '../../context/SliderContext';
import PlaceCard from './PlaceCard';
import styles from './styles';

const Banner = () => {
    const { places } = useSlider();

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
