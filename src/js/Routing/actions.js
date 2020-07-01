/* 
actions-mehtodes
if there is an action- like a route was changed- the called fuction will set the
the new attribute
*/
export function loadRoute(route) {
  return {
    type: "CHANGE_ROUTE",
    route,
  };
}
export function sendType(personaltyType) {
  return {
    type: "CHANGE_TYPE",
    personaltyType,
  };
}
export function sendTestresult(testresult) {
  return {
    type: "CHANGE_TESTRESULT",
    testresult,
  };
}

export function increaseProgress(number) {
  return {
    type: "INCREASE_PROGRESS",
    number,
  };
}
export function resetProgress(number) {
  return {
    type: "RESET_PROGRESS",
    number,
  };
}
