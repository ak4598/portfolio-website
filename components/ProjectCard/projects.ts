import * as pj from "../../assets/Projects";

type project = {
  title: string;
  description: string;
  thumbnail: string;
  skills?: string[];
  github?: string;
};

const personal: project[] = [
  {
    title: "Kaggle Pipeline",
    description:
      "An end-to-end pipeline which aims to streamline the process from training to hyperparameter tunning to model evaluation. The intention of this project is to reduced the time needed to participate a competition. The idea is to help the user to focus on understanding and processing the datasets.",
    thumbnail: pj.KagglePipeline.src,
  },
  {
    title: "Portfolio Website",
    description:
      "A website to show that A.I. development is not the only thing I know. Learning web development is just out of my curiosity. It is definitely not a contingency for me to escape from the extremely demanding A.I. industry. Trust me.",
    thumbnail: pj.PortfolioWebsite.src,
  },
];

const workspace: project[] = [];

export { personal, workspace };
