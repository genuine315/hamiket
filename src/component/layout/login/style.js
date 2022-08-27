import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "350px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    boxShadow: "5px 5px 10px 5px #c6c6c6,-5px -5px 10px 5px #f2f2f2",
    padding: "20px",
  },
  divider: {
    width: "35%",
    height: "3px",
    background: "#277BC0",
    borderRadius: "50px",
    marginBottom: "30px",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    background: "none",
    border: "none",
    outline: "none",
    borderBottom: "1px solid #aaa",
    marginBottom: "10px",
  },
  button: {
    width: "50%",
    padding: "5px 10px",
    background: "#277BC0",
    borderRadius: "5px",
    color: "#002B5B",
    cursor: "pointer",
    margin: "20px auto 10px",
    border: "none",
    fontWeight: "bold",
    fontSize: "22px",
    transition: "0.3s",
    "&:hover": {
      background: "#2f8fde",
    },
  },
});
export default useStyle;
