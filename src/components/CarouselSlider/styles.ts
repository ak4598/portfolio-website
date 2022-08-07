import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  carousel: {
    overflowX: "hidden",
  },

  paper: {
    display: "flex",
    justifyContent: "center",
    width: "200px",
    height: "150px",
    margin: "10px",
  },

  svg: {
    margin: "2px",
    padding: "3px",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default useStyles;
