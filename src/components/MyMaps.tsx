import React from "react";
import { MyMapView } from './MyMapView';
import { MySceneView } from './MySceneView';

const MyMaps = () => {
    return (
        <div className="mappingcontainer">
            <React.Fragment>
                <MyMapView />
                <MySceneView />
            </React.Fragment>
        </div>
    );
}

export { MyMaps };