import React from "react";
import "./Contact.css";
import { mySocialMedia } from "../../components/NavBar/pages";
import { Facebook, LinkedIn, GitHub, Instagram } from "@mui/icons-material";

const Contact = () => {
  return (
    <div className="background">
      <div className="content">
        <ul>
          <li>
            <a
              href={mySocialMedia.Facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook sx={{ width: "100%", height: "100%" }} />
            </a>
          </li>
          <li>
            <a
              href={mySocialMedia.Instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram sx={{ width: "100%", height: "100%" }} />
            </a>
          </li>
          <li>
            <a
              href={mySocialMedia.LinkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn sx={{ width: "100%", height: "100%" }} />
            </a>
          </li>
          <li>
            <a
              href={mySocialMedia.GitHub}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub sx={{ width: "100%", height: "100%" }} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
