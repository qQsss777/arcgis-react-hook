import Map from 'esri/Map';
import SceneView from 'esri/views/SceneView';
import SceneLayer = require('esri/layers/SceneLayer');
import { Extent } from 'esri/geometry';

const noop = () => { };

export const layer: SceneLayer = new SceneLayer({
    portalItem: {
        id: "f5ed773eac4444bf9428a0ffffc7a558"
    }
});

export const map: Map = new Map({
    basemap: 'streets-relief-vector',
    ground: "world-elevation"
});

export const view: SceneView = new SceneView({
    map,
    camera: {
        position: [-4.4870712, 48.3903507, 300],
        tilt: 70
    },
    scale: 12,
    ui: {
        components: ["attribution"]
    }

});

export const initialize = (container: HTMLElement): SceneView => {
    view.container = container as HTMLDivElement;
    view.map.add(layer);
    view.on("drag", event => event.stopPropagation());
    view.on("double-click", event => event.stopPropagation());
    view.on("double-click", ["Control"], event => event.stopPropagation());
    view.on("mouse-wheel", event => event.stopPropagation());
    view
        .when(() => {
            const initialExtent = new Extent({
                xmin: -513390.9110279666,
                xmax: -485606.0512463424,
                ymin: 6163367.119325026,
                ymax: 6180718.324745738,
                spatialReference: {
                    wkid: 102100
                }
            })
            view.extent = initialExtent
        })
        .catch(noop);
    return view
};
