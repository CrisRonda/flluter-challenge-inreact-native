import SliderProvider from './src/context/SliderContext';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import MainStack from './src/navigation';

export default () => {
    return (
        <SliderProvider>
            <NavigationContainer>
                <MainStack />
            </NavigationContainer>
        </SliderProvider>
    );
};
