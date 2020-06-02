function Store() {
  this.previousState = {
    route: { path: null },
    kendal: { counter: 0 },
    progress: { counter: 0 },
    personality: { type: null },
    testresult: { result: null },
  };
  this.state = {
    route: { path: null },
    kendal: { counter: 0 },
    progress: { counter: 0 },
    testresult: { result: null },
  };
}
let subscribers = [];
Store.prototype.subscribe = function (fn) {
  subscribers.push(fn);
};

Store.prototype.unsubscribe = function (fn) {
  subscribers.splice(subscribers.indexOf(fn), 1);
};
// hier wird der previous nicht überschrieben beim reseten, verfolge mal
Store.prototype.dispatch = function (action) {
  this.previousState = { ...this.state };
  this.state = {
    route: changeRoute(this.state.route, action),
    kendal: kendalCount(this.state.kendal, action),
    progress: progressCount(this.state.progress, action),
    personality: changeType(this.state.personality, action),
    testresult: changeTestresult(this.state.testresult, action),
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
function changeType(personality, action) {
  switch (action.type) {
    case "CHANGE_TYPE":
      let newPersonality = action.personaltyType;
      return newPersonality;
    default:
      return personality || "";
  }
}
function changeTestresult(testresult, action) {
  switch (action.type) {
    case "CHANGE_TESTRESULT":
      let newTestresult = action.testresult;
      return newTestresult;
    default:
      return testresult || "";
  }
}
function progressCount(progress, action) {
  switch (action.type) {
    case "INCREASE_PROGRESS":
      let newProgress = { counter: progress.counter + 5 };
      return newProgress;
    case "RESET_PROGRESS":
      let newProgressreset = { counter: 0 };
      return newProgressreset;
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
