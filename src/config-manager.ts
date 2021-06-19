import * as MapboxGl from 'mapbox-gl';

function setMapToken(token: string) {
  (MapboxGl as any).accessToken = token;
}

export default { setMapToken };
