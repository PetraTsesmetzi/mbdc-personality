//routes
import { DefaultComponent } from "../Components/default";
import { Personalitytypes } from "../Components/PersonalityTypes/personalitytype";
import { Personalitytest } from "../Components/Personalitytest/personalitytest";
import { Contact } from "../Components/Contact/contact";
import { Pagenotfound } from "../Components/pagenotfound";
import { Personality } from "../Components/PersonalityTypes/personality";
import { Testresult } from "../Components/Personalitytest/testresults";
import personalities from "../../data/personalities.json";

let id = 0;
let pathI = "";

//sets the path(nested route) for each personalitytype dynamicaly
export const setDynamicRoutes = function (id) {
  Object.values(personalities).map((personality) => {
    if (personality.id == id) {
      routes.map((route) => {
        if (route.title == "personality") {
          route.path = "personalitytypes/personality_" + id;
          pathI = route.path;
        }
      });
    }
  });
};

/* routes object */
/* contains the linkname,the path and the component wich will be created
   the links will be shown in the navbar if their flags are true
*/
export const routes = [
  { title: "home", path: "home", flag: true, component: DefaultComponent },
  {
    title: "personalitytypes",
    path: "personalitytypes",
    flag: true,
    component: Personalitytypes,
  },
  {
    title: "personalitytest",
    path: "personalitytest",
    flag: true,
    component: Personalitytest,
  },
  { title: "contact", path: "contact", flag: true, component: Contact },
  { title: "", path: "home", flag: false, component: DefaultComponent },
  { title: "pagenotfound", path: "pagenotfound", flag: false, component: Pagenotfound },
  {
    title: "personality",
    path: "personalitytypes/personality_",
    flag: false,
    component: Personality,
  },
  {
    title: "testresult",
    path: "personalitytest/testresult",
    flag: false,
    component: Testresult,
  },
];
