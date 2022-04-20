import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: { position: 'absolute', top: -50, zIndex: 400 },
    card: {
        marginHorizontal: 8,
        overflow: 'hidden',
        borderRadius: 4
    },
    name: {
        color: 'rgba(255,255,255,0.8)',
        padding: 4,
        fontWeight: 'bold',
        fontSize: 12
    }
});

export default styles;
