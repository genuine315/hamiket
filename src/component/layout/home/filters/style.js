import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  container: {
    marginTop: "20px",
    width: "fit-content",
    padding: "10px 50px",
    boxShadow: "5px 5px 10px 5px #c6c6c6,-5px -5px 10px 5px #f2f2f2",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "200px",
    height: "40px",
    padding: "5px",
    border: "none",
    outline: "none",
    borderRadius: "5px",
    marginLeft: "5px",
  },
  button: {
    padding: "10px",
    height: "40px",
    border: "none",
    background: "#8FE3CF",
    color: "#002B5B",
    borderRadius: "5px",
  },
});
export default useStyle;
