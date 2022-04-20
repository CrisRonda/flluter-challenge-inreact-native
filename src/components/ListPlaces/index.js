import React from 'react';

import { FlatList, View, ImageBackground, Pressable, Text } from 'react-native';

import { listRef, useSlider } from '../../context/SliderContext';
import styles from './styles';

const itemWidth = 120;
const startScroll = (itemWidth * 3) / 4;

const Banner = () => {
    const { listPlaces, onPressPlace } = useSlider();
    React.useEffect(() => {
        if (listRef.current)
            listRef.current.scrollToOffset({
                offset: startScroll,
                animated: false
            });
    }, [listRef]);

    const snapToOffsets = listPlaces.map((x, i) => {
        return i * itemWidth + startScroll;
    });

    return (
        <View style={styles.root}>
            <FlatList
                ref={listRef}
                data={listPlaces}
                keyExtractor={(place) => `${place.id}-list`}
                pagingEnabled={true}
                horizontal={true}
                decelerationRate={0}
                snapToOffsets={snapToOffsets}
                snapToAlignment={'center'}
                // onScrollEndDrag={(e) => {
                //    This code is for scroll automatically to the place
                //     const { contentOffset } = e.nativeEvent;
                //     const _index = Math.max(
                //         Math.round(contentOffset.x / 100),
                //         0
                //     );
                //     onPressPlace(_index);
                // }}
                showsHorizontalScrollIndicator={false}
                renderItem={CardPlace}
            />
        </View>
    );
};

export default Banner;

const CardPlace = ({ item }) => {
    return (
        <Pressable onPress={() => onPressPlace(item)}>
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
};
