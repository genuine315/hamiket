import ModalDiv from "./modal/Modal";
import React from "react";
import Content from "./content/Content";
import Filters from "./filters/Filters";
import useStyle from "./style";

const Home = () => {
  const classes = useStyle();
 
  return (
    <div className={classes.container}>
      <ModalDiv/>
      <Filters />
      <Content />
    </div>
  );
};

export default Home
