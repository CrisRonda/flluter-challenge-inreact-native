import React from 'react';

import { FlatList, View, ImageBackground, Pressable, Text } from 'react-native';

import { listRef, useSlider } from '../../context/SliderContext';
import styles from './styles';

const Banner = () => {
    const { places, onPressPlace } = useSlider();

    return (
        <View style={styles.root}>
            <FlatList
                ref={listRef}
                data={places}
                keyExtractor={(place) => `${place.id}-list`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <Pressable onPress={() => onPressPlace(index)}>
                            <ImageBackground
                                source={item.backgroundImage}
                                style={[styles.card]}
                                resizeMode="cover"
                            >
                                <View style={{ flex: 1 }} />
                                <Text style={styles.name}>{item.name}</Text>
                            </ImageBackground>
                        </Pressable>
                    );
                }}
            />
        </View>
    );
};

export default Banner;
