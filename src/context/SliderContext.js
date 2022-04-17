import React, { useState } from 'react';

import { useContext, createContext, createRef } from 'react';
import data from '../content/places';

const SliderContext = createContext();
export const bannerRef = createRef();
export const listRef = createRef();
export const currentPlace = createRef(0);

const SliderProvider = ({ children }) => {
    const [currentPlace, setCurrentPlace] = useState(0);
    const places = data.places;
    const recomendations = data.recomendations;

    const onPressPlace = (index) => {
        if (!bannerRef.current && !listRef.current) {
            return;
        }
        bannerRef.current.scrollToIndex({
            animated: false,
            index: index
        });
        listRef.current.scrollToIndex({
            animated: true,
            index: index
        });
        currentPlace.current = index;
    };

    return (
        <SliderContext.Provider
            value={{ places, recomendations, onPressPlace }}
        >
            {children}
        </SliderContext.Provider>
    );
};

export const useSlider = () => useContext(SliderContext);
export default SliderProvider;
