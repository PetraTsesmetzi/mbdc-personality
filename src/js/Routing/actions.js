//actions
export function loadRoute(route) {
  return {
    type: "CHANGE_ROUTE",
    route,
  };
}

export function increaseProgress(number) {
  return {
    type: "INCREASE_PROGRESS",
    number,
  };
}

export function increaseKendal(count) {
  return {
    type: "INCREASE_KENDAL",
    count,
  };
}
