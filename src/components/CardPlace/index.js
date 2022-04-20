import React from 'react';

import { View, ImageBackground, Pressable, Text } from 'react-native';
import Animated, {
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from 'react-native-reanimated';

import { useSlider } from '../../context/SliderContext';
import styles from './styles';

const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);

const CardPlace = ({ item }) => {
    const { onPressPlace } = useSlider();
    const isPressed = useSharedValue(false);
    const animatedStyle = useAnimatedStyle(() => {
        if (isPressed.value) {
            return {
                width: withTiming(0, { duration: 800 }, (endAnimation) => {
                    endAnimation && runOnJS(onPressPlace)(item);
                }),
                opacity: withTiming(0, { duration: 300 }),
                marginHorizontal: withTiming(0, { duration: 300 })
            };
        }

        return {
            width: withTiming(100, { duration: 500 }),
            aspectRatio: 0.76,
            opacity: withTiming(1, { duration: 500 })
        };
    });
    const onPressCard = () => {
        isPressed.value = !isPressed.value;
    };
    return (
        <Pressable onPress={onPressCard}>
            <AnimatedImage
                source={item.backgroundImage}
                style={[styles.card, animatedStyle]}
                resizeMode="cover"
            >
                <View style={{ flex: 1 }} />
                <Text style={styles.name}>{item.name}</Text>
            </AnimatedImage>
        </Pressable>
    );
};
export default CardPlace;
