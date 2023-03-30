function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds - hours * 3600) / 60);
  let secs = seconds - (hours * 3600 + minutes * 60);

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (secs < 10) {
    secs = `0${secs}`;
  }

  return `${hours}:${minutes}:${secs}`;
}
