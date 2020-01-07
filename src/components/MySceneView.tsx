import React, { useEffect, useRef, useContext, useState } from "react";
import { MapContext } from '../context/context';
import SceneView = require('esri/views/SceneView');

const MySceneView = () => {
    //get data from context
    const { data } = useContext(MapContext);

    //specially extent
    const { extent } = data;

    //declare view as state
    const [view, setView] = useState<SceneView>();

    //create node
    const mapRef = useRef<HTMLInputElement>(null);

    //load scene
    const lazyLoad = async () => {
        const app = await import("../data/scene");
        const sceneview = await app.initialize(mapRef.current as HTMLDivElement);
        setView(sceneview);
    }

    useEffect(() => { lazyLoad() }, []);

    //update extent after data changes
    useEffect(() => { view && extent ? view.extent = extent : null }, [data]);

    return (
        <div className="sceneview" ref={mapRef} />
    );
}

export { MySceneView };
