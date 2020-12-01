import { GeoJSONSourceRaw } from 'mapbox-gl';
import * as React from 'react';

import { getMapMock, mountWithMap } from '../jest/util';
import Source from '../source';

describe('Source', () => {
  const EMPTY_GEOJSON_SRC = {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: []
    }
  };

  it('Should render source with geoJsonSource', () => {
    const mapMock = getMapMock({
      getSource: jest.fn()
    });
    const sourceId = 'source-1';

    mountWithMap(
      <Source
        id={sourceId}
        geoJsonSource={EMPTY_GEOJSON_SRC as GeoJSONSourceRaw}
      />,
      mapMock
    );

    expect(mapMock.addSource.mock.calls[0]).toEqual([
      sourceId,
      {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      }
    ]);
  });
});
