import React from 'react';
import {connect} from "react-redux"
import { Button } from 'antd';
function Head(props) {
    const { state, dispatch } = props;
    const addState = () => {
        dispatch({
            type: 'increment',
            number: 1,
        })
    };
    return (<div>
        redux-state : {state}
        <Button onClick={addState}>state + 1 </Button>
    </div>)
}


export default connect((state) => {
    return {
        state
    };
})(Head);
