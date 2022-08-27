import React from "react";
import { connect } from "react-redux";
import useStyle from "./style";

const Header = (props) => {
  console.log(props);
  const classes = useStyle();
  return (
    <div className={classes.header}>
      <div>
        <h3>{props.LengthPostReducer} <span style={{fontSize:"14px"}}>post found</span></h3>
      </div>
      <div className={classes.userInfo}>
        <div className={classes.userName}>
          <h4 style={{fontSize:"18px"}}>{props.UserReducer.name}</h4>
          <h4  style={{fontSize:"18px"}}>{props.UserReducer.email}</h4>
        </div>
        <img
          className={classes.image}
          src="/images/kisspng.png"
        ></img>
      </div>
    </div>
  );
};

const mapStateToProps=(state)=>{
  return state
}

export default connect(mapStateToProps)(Header);
