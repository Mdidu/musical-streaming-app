export const getTime = (time) => {
  // Format time from sec to min : sec
  let minutes = Math.floor(time / 60);
  let seconds = ("0" + Math.floor(time % 60)).slice(-2);
  return minutes + ":" + seconds;
};