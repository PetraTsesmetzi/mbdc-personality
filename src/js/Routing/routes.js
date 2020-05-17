//routes
import { DefaultComponent } from "../Components/default";
import { Personalities } from "../Components/personalities";
import { Personalitytest } from "../Components/personalitytest";
import { Contact } from "../Components/contact";
import { Pagenotfound } from "../Components/pagenotfound";
import { KendalComponent } from "../Common/kendal";

export const routes = {
  home: DefaultComponent,
  personalitytype: Personalities,
  personalitytest: Personalitytest,
  contact: Contact,

  pagenotfound: Pagenotfound,
  kendal: KendalComponent,
};
