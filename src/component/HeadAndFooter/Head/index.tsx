import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";

function Head(props) {
  const { name, dispatch } = props;
  console.log(name, "Head 重新render了");
  console.log(props);
  const addState = () => {
    dispatch({
      type: "test2/changeName",
      name: "我的老家就住在这个囤, 我是这个囤里土生土长的人",
    });
  };
  return (
    <div>
      redux-state 我是来自reducer的name: === {name}
      <Button onClick={addState}>123</Button>
    </div>
  );
}

export default connect(({ test2 }) => {
  return test2;
})(Head);
