import React from 'react';

import { useContext, createContext } from 'react';

const SliderContext = createContext();

const SliderProvider = ({ children }) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <SliderContext.Provider value={{ value, handleChange }}>
            {children}
        </SliderContext.Provider>
    );
};

export const useSlider = () => useContext(SliderContext);
export default SliderProvider;
