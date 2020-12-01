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
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onDoubleClick?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onScroll?: React.UIEventHandler<HTMLDivElement>;
  onWheel?: React.MouseEventHandler<HTMLDivElement>;
  style?: React.CSSProperties;
  className?: string;
  tabIndex?: number;
}

export const defaultClassName = ['mapboxgl-popup'];

export default class Popup extends React.Component<Props> {
  public render() {
    const {
      coordinates,
      offset,
      children,
      className,
      ...otherProps
    } = this.props;
    const childrenClassName = getClassName(defaultClassName, className);

    return (
      <ProjectedLayer
        coordinates={coordinates as [number, number]}
        offset={offset as [number, number]}
        {...otherProps}
        type="popup"
        className={childrenClassName}
      >
        <div className="mapboxgl-popup-tip" />
        <div className="mapboxgl-popup-content">{children}</div>
      </ProjectedLayer>
    );
  }
}
