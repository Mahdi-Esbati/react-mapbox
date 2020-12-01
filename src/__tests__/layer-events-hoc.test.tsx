import * as React from 'react';

import { withMap } from '../context';
import { getMapMock, MockComponent, mountWithMap } from '../jest/util';
import layerMouseTouchEvents from '../layer-events-hoc';

const LayerHOC = withMap<any>(layerMouseTouchEvents(MockComponent as any));

describe('layer-events-hoc', () => {
  it('Should default the id if none is passed', () => {
    const res = mountWithMap(<LayerHOC />, getMapMock());
    expect(res.find('h1').text()).toBe('layer-1');
  });

  it('should listen all mouse and touch events', () => {
    const mapMock = getMapMock();
    mountWithMap(<LayerHOC />, mapMock);

    const events = [
      'click',
      'mouseenter',
      'mouseleave',
      'mousedown',
      'touchstart'
    ];

    expect(mapMock.on.mock.calls.map((call) => call[0])).toEqual(events);
  });
});
