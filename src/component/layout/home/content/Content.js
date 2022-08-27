import React, { useEffect, useState } from "react";
import useStyle from "./style";
import PaginatinBox from "./pagination/PaginatinBox";
import axios from "axios";
import { actionOpenModal } from "../../../../store/action";
import { connect } from "react-redux";
import { actionLengthPosts } from "../../../../store/action";
import { actionData } from "../../../../store/action";

const Content = (props) => {
  const classes = useStyle();
  console.log(props);
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState([]);
  const [numberPage, setNumberPage] = useState(1);

  const handlePageClick = (data) => {
    const currentPage = data.selected + 1;
    setNumberPage(currentPage);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const data = response.data;
        setPosts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=${numberPage}&_limit=10`
      )
      .then((response) => {
        const data = response.data;
        setContent(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [numberPage]);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?title_like=${props.FilterReducer}`
      )
      .then((response) => {
        const data = response.data;
        if (props.FilterReducer == null) {
          return;
        } else {
          setContent(data);
          setPosts(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.FilterReducer]);

  useEffect(() => {
    props.actionLengthPosts(posts.length);
  }, [posts]);
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {content.map((item, index) => {
          return (
            <div className={classes.post} key={index}>
              <h3 className={classes.h3}>{item.title}</h3>
              <p>{item.body}</p>
              <button
                className={classes.buttonEdit}
                onClick={() => {
                  props.actionOpenModal();
                  props.actionData(item);
                }}
              >
                EDIT
              </button>
            </div>
          );
        })}
      </div>
      <div className={classes.paginatin}>
        <PaginatinBox handlePageClick={handlePageClick} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  actionOpenModal,
  actionData,
  actionLengthPosts,
})(Content);
