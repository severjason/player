// @flow
import fetchJsonp from 'fetch-jsonp';
import trim from 'lodash/trim';

export function findSong(request: string) {
  const urlDeezerAPI = "https://api.deezer.com/search?q=";
  const jsonpOutput = "&output=jsonp";

  request = !!trim(request) ? request : 'a';

  return fetchJsonp(urlDeezerAPI + request + jsonpOutput)
    .then(results => results.json())
    .then(json => json.error ? json.error : json)
    .catch(error => error);
}
