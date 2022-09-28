import * as pj from "../../assets/Projects";
import * as lang from "../../assets/ProgLogos";
import * as fw from "../../assets/FrameworkLogos";
import * as others from "../../assets/OtherLogos";

type project = {
  title: string;
  description: string;
  thumbnail: string;
  github: string;
  skills: string[];
};

const personal: project[] = [
  {
    title: "Kaggle Pipeline",
    description:
      "An end-to-end pipeline which aims to streamline the process from training to hyperparameter tunning to model evaluation. The intention of this project is to reduced the time needed to participate a competition. The idea is to help the user to focus on understanding and processing the datasets.",
    thumbnail: pj.KagglePipeline.src,
    github: "https://github.com/ak4598/kaggle-pipeline",
    skills: [lang.Python.src],
  },
  {
    title: "Personal Website",
    description:
      "A website to show that A.I. development is not the only thing I know. Learning web development is just out of my curiosity. It is definitely not a contingency for me to escape from the extremely demanding A.I. industry. Trust me.",
    thumbnail: pj.PortfolioWebsite.src,
    github: "https://github.com/ak4598/portfolio-website",
    skills: [fw.Nextjs, lang.TypeScript, lang.Css, others.MongoDBs],
  },
];

const workspace: project[] = [];

export { personal, workspace };
