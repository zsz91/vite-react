import React from 'react';
import {connect} from "react-redux";


function Footer(props){
    const { info, dispatch } = props;
    console.log(info,'footer 重新render了');
    return <div>
        footer
        <div>
            我是来自reducer的 desc - info  {info}
        </div>
    </div>
}

export default connect((state) => {
    return {
        info: state.info,
    };
})(Footer);
