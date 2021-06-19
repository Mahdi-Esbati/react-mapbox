import * as MapboxGl from 'mapbox-gl';

function setMapToken(token: string) {
  // tslint:disable-next-line:no-any
  (MapboxGl as any).accessToken = token;
}

export default { setMapToken };
