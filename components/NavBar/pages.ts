import {
  Facebook,
  Instagram,
  GitHub,
  LinkedIn,
} from "../../assets/SocialMediaLogos";

const pages = [
  {
    name: "Home",
    sections: ["About", "Contact"],
  },
  {
    name: "Skills",
    sections: ["Cookery", "Photography", "Engineering"],
  },
  {
    name: "Projects",
    sections: ["Personal", "Workspace "],
  },
];

const mySocialMedia = [
  { link: "https://www.facebook.com/ak4598/", logo: Facebook.src },
  { link: "https://www.instagram.com/andykwan4598/", logo: Instagram.src },
  { link: "https://www.linkedin.com/in/andykmh/", logo: LinkedIn.src },
  { link: "https://github.com/ak4598", logo: GitHub.src },
];

export { pages, mySocialMedia };
