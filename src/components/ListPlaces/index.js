import React from 'react';

import { FlatList, View, ImageBackground, Text } from 'react-native';

import { useSlider } from '../../context/SliderContext';
import styles from './styles';

const Banner = () => {
    const { places } = useSlider();

    return (
        <View style={styles.root}>
            <FlatList
                data={places}
                keyExtractor={(place) => `${place.id}-list`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <ImageBackground
                            source={item.backgroundImage}
                            style={[styles.card]}
                            resizeMode="cover"
                        >
                            <View style={{ flex: 1 }} />
                            <Text style={styles.name}>{item.name}</Text>
                        </ImageBackground>
                    );
                }}
            />
        </View>
    );
};

export default Banner;
