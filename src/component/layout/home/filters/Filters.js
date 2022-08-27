import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import useStyle from "./style";
import { Icon } from "react-icons-kit";
import { search } from "react-icons-kit/fa/search";
import axios from "axios";
import { connect } from "react-redux";
import { actionFilter } from "../../../../store/action";

const Filters = (props) => {
  const classes = useStyle();
  const [filter, setFilter] = useState();

  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        type="search"
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      <button
        className={classes.button}
        onClick={() => {
          props.actionFilter(filter)
        }}
      >
        <Icon icon={search}></Icon>
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps,{actionFilter})(Filters);
