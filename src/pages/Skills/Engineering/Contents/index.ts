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
      "linear-gradient(145deg, rgba(66,80,85,1) 0%, rgba(213,232,240,1) 100%)",
  },
  {
    logo: Logos.Blockchain,
    colour:
      "linear-gradient(145deg, rgba(85,66,66,1) 0%, rgba(240,213,213,1) 100%)",
  },
  {
    logo: Logos.Web,
    colour:
      "linear-gradient(145deg, rgba(66,85,75,1) 0%, rgba(213,240,225,1) 100%)",
  },
  {
    logo: Logos.DevOps,
    colour:
      "linear-gradient(145deg, rgba(85,84,66,1) 0%, rgba(237,240,213,1) 100%)",
  },
];

export { TechLogos };
export default Contents;
