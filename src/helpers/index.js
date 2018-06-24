// @flow
export function getTimes(value: number) {

  function formatTime(time) {
    const int = parseInt(time, 10);
    return (int < 10) ? "0" + int : "" + int;
  }

  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value - (minutes * 60));

  return `${minutes}:${formatTime(seconds)}`;
}

export function getToken(hash: string) {
  const tokenStartIndex = hash.indexOf("access_token=");
  const endIndex = hash.slice(tokenStartIndex+13).indexOf("&");
  return hash.substring(tokenStartIndex+13,endIndex+14);
}
