import React, { useState } from 'react';

import { useContext, createContext } from 'react';
import data from '../content/places';

const SliderContext = createContext();

const SliderProvider = ({ children }) => {
    const [currentPlace, setCurrentPlace] = useState(0);
    const places = data.places;
    const recomendations = data.recomendations;

    const onChangePlace = (index) => {
        setCurrentPlace(Math.min(Math.max(index, 0), places.length - 1));
    };

    return (
        <SliderContext.Provider
            value={{ places, recomendations, onChangePlace }}
        >
            {children}
        </SliderContext.Provider>
    );
};

export const useSlider = () => useContext(SliderContext);
export default SliderProvider;
