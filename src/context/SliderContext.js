import React, { useState, useCallback } from 'react';

import { useContext, createContext, createRef } from 'react';

import data from '../content/places';

const SliderContext = createContext();
export const bannerRef = createRef();
export const listRef = createRef();
export const currentPlace = createRef(0);

const SliderProvider = ({ children }) => {
    const [currentPlace, setCurrentPlace] = useState(0);
    const places = data.places;
    const [listPlaces, setListPlaces] = useState(places);
    const recomendations = data.recomendations;

    const orderPlaces = (item) => {
        const index = listPlaces.findIndex((x) => x.id === item.id);
        const newList = [...listPlaces];
        const newCurrentPlace = newList[index];
        newList.splice(index, 1);
        setListPlaces([...newList, newCurrentPlace]);
    };
    const onPressPlace = (item) => {
        const index = places.findIndex((x) => x.id === item.id);

        //  This code is for scroll automatically to the place
        // if (!listRef.current) {
        //     return;
        // }

        // // listRef.current.scrollToIndex({
        // //     animated: true,
        // //     index: index
        // // });
        setCurrentPlace(index);
        orderPlaces(item);
    };

    return (
        <SliderContext.Provider
            value={{
                places,
                recomendations,
                onPressPlace,
                currentPlace: places[currentPlace],
                listPlaces
            }}
        >
            {children}
        </SliderContext.Provider>
    );
};

export const useSlider = () => useContext(SliderContext);
export default SliderProvider;
