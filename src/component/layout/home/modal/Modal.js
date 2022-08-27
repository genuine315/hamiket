import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import useStyle from "../style";
import Icon from "react-icons-kit";
import { checkmark } from "react-icons-kit/icomoon/checkmark";
import { cross } from "react-icons-kit/icomoon/cross";
import { connect } from "react-redux";
import { actionCloseModal } from "../../../../store/action";
import axios from "axios";

const ModalDiv = (props) => {
  const classes = useStyle();
  const [title, setTitle] = useState(props.DataReducer.title);
  const [text, setText] =  useState(props.DataReducer.body);


  const handleEdit = (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      userId: props.DataReducer.userId,
      id: props.DataReducer.id,
      title: title,
      body: text,
    });

    if (title && text) {
      axios
        .put(
          `https://jsonplaceholder.typicode.com/posts/${props.DataReducer.id}`,
          data
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      e.preventDefault();
      alert("please fill the form");
    }
  };

  const body = (
    <div className={classes.modal}>
      <form>
        <div className={classes.inputDiv}>
          <h3 className={classes.h3}>title:</h3>
          <input
            type="text"
            className={classes.input}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <h3 className={classes.h3}>text:</h3>
          <textarea
            rows={3}
            className={classes.input}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <button className={classes.recordButton} onClick={handleEdit}>
          <Icon icon={checkmark}></Icon>
        </button>
        <button
          className={classes.quitButton}
          onClick={() => {
            props.actionCloseModal();
          }}
        >
          <Icon icon={cross}></Icon>
        </button>
      </form>
    </div>
  );

  return (
    <>
      <Modal
        open={props.ModalReducer}
        onClose={() => {
          props.actionCloseModal();
        }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {body}
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  actionCloseModal,
})(ModalDiv);
