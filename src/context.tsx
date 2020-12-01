import * as MapboxGl from 'mapbox-gl';
import * as React from 'react';

export const MapContext = React.createContext(undefined) as React.Context<
  MapboxGl.Map | undefined
>;

// tslint:disable-next-line:no-any
export function withMap<Props>(Component: React.ComponentClass<Props>) {
  return function MappedComponent<T>(props: Props) {
    return (
      <MapContext.Consumer>
        {(map) => <Component map={map} {...props} />}
      </MapContext.Consumer>
    );
  };
}
