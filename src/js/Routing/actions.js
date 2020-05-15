export function loadRoute(route) {
  console.log(route);
  return {
    type: "CHANGE_ROUTE",
    route,
  };
}

export function increaseKendal(count) {
  return {
    type: "INCREASE_KENDAL",
    count,
  };
}
