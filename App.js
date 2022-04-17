import App from './src';
import SliderProvider from './src/context/SliderContext';

export default () => {
    return (
        <SliderProvider>
            <App />
        </SliderProvider>
    );
};
