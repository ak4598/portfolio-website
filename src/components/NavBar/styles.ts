import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  appBar: {
    background:
      "linear-gradient(145deg, rgba(242,252,254,1) 0%, rgba(28,146,210,1) 100%)",
    boxShadow: "none",
    // background: "transparent",
    // opacity: "50%",
  },

  icon: {
    color: "white",
  },

  stack: { background: "transparent" },
  toolbar: { background: "transparent" },

  stackRight: { marginLeft: "auto", background: "transparent" },
  toolbarRight: { marginLeft: "auto", background: "transparent" },

  typography: {
    color: "white",
  },
});

export default useStyles;
