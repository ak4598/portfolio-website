import AI from "./AI";
import Blockchain from "./Blockchain";
import Web from "./Web";
import DevOps from "./DevOps";

import * as Logos from "../../../../assets/TechLogos";

const Contents = [AI, Blockchain, Web, DevOps];
const TechLogos = [
  {
    logo: Logos.AI,
    text: "Artificial Intelligence",
    colour: "linear-gradient(145deg, rgb(34, 40, 49) 0%, rgb(57, 62, 70) 100%)",
  },
  {
    logo: Logos.Blockchain,
    text: "Blockchain",
    colour: "linear-gradient(145deg, rgb(34, 40, 49) 0%, rgb(57, 62, 70) 100%)",
  },
  {
    logo: Logos.Web,
    text: "Web Development",
    colour: "linear-gradient(145deg, rgb(34, 40, 49) 0%, rgb(57, 62, 70) 100%)",
  },
  {
    logo: Logos.DevOps,
    text: "DevOps",
    colour: "linear-gradient(145deg, rgb(34, 40, 49) 0%, rgb(57, 62, 70) 100%)",
  },
];

export { TechLogos };
export default Contents;
