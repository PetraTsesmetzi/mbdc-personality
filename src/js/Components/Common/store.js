function Store() {
  this.previousState = {
    route: { path: null },
    kendal: { counter: 0 },
    progress: { counter: 0 },
  };
  this.state = {
    route: { path: null },
    kendal: { counter: 0 },
    progress: { counter: 0 },
  };
}
let subscribers = [];
Store.prototype.subscribe = function (fn) {
  subscribers.push(fn);
};

Store.prototype.unsubscribe = function (fn) {
  subscribers.splice(subscribers.indexOf(fn), 1);
};

Store.prototype.dispatch = function (action) {
  this.previousState = { ...this.state };
  this.state = {
    route: changeRoute(this.state.route, action),
    kendal: kendalCount(this.state.kendal, action),
    progress: progressCount(this.state.progress, action),
  };

  subscribers.forEach((subscriber) => {
    subscriber(this.previousState, this.state);
  });
};

function changeRoute(route, action) {
  switch (action.type) {
    case "CHANGE_ROUTE":
      let newRoute = action.route;
      return newRoute;
    default:
      return route || "";
  }
}
function progressCount(progress, action) {
  switch (action.type) {
    case "INCREASE_PROGRESS":
      let newProgress = { counter: progress.counter + 5 };
      return newProgress;
    default:
      return progress || { counter: 0 };
  }
}

function kendalCount(kendal, action) {
  switch (action.type) {
    case "INCREASE_KENDAL":
      let newKendal = { counter: kendal.counter + 1 };
      return newKendal;
    default:
      return kendal || { counter: 0 };
  }
}

export const store = new Store();
