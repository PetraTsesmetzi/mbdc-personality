//routes
import { DefaultComponent } from "../Components/default";
import { Personalitytype } from "../Components/PersonalityTypes/personalitytype";
import { Personalitytest } from "../Components/personalitytest";
import { Contact } from "../Components/contact";
import { Pagenotfound } from "../Components/pagenotfound";
import { KendalComponent } from "../Common/kendal";

export const routes = {
  home: DefaultComponent,
  personalitytype: Personalitytype,
  personalitytest: Personalitytest,
  contact: Contact,
  pagenotfound: Pagenotfound,
  kendal: KendalComponent,
};
