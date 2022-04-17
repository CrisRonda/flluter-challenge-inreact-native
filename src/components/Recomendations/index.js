import React from 'react';

import { View, FlatList, Text, Image } from 'react-native';
import { useSlider } from '../../context/SliderContext';
import styles from './styles';

const Recomendations = () => {
    const { recomendations } = useSlider();
    return (
        <>
            <View style={styles.spacer} />
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: 16,
                    backgroundColor: 'black'
                }}
            >
                <FlatList
                    data={recomendations}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={() => (
                        <Text style={styles.title}>Recomendations</Text>
                    )}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginBottom: 16
                                }}
                            >
                                <Image
                                    source={require('../../assets/rome_backImage.png')}
                                    style={styles.image}
                                    resizeMode="cover"
                                />
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.cardTitle}>
                                        {item.name}
                                    </Text>
                                    <Text
                                        style={styles.description}
                                        numberOfLines={2}
                                    >
                                        {item.description}
                                    </Text>
                                </View>
                            </View>
                        );
                    }}
                />
            </View>
        </>
    );
};

export default Recomendations;
