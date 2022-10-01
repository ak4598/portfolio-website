import * as pj from ".";
import * as lib from "../LibLogos";
import * as lang from "../ProgLogos";
import * as fw from "../FrameworkLogos";
import * as others from "../OtherLogos";

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
      "An end-to-end pipeline which aims to streamline the process from training to hyperparameter tunning to model evaluation. The intention of this project is to reduced the time needed to join a competition and help the user to focus on understanding the datasets.",
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
      "A real-time object tracking solution for the Hong Kong racing industry. The solution is an end-to-end delivery including data pre-processing, training pipeline and real-time tracking module. The model achieved an average accuracy of 98.7% with 25 FPS.",
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
    ],
  },
  {
    title: "Age Gender Estimation",
    description:
      "A 2-stage model to detect faces and estimate respective individuals’ age and gender which has achieved 90% accuracy under masked scenarios. It is optimized for running 24/7 on edge devices with 30 FPS and containerized for CI/CD.",
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
      "A model to count in and out of people in environments with limited space which has achieved over 95% accuracy. It is optimized for running 24/7 on edge devices with 30 FPS and containerized for CI/CD.",
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
