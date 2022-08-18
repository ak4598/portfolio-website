import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mask: {
    background:
      "linear-gradient(145deg, rgba(218,248,255,1) 0%, rgba(152,209,240,1) 45%, rgba(69,134,208,1) 83%, rgba(32,100,194,1) 100%)",
    opacity: "40%",
    zIndex: "1",
    display: "block",

    width: "100%",
    height: "100%",

    position: "absolute",
    top: "0",
    bottom: "0",
  },
  mask404: {
    background:
      "linear-gradient(145deg, rgba(246,144,147,1) 0%, rgba(247,226,239,1) 100%)",
    opacity: "100%",
    zIndex: "1",
    display: "block",

    width: "100%",
    height: "auto",

    position: "absolute",
    top: "0",
    bottom: "0",
  },
  titleOverlay: {
    zIndex: "2",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    width: "70%",
    height: "70%",

    marginLeft: "15%",
  },
  image: {
    objectFit: "cover",

    minHeight: "min(100%, 1024px)",
    minWidth: "min(100%, 1024px)",

    width: "100%",
    height: "100%",

    position: "absolute",
    top: "0",
    bottom: "0",
  },
});

export default useStyles;
