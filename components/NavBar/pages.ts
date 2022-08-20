type Page = {
  name: string;
  sections: string[];
};

const pages: Page[] = [
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

const mySocialMedia = {
  Facebook: "https://www.facebook.com/ak4598/",
  LinkedIn: "https://www.linkedin.com/in/andykmh/",
  Instagram: "https://www.instagram.com/andykwan4598/",
  GitHub: "https://github.com/ak4598",
};

export { pages, mySocialMedia };
export type { Page };
