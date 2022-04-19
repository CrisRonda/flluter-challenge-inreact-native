import React, { useEffect } from 'react';
import Animated, {
    Easing,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSpring,
    withTiming
} from 'react-native-reanimated';

import { View, Text, Image } from 'react-native';

import styles from './styles';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const PlaceCard = ({ name, frontImage, backgroundImage, ...props }) => {
    const progress = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        const tx = interpolate(progress.value, [0, 1], [-50, 50]);

        return {
            transform: [{ translateX: tx }]
        };
    }, []);
    useEffect(() => {
        progress.value = withRepeat(
            withTiming(1, { duration: 15000, easing: Easing.linear }),
            -1,
            true
        );
    }, [progress]);

    return (
        <View style={[styles.root]}>
            <AnimatedImage
                source={frontImage}
                style={[animatedStyle, styles.baseImage, styles.front]}
            />
            <AnimatedImage
                source={backgroundImage}
                style={[animatedStyle, styles.baseImage, styles.background]}
            />
            <Text style={styles.text} numberOfLines={2} adjustsFontSizeToFit>
                {name}
            </Text>
        </View>
    );
};

export default PlaceCard;
