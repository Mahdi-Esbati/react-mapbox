import * as GeoJSON from 'geojson';
import { Point } from 'mapbox-gl';
import * as React from 'react';

import ProjectedLayer from './projected-layer';
import { getClassName } from './util/classname';
import { Anchor } from './util/types';

export interface Props {
  coordinates: GeoJSON.Position;
  anchor?: Anchor;
  offset?: number | number[] | Point;
  children?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  style?: React.CSSProperties;
  className?: string;
  tabIndex?: number;
}

const defaultClassName = ['mapboxgl-marker'];

export const Marker: React.FunctionComponent<Props> = (props) => {
  const { coordinates, offset, ...otherProps } = props;
  return (
    <ProjectedLayer
      coordinates={coordinates as [number, number]}
      offset={offset as [number, number]}
      {...{ ...otherProps }}
      type="marker"
      className={getClassName(defaultClassName, props.className)}
    />
  );
};

export default Marker;
