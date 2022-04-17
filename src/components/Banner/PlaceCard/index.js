import React from 'react';

import { View, Text, Image } from 'react-native';

import styles from './styles';

const PlaceCard = ({ name, frontImage, backgroundImage, ...props }) => {
    return (
        <View style={[styles.root]}>
            <Image
                source={frontImage}
                style={[styles.baseImage, styles.front]}
            />
            <Image
                source={backgroundImage}
                style={[styles.baseImage, styles.background]}
            />
            <Text style={styles.text} numberOfLines={2} adjustsFontSizeToFit>
                {name}
            </Text>
        </View>
    );
};

export default PlaceCard;
