import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles({
  container: {
    marginTop: "30px",
    width: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "35px",
    boxShadow: "inset 1px 1px 10px #aaa",
  },
  content: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  paginatin: {
    marginTop: "30px",
  },
  post: {
    width: "30%",
    padding: "25px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    margin: "20px auto",
    boxShadow: "5px 5px 10px 5px #c6c6c6,-5px -5px 10px 5px #f2f2f2",
  },
  h3: {
    color: "#1C3879",
    marginBottom: "15px",
    fontWeight: "bold",
    fontSize:"18px"
  },
  buttonEdit: {
    padding: "5px 10px",
    border:"none",
    borderBottom:"1px solid #0078AA",
    background: "none",
    width: "fit-content",
    marginTop: "10px",
    fontWeight: "bold",
    color: "#0078AA",
    cursor: "pointer",
    transition: "0.5s",
    "&:hover": {
      background: "#0078AA",
      color: "#ccc",
      borderRadius:"5px"
    },
  },
});
export default useStyle;
