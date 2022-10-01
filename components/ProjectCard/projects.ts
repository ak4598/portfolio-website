import * as pj from "../../assets/Projects";
import * as lib from "../../assets/LibLogos";
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

const workspace: project[] = [
  {
    title: "Real-time Object Tracking",
    description:
      "An end-to-end pipeline which aims to streamline the process from training to hyperparameter tunning to model evaluation. The intention of this project is to reduced the time needed to participate a competition. The idea is to help the user to focus on understanding and processing the datasets.",
    thumbnail: pj.AIRealTimeTracking.src,
    github: "",
    skills: [
      lang.Python.src,
      lib.TensorFlow.src,
      lib.OpenCV.src,
      lib.Sklearn.src,
      lib.Pandass.src,
      lib.NumPys.src,
      others.FFmpegs.src,
      others.Redis.src,
      others.PostgreSQL.src,
      others.MySQL.src,
      others.Dockers.src,
    ],
  },
  {
    title: "Age Gender Estimation",
    description:
      "A website to show that A.I. development is not the only thing I know. Learning web development is just out of my curiosity. It is definitely not a contingency for me to escape from the extremely demanding A.I. industry. Trust me.",
    thumbnail: pj.AgeGenderEstimation.src,
    github: "",
    skills: [
      lang.Python.src,
      lang.Cpp.src,
      lib.PyTorch.src,
      lib.OpenCV.src,
      lib.NumPys.src,
      others.FFmpegs.src,
      others.Redis.src,
      others.Dockers.src,
    ],
  },
  {
    title: "People Counting Solution",
    description:
      "A website to show that A.I. development is not the only thing I know. Learning web development is just out of my curiosity. It is definitely not a contingency for me to escape from the extremely demanding A.I. industry. Trust me.",
    thumbnail: pj.PeopleCountingSolution.src,
    github: "",
    skills: [
      lang.Python.src,
      lang.Cpp.src,
      lib.PyTorch.src,
      lib.OpenCV.src,
      lib.NumPys.src,
      others.FFmpegs.src,
      others.Redis.src,
      others.Dockers.src,
    ],
  },
];

export { personal, workspace };
