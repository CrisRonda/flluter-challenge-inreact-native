import { StyleSheet, Dimensions } from 'react-native';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#0365C0',
        height: 86,
        justifyContent: 'center'
    },
    circle: {
        position: 'absolute',
        backgroundColor: '#02427E',
        width: 82,
        height: 82,
        borderRadius: 60,
        zIndex: 100,
        borderWidth: 1,
        borderColor: '#0494FF',
        transform: [{ translateY: 10 }]
    },
    container: { width: width / 4, maxWidth: 120 },
    content: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    containerImage: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100
    },
    centerImage: {
        width: 30 * 0.9,
        zIndex: 300
    },
    leftImage: {
        position: 'absolute',
        width: 24 * 0.9,
        zIndex: 200
    },
    rightImage: {
        position: 'absolute',
        width: 24 * 0.9,
        zIndex: 200
    },
    title: {
        fontSize: 12,
        zIndex: 999,
        position: 'absolute',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;

export const useAnimationStyles = (isFocused) => {
    const animatedStyle = useAnimatedStyle(() => {
        if (isFocused) {
            return {
                transform: [{ translateY: withTiming(-16) }]
            };
        }
        return {
            transform: [{ translateY: withTiming(0) }]
        };
    });

    const animatedStyleRightImage = useAnimatedStyle(() => {
        if (isFocused) {
            return {
                opacity: withTiming(1),
                transform: [
                    { translateY: withTiming(12) },
                    { translateX: withTiming(18) }
                ]
            };
        }
        return {
            opacity: withTiming(0),
            transform: [
                { translateY: withTiming(0) },
                { translateX: withTiming(0) }
            ]
        };
    });
    const animatedStyleLeftImage = useAnimatedStyle(() => {
        if (isFocused) {
            return {
                opacity: withTiming(1),
                transform: [
                    { translateY: withTiming(12) },
                    { translateX: withTiming(-23) }
                ]
            };
        }
        return {
            opacity: withTiming(0),
            transform: [
                { translateY: withTiming(0) },
                { translateX: withTiming(0) }
            ]
        };
    });
    const animatedStyleSelction = useAnimatedStyle(() => {
        if (isFocused) {
            return {
                opacity: withTiming(1)
            };
        }
        return {
            opacity: withTiming(0)
        };
    });
    const animatedStyleTitle = useAnimatedStyle(() => {
        if (isFocused) {
            return {
                top: withTiming(52)
            };
        }
        return {
            top: withTiming(62)
        };
    });

    return {
        animatedStyle,
        animatedStyleRightImage,
        animatedStyleLeftImage,
        animatedStyleSelction,
        animatedStyleTitle
    };
};
