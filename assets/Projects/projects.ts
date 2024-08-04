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
      "An end-to-end pipeline which aimed at streamlining the process from training to hyperparameter tuning to model evaluation. The intention of this project was to reduce the time needed to join a competition and help the user to focus on understanding the datasets.",
    thumbnail: pj.KagglePipeline.src,
    github: "https://github.com/ak4598/kaggle-pipeline",
    skills: [lang.Python.src, lib.Sklearn],
  },
  {
    title: "Portfolio Website",
    description:
      "A website to show that A.I. development is not the only thing I know. Learning web development is just out of my curiosity. It is definitely not a contingency for me to escape from the extremely demanding A.I. industry. Trust me.",
    thumbnail: pj.PortfolioWebsite.src,
    github: "https://github.com/ak4598/portfolio-website",
    skills: [fw.Nextjs.src, lang.TypeScript, lang.Css, others.MongoDBs],
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
      others.Rediss.src,
      others.PostgreSQL.src,
      others.MySQLs.src,
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
      others.Rediss.src,
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
      others.Rediss.src,
      others.Dockers.src,
    ],
  },
  {
    title: "Internal RAG Chatbot",
    description:
      "An advanced RAG (Retrieval-Augmented Generation) web application supporting multiple knowledge bases management empowered by the latest popular LLM models, hosted both locally and on cloud.",
    thumbnail: pj.InternalRAGChatbot.src,
    github: "",
    skills: [
      lang.Python.src,
      fw.LangChain.src,
      others.OpenAI.src,
      others.Ollama.src,
      others.Qwen2.src,
      fw.Flask.src,
      fw.React_.src,
      lang.TypeScript,
      lib.Tailwind.src,
      others.Milvus.src,
      others.PostgreSQL.src,
      others.Dockers.src,
      others.AWS.src,
    ],
  },
  {
    title: "Loan Classification",
    description:
      "A demanding project with a massive tabular dataset. Managed comprehensive data cleansing and developed a loan classification model using XGBoost with 70%+ accuracy despite significant data imbalance. Implemented a sturdy database structure to support a user-friendly frontend dashboard built with Next.js, enhancing data visibility and accessibility.",
    thumbnail: pj.LoanClassification.src,
    github: "",
    skills: [
      lang.Python.src,
      lib.XGBoost.src,
      lib.SHAP.src,
      lib.Pandass.src,
      lib.NumPys.src,
      lib.Sklearn,
      fw.Nextjs.src,
      lang.TypeScript,
      lib.Tailwind.src,
      others.PostgreSQL.src,
    ],
  },
  {
    title: "Internet Banking DevOps Migration",
    description:
      "Assisted a major Singaporean bank in upgrading their internet banking system by migrating the build tool from Ant to Maven, transitioning the version controlling tool from IBM ClearCase to Bitbucket, and introducing modern CI/CD tools to its latest DevOps workflow including Jira, Confluence, Jenkins, and Nexus repository.",
    thumbnail: pj.InternetBankingDevOpsMigration.src,
    github: "",
    skills: [
      lang.Java.src,
      others.Jenkins.src,
      others.Maven.src,
      others.Ant.src,
      others.Jira.src,
      others.Confluence.src,
      others.Bitbucket.src,
      others.Nexus.src,
      others.WebSphere.src,
      others.ClearCase.src,
    ],
  },
  {
    title: "A.I. Meeting Assistant",
    description:
      "Developed an automated pipeline begins by uploading meeting recordings, which are then transcribed into text using speech-to-text. The transcript is then segmented into individual speaker turns through diarization. Following this, a LLM is employed to analyze the transcribed content and extract key points, generating a concise meeting summary, reducing average preparation time for ~50%",
    thumbnail: pj.AIMeetingAssistant.src,
    github: "",
    skills: [
      lang.Python.src,
      others.OpenAI.src,
      fw.Flask.src,
      others.FFmpegs.src,
      fw.React_.src,
      lang.TypeScript,
      lib.Tailwind.src,
      others.AWS.src,
    ],
  },
];

export type { project };
export { personal, workspace };
