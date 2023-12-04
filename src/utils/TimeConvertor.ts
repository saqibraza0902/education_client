export function TimeConvertor(seconds: number) {
  if (seconds < 60) {
    return `${Math.round(seconds)} seconds`;
  } else {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);
    const formattedMinutes = `${minutes} minutes`;

    if (remainingSeconds > 0) {
      return `${formattedMinutes} and ${Math.round(remainingSeconds)} seconds`;
    } else {
      return formattedMinutes;
    }
  }
}
