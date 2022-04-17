import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    spacer: { width: '100%', height: 100, backgroundColor: 'black' },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16,
        color: 'rgba(255,255,255,0.8)'
    },
    image: {
        width: 60,
        aspectRatio: 1,
        marginRight: 16,
        color: 'rgba(255,255,255,0.8)'
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 6,
        color: 'rgba(255,255,255,0.8)'
    },
    description: {
        fontSize: 10,
        color: 'rgba(255,255,255,0.8)'
    }
});

export default styles;
