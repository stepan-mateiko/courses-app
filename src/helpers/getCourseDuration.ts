export const getDuration = (duration: number): string => {
  const hours: number = Math.floor(duration / 60);
  const minutes: number = duration % 60;
  const formattedHours: string = hours < 10 ? `0${hours}` : `${hours}`;
  const formattedMinutes: string = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${formattedHours}:${formattedMinutes} ${
    hours === 1 ? "hour" : "hours"
  }`;
};
