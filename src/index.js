import React from 'react';
import { View } from 'react-native';
import Banner from './components/Banner';
import ListPlaces from './components/ListPlaces';
import Recomendations from './components/Recomendations';

export default function App() {
    return (
        <>
            <Banner />
            <View style={{ zIndex: 400, backgroundColor: 'black' }}>
                <ListPlaces />
            </View>
            <Recomendations />
        </>
    );
}
