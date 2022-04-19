// @ts-check

import React from 'react';

import { View, FlatList } from 'react-native';

import { bannerRef, useSlider } from '../../context/SliderContext';
import PlaceCard from './PlaceCard';
import styles from './styles';

const Banner = () => {
    const { currentPlace } = useSlider();

    return (
        <View style={[styles.root]}>
            <PlaceCard {...currentPlace} />
        </View>
    );
};

export default Banner;
