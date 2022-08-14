import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mask: {
    opacity: "75%",
    zIndex: "1",
    display: "block",

    /* Set up proportionate scaling */
    width: "100%",
    height: "auto",

    position: "fixed",
    top: "0",
    bottom: "0",
  },

  paper: {
    display: "flex",
    justifyContent: "center",
    width: "350px",
    height: "250px",
    margin: "10px",
  },

  svg: {
    margin: "2px",
    padding: "3px",
    maxWidth: "95%",
    maxHeight: "95%",
  },

  overlay: {
    zIndex: "2 ",
    position: "absolute",
    textAlign: "center",
    width: "100%",
    // height: "100%",
  },
});

export default useStyles;
