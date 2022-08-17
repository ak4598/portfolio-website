import AI from "./AI";
import Blockchain from "./Blockchain";
import Web from "./Web";
import DevOps from "./DevOps";

import * as Logos from "../../../../assets/TechLogos";

const Contents = [AI, Blockchain, Web, DevOps];
const TechLogos = [
  {
    logo: Logos.AI,
    colour:
      "linear-gradient(145deg, rgba(32,100,194,1) 0%, rgba(208,197,69,1) 100%)",
  },
  {
    logo: Logos.Blockchain,
    colour:
      "linear-gradient(145deg, rgba(254,247,104,1) 0%, rgba(87,87,75,1) 100%)",
  },
  {
    logo: Logos.Web,
    colour:
      "linear-gradient(145deg, rgba(245,104,104,1) 0%, rgba(116,170,212,1) 71%)",
  },
  {
    logo: Logos.DevOps,
    colour:
      "linear-gradient(145deg, rgba(129,226,232,1) 0%, rgba(64,168,226,1) 100%)",
  },
];

export { TechLogos };
export default Contents;
