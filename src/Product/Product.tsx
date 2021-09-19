import React from 'react';

export default function (props){
    console.log(props);
    return(<div>我是产品中心{props.match?.params?.id}</div>)
}
