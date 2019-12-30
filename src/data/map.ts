import Map from 'esri/Map';
import MapView from 'esri/views/MapView';

const noop = () => { };

//new map
export const map: Map = new Map({
    basemap: 'streets-relief-vector',
});

//new mapview
export const view: MapView = new MapView({
    map,
    extent: {
        xmin: -513390.9110279666,
        xmax: -485606.0512463424,
        ymin: 6163367.119325026,
        ymax: 6180718.324745738,
        spatialReference: {
            wkid: 102100
        }
    },
    constraints: {
        rotationEnabled: false
    },
    ui: {
        components: ["zoom"]
    }
});

//initialize mapview
export const initialize = (container: HTMLElement): MapView => {
    view.container = container as HTMLDivElement;
    view
        .when()
        .catch(noop);
    return view
};
