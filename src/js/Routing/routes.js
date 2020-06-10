//routes
import { DefaultComponent } from "../Components/default";
import { Personalitytypes } from "../Components/PersonalityTypes/personalitytype";
import { Personalitytest } from "../Components/Personalitytest/personalitytest";
import { Contact } from "../Components/Contact/contact";
import { Pagenotfound } from "../Components/pagenotfound";
import { Personality } from "../Components/PersonalityTypes/personality";
import { Testresult } from "../Components/Personalitytest/testresults";
import { personalities } from "../../data/personalities";

let id = 0;
let pathI = "";
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
