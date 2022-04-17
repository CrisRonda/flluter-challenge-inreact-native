import React from 'react';
import { View } from 'react-native';
import Banner from './components/Banner';
import ListPlaces from './components/ListPlaces';
import Recomendations from './components/Recomendations';

export default function App() {
    return (
        <View>
            <Banner />
            <ListPlaces />
            <Recomendations />
        </View>
    );
}
