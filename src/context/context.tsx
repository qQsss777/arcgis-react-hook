import { useState, createContext } from "react";
import React from 'react';
import { Extent } from 'esri/geometry';

export interface IData {
    extent: Extent;
    scale: number;
};

export interface IState {
    data: IData;
    setExtent: (a: Extent, b: number) => void;
};

export interface AppProviderProps {
    children: JSX.Element[];
};

//create new context
export const MapContext = createContext<IState>(null);

//configure provider
export const MapContextProvider = ({ children }: AppProviderProps) => {

    //initial state
    const initialState: IData = {
        extent: null,
        scale: 0
    };
    //configure useState
    const [state, setState] = useState(initialState);

    //configure function to set extent
    const setExtent = (extent: Extent, scale: number) => {
        setState({ extent, scale });
    }

    return <MapContext.Provider value={{ data: state, setExtent }}>
        {children}
    </MapContext.Provider>
};