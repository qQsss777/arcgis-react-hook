import { MyMapView } from './MyMapView';
import Header from './Header';
import { MySceneView } from './MySceneView';
import { MyMaps } from './MyMaps';
import { MapContextProvider } from '../context/context';
import React from "react";

const App = () => {
    return (
        <div className="container">
            <MapContextProvider>
                <Header />
                <MyMaps />
            </MapContextProvider>
        </div>
    );
}

export default App;