import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  container: {
    width: "100%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "400px",
    background: "#eee",
    padding: "15px",
    boxShadow: "0 5px 10px 5px #333",
    borderRadius: "5px",
  },
  recordButton: {
    padding: "7px 10px",
    border: "none",
    borderRadius: "5px",
    background: "#3FA796",
    margin: "20px 5px 0 0",
    fontWeight: "bold",
    fontSize: "18px",
    cursor: "pointer",
    transition: "0.5s",
    "&:hover": {
      boxShadow: "0 5px 10px 5px #aaa",
    },
  },
  quitButton: {
    padding: "7px 10px",
    border: "none",
    borderRadius: "5px",
    background: "#FF1E00",
    margin: "20px 0 0 5px",
    fontWeight: "bold",
    fontSize: "18px",
    cursor: "pointer",
    transition: "0.5s",
    "&:hover": {
      boxShadow: "0 5px 10px 5px #aaa",
    },
  },
  inputDiv: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
      padding:"10px 10px 3px",
      fontSize:"18px",
      border:"none",
      borderBottom:"1px solid #aaa",
      marginBottom:"10px",
      background:"none",
      resize:"none",
      "&:focus":{
          outline:"none"
      }
  },
  h3:{
      margin:"0",

  }
});
export default useStyle;
