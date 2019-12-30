import React, { useEffect, useRef, useContext } from "react";
import { MapContext } from '../context/context';
import watchUtils = require('esri/core/watchUtils');

const MyMapView = () => {
    //get function setExtent from context
    const { setExtent } = useContext(MapContext);

    //create node
    const mapRef = useRef<HTMLInputElement>(null);

    //load map
    const lazyLoad = async () => {
        const app = await import("../data/map");
        const mapview = await app.initialize(mapRef.current as HTMLDivElement);
        mapview.when(() => {
            watchUtils.init(mapview, "extent", (extent) => setExtent(extent, mapview.scale))
        });
    }

    useEffect(() => { lazyLoad() }, []);

    return (
        <div className="mapview" ref={mapRef} />
    );
}

export { MyMapView };