import React from 'react';

import { FlatList, View } from 'react-native';

import { listRef, useSlider } from '../../context/SliderContext';
import CardPlace from '../CardPlace';
import styles from './styles';

const itemWidth = 120;
const startScroll = (itemWidth * 3) / 4;

const Banner = () => {
    const { listPlaces } = useSlider();

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
                keyExtractor={({ id }, index) =>
                    index === listPlaces.length - 1
                        ? `${id}-${new Date().getTime()}`
                        : id
                }
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
                renderItem={({ item }) => <CardPlace item={item} />}
            />
        </View>
    );
};

export default Banner;
