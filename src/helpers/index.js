export function getTimes(value) {

  function formatTime(time) {
    const int = parseInt(time, 10);
    return (int < 10) ? "0" + int : "" + int;
  }

  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value - (minutes * 60));

  return `${formatTime(minutes)}:${formatTime(seconds)}`;
}