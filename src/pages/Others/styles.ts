import { makeStyles } from "@mui/styles";
import backgroundImage from "../../assets/background/iceland.jpg";

const useStyles = makeStyles({
  mask: {
    background:
      "linear-gradient(55deg, rgba(242,252,254,1) 0%, rgba(28,146,210,1) 100%)",
    opacity: "75%",
    zIndex: "1",
    display: "block",

    /* Set up proportionate scaling */
    width: "100%",
    height: "auto",

    position: "fixed",
    top: "0",
    // left: "0",
    // right: "0",
    bottom: "0",
  },
  image: {
    minHeight: "100%",
    minWidth: "1024px",

    /* Set up proportionate scaling */
    width: "100%",
    height: "auto",

    /* Set up positioning */
    position: "fixed",
    top: "0",
    // left: "0",
    bottom: "0",
  },
});

export default useStyles;
