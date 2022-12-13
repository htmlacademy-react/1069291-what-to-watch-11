function toFormatTime(time: number) {
  let hours = String(Math.floor(time / 60 / 60));
  let minutes = String(Math.floor((time - Number(hours) * 60 * 60) / 60));
  let seconds = String(Math.floor(time - Number(hours) * 60 * 60 - Number(minutes) * 60));

  if (Number(hours) < 10) {
    hours = `0${hours}`;
  }

  if (Number(minutes) < 10) {
    minutes = `0${minutes}`;
  }

  if (Number(seconds) < 10) {
    seconds = `0${seconds}`;
  }

  return `${hours}:${minutes}:${seconds}`;
}

export default toFormatTime;
