import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mask: {
    background:
      "linear-gradient(145deg, rgba(218,248,255,1) 0%, rgba(152,209,240,1) 45%, rgba(69,134,208,1) 83%, rgba(32,100,194,1) 100%)",
    opacity: "75%",
    zIndex: "1",
    display: "block",

    /* Set up proportionate scaling */
    width: "100%",
    height: "auto",

    position: "fixed",
    top: "0",
    bottom: "0",
    // left: "0",
    // right: "0",
  },
  titleOverlay: {
    zIndex: "1",
    display: "block",
    width: "100%",
    position: "fixed",
    top: "0",
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
    bottom: "0",
    // left: "0",
  },

  introBox: {
    marginTop: "min(400px, 20%)",
    marginLeft: "15%",
  },
});

export default useStyles;
