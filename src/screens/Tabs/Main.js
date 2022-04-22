import React from 'react';
import { View, Text } from 'react-native';

const Main = ({ color = 'black', name }) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: color,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text
                style={{
                    fontSize: 54,
                    color: 'white',
                    fontWeight: '700'
                }}
            >
                {name}
            </Text>
        </View>
    );
};

export default Main;
