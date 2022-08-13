import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  appBar: {
    // background:
    //   "linear-gradient(145deg, rgba(242,252,254,1) 0%, rgba(28,146,210,1) 100%)",
  },

  icon: {
    color: "rgba(248, 249, 249, 1)",
  },

  stack: { background: "transparent" },
  toolbar: { background: "transparent" },

  stackRight: {
    marginLeft: "auto",
    paddingRight: "15px",
    background: "transparent",
  },
  toolbarRight: { marginLeft: "auto", background: "transparent" },

  opacity: {
    opacity: "100% !important",
  },
});

export default useStyles;
