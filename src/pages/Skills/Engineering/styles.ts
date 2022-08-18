import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mask: {
    // opacity: "100%",
    zIndex: "1",
    display: "block",

    /* Set up proportionate scaling */
    width: "100%",
    height: "auto",

    position: "fixed",
    top: "0",
    bottom: "0",
  },

  container: {
    width: "400px",
    height: "250px",
    margin: "10px",
    display: "flex",
  },

  logo: {
    width: "70%",
    display: "flex",
    justifyContent: "center",
  },

  label: {
    width: "30%",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    margin: "8%",
  },

  svg: {
    margin: "2px",
    padding: "3px",
    maxWidth: "100%",
    maxHeight: "100%",
  },

  overlay: {
    zIndex: "2 ",
    position: "absolute",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    // height: "100%",
  },
});

export default useStyles;
