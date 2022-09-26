import * as pj from "../../assets/Projects";

type project = {
  title: string;
  description: string;
  thumbnail: string;
};

const personal: project[] = [
  {
    title: "Kaggle Pipeline",
    description: "",
    thumbnail: pj.KagglePipeline.src,
  },
  {
    title: "Portfolio Website",
    description: "",
    thumbnail: pj.PortfolioWebsite.src,
  },
];

const workspace: project[] = [];

export { personal, workspace };
