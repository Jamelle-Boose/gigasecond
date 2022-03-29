export const gigasecond = dateUTC => {
  return new Date(dateUTC.getTime() + Math.pow(10, 12))
}
