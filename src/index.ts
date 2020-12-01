// Add a style tag to the document's head for the map's styling
import Cluster from './cluster';
import { MapContext, withMap } from './context';
import Feature from './feature';
import GeoJSONLayer from './geojson-layer';
import Image from './image';
import BaseLayer from './layer';
import layerMouseTouchEvents from './layer-events-hoc';
import Map from './map';
import Marker from './marker';
import Popup from './popup';
import RotationControl from './rotation-control';
import ScaleControl from './scale-control';
import Source from './source';
import ZoomControl from './zoom-control';

const Layer = withMap(layerMouseTouchEvents(BaseLayer));

export {
  Feature,
  Layer,
  GeoJSONLayer,
  Map,
  Popup,
  ZoomControl,
  ScaleControl,
  Marker,
  Source,
  Cluster,
  RotationControl,
  Image,
  MapContext
};

export default Map;
