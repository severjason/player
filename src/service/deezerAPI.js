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

export function auth() {
  //const corsEnywhere = "https://cors-anywhere.herokuapp.com/";
  const urlDeezerAPI = "https://connect.deezer.com/oauth/auth.php?";
  const appID = "280604";
  const redirectUri = "http://localhost:3000/login";
  const perms = "basic_access,email";
  // const jsonpOutput = "&output=jsonp";
  const secret = "a7b6b75d7426b2d7ea6ed1b767125ae8";
  const request = `${urlDeezerAPI}app_id=${appID}&secret=${secret}&redirect_uri=${redirectUri}&perms=${perms}&response_type=token`;
  // return fetch(corsEnywhere + request)
  //   .then(results => console.log(results))
  //   /*.then(response => {
  //     window.open(URL.createObjectURL(response));
  //     console.log(response);
  //   });*/
/*  const x = window.screen.width/2 - 600/2;
  const y = window.screen.height/2 - 600/2;*/
  window.open(request, '_self','height=600,width=600');
}

export function login(token: string) {
  const urlDeezerAPI = "https://api.deezer.com/user/me";
  const jsonpOutput = "&output=jsonp";
  const accessToken = `&access_token=${token}`;

  return fetchJsonp(urlDeezerAPI + accessToken + jsonpOutput)
    .then(results => results.json())
    .then(json => json.error ? json.error : json)
    .catch(error => error);
}