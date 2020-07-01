/* 
actions-mehtodes
if there is an action- like a route was changed- the called fuction will set the
the new attribute
*/
//updates the route-object
export function loadRoute(route) {
  return {
    type: "CHANGE_ROUTE",
    route,
  };
}
//updates the personaltyType-object
export function sendType(personaltyType) {
  return {
    type: "CHANGE_TYPE",
    personaltyType,
  };
}
//uptdates testresult-object
export function sendTestresult(testresult) {
  return {
    type: "CHANGE_TESTRESULT",
    testresult,
  };
}
//updates the number of the progressbar
export function increaseProgress(number) {
  return {
    type: "INCREASE_PROGRESS",
    number,
  };
}
//update(resets) the number of the progressbar
export function resetProgress(number) {
  return {
    type: "RESET_PROGRESS",
    number,
  };
}
