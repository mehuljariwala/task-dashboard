import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  rootSearch: {
    margin: "10px auto",
    background: "#d3d3d347",
    maxWidth: "250px",
    display: "flex",
    alignItems: "center",
    padding: "0px 12px",
    borderRadius: "30px",
    minHeight: "40px",
  },
  searchInput: {
    padding: "8px",
    border: "none",
    background: "transparent",
    outline: "none",
    fontSize: "14px",
  },
  accountList: {
    position: "absolute",
    width: "100%",
    bottom: "20px",
  },
  activeItem: {
    backgroundColor: "#f4f9ff !important",
    borderLeft: "3px solid #2e689c !important",
  },
}));

export default useStyles;
