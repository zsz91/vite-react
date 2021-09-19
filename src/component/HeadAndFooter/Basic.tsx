import React from 'react';
import Head from "./Head";
import Footer from './Footer';
import  './basic.less';
export default function Basic(props){
    const { children, ...otherProps} = props;
    return(
        <div style={{position: 'relative'}}>
        <Head {...otherProps}/>
            <div className={'basic_content'}>
                {children}
            </div>
        <Footer {...otherProps}/>
        </div>
    )
}
