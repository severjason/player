import fetchJsonp from 'fetch-jsonp';

export function findSong(request) {
  const urlDeezerAPI = "https://api.deezer.com/search?q=";
  const jsonpOutput = "&output=jsonp";

  return fetchJsonp(urlDeezerAPI + request + jsonpOutput);
}
