import React from 'react';
import { View, Text, Pressable, ImageBackground } from 'react-native';

import Animated from 'react-native-reanimated';
import Cow from '../Icons/Cow';
import Calf from '../Icons/Calf';
import Menu from '../Icons/Menu';
import styles, { useAnimationStyles } from './styles';

const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);
const MyTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View edges={['bottom']} style={styles.root}>
            {state.routes.map((route, index) => (
                <Tile
                    key={index}
                    {...{ route, index, state, descriptors, navigation }}
                />
            ))}
        </View>
    );
};

const Tile = ({ route, index, state, descriptors, navigation }) => {
    const isFocused = state.index === index;
    const {
        animatedStyle,
        animatedStyleLeftImage,
        animatedStyleRightImage,
        animatedStyleSelction,
        animatedStyleTitle
    } = useAnimationStyles(isFocused);
    const { options } = descriptors[route.key];
    const label =
        options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name || '';

    const onPress = () => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
        });

        if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
        }
    };

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <AnimatedImage
                style={[styles.content, animatedStyle]}
                source={require('./mask.png')}
            >
                <View style={[styles.containerImage]}>
                    {`${label}`.toLowerCase() === 'menu' ? (
                        <Menu style={styles.centerImage} />
                    ) : (
                        <>
                            <View style={styles.centerImage}>
                                <Cow />
                            </View>
                            <Animated.View
                                style={[
                                    styles.leftImage,
                                    animatedStyleLeftImage
                                ]}
                            >
                                <Calf />
                            </Animated.View>
                            <Animated.View
                                style={[
                                    styles.rightImage,
                                    animatedStyleRightImage
                                ]}
                            >
                                <Calf />
                            </Animated.View>
                        </>
                    )}
                    <Animated.View
                        style={[styles.circle, animatedStyleSelction]}
                    />
                </View>
            </AnimatedImage>

            <Animated.View style={[styles.title, animatedStyleTitle]}>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 12,
                        fontWeight: isFocused ? 'bold' : 'normal'
                    }}
                >
                    {label}
                </Text>
            </Animated.View>
        </Pressable>
    );
};
export default MyTabBar;
