import React, { useState } from "react";
import useStyle from "./style";
import { actionUser } from "../../../store/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Login = (props) => {
  const classes = useStyle();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dataUser = {
    name,
    email,
  };

  const handleLogin = (e) => {
    props.actionUser(dataUser);
  };

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.divider}></div>
        <h1 style={{ color: "#277BC0", marginBottom: "20px" }}>LOGIN</h1>
        <form className={classes.form}>
          <label style={{ fontWeight: "bold" }}>Name</label>
          <input
            className={classes.input}
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <label style={{ fontWeight: "bold" }}>Email</label>
          <input
            className={classes.input}
            type={"email"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <label style={{ fontWeight: "bold" }}>Password</label>
          <input className={classes.input} type={"text"}></input>
          <Link to={"/home"}>
            <input
              onClick={handleLogin}
              type={"submit"}
              className={classes.button}
              value="LOGIN"
            />
          </Link>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { actionUser })(Login);
