import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    root: {
        width: width,
        aspectRatio: 0.45,
        height: 400,
        alignItems: 'center'
    },
    baseImage: {
        width: '100%',
        position: 'absolute',
        top: 0,
        resizeMode: 'cover'
    },
    background: {
        zIndex: -100
    },
    text: {
        zIndex: 0,
        position: 'absolute',
        top: 60,
        color: 'white',
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 12
    },
    front: {
        zIndex: 100
    }
});

export default styles;
