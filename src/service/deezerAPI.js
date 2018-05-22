import fetchJsonp from 'fetch-jsonp';

export function findSong(request, onSuccess, onError) {
  const urlDeezerAPI = "https://api.deezer.com/search?q=";
  const jsonpOutput = "&output=jsonp";

  return fetchJsonp(urlDeezerAPI + request + jsonpOutput)
    .then(results => results.json())
    .then(json => json.error ? onError(json.error) : onSuccess(json))
    .catch(error => onError(error));
}
