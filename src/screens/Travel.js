import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Button } from 'react-native';
import Banner from '../components/Banner';
import ListPlaces from '../components/ListPlaces';
import Recomendations from '../components/Recomendations';

export default function App() {
    const { navigate } = useNavigation();
    return (
        <>
            <Banner />
            <View style={{ zIndex: 400, backgroundColor: 'black' }}>
                <ListPlaces />
            </View>
            <Recomendations />
            <Button title="Go to tabs" onPress={() => navigate('MainTabs')} />
        </>
    );
}
