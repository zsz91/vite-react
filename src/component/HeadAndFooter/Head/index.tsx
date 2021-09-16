import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";

function Head(props) {
  const { name, dispatch } = props;
  const addState = () => {
    dispatch({
      type: "test2/changeName",
      payload: {
        name: "我的老家就住在这个囤, 我是这个囤里土生土长的人"
      },
    });
  };
  const addState2 = () => {
    dispatch({
      type: "test2/changeName2",
      payload: new Promise((resolve, reject) => {
        setTimeout(()=>{
          resolve({
            name: '我resolve后的值会到reducer中的action中',
          });
        }, 500);
      }),
    });
  };
  return (
    <div>
      redux-state 我是来自reducer的name: === {name}
      <Button onClick={addState}>123</Button>
      <Button onClick={addState2}>456</Button>
    </div>
  );
}

export default connect(({ test2 }) => {
  return test2;
})(Head);
