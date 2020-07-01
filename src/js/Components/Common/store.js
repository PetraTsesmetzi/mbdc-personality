/* Store in ES5/Protype */
/* contain the previous State and the new state */
function Store() {
  this.previousState = {
    route: { path: null },
    progress: { counter: 0 },
    personality: { type: null },
    testresult: { result: null },
  };
  this.state = {
    route: { path: null },
    progress: { counter: 0 },
    testresult: { result: null },
  };
}
//subscribers- collects all the function of the objects that will need an update
let subscribers = [];
Store.prototype.subscribe = function (fn) {
  subscribers.push(fn);
};
//deletes the function of the subscribers array if the objects unsubscribed to the store
Store.prototype.unsubscribe = function (fn) {
  subscribers.splice(subscribers.indexOf(fn), 1);
};

//sets the update of the state
Store.prototype.dispatch = function (action) {
  this.previousState = { ...this.state };
  this.state = {
    route: changeRoute(this.state.route, action),
    progress: progressCount(this.state.progress, action),
    personality: changeType(this.state.personality, action),
    testresult: changeTestresult(this.state.testresult, action),
  };

  // runs the functions in the subscriber array
  subscribers.forEach((subscriber) => {
    subscriber(this.previousState, this.state);
  });
};

//if route has been changed overwrite the route attribute of the state object
function changeRoute(route, action) {
  switch (action.type) {
    case "CHANGE_ROUTE":
      let newRoute = action.route;
      return newRoute;
    default:
      return route || "";
  }
}
//if personality type has been changed overwrite the personalitytype attribute of the state object
function changeType(personality, action) {
  switch (action.type) {
    case "CHANGE_TYPE":
      let newPersonality = action.personaltyType;
      return newPersonality;
    default:
      return personality || "";
  }
}
//if testresult has been change overwrite the testresult attribute of the state object
function changeTestresult(testresult, action) {
  switch (action.type) {
    case "CHANGE_TESTRESULT":
      let newTestresult = action.testresult;
      return newTestresult;
    default:
      return testresult || "";
  }
}
//if porgess has been change overwrite the progress attribute of the state object
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

export const store = new Store();
