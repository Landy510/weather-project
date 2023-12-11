const formatTime = (hour) => {
  const formattedHour = ('0' + (hour % 60)).slice(-2);
  return formattedHour + ':00';
}
export default formatTime;