import { makeStyles } from "@mui/styles";
import backgroundImage from "../../assets/background/iceland.jpg";

const useStyles = makeStyles({
  image: {
    minHeight: "100%",
    minWidth: "1024px",

    /* Set up proportionate scaling */
    width: "100%",
    height: "auto",

    /* Set up positioning */
    position: "fixed",
    top: "0",
    left: "0",
  },
});

export default useStyles;
