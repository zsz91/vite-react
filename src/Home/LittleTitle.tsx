import React from 'react';

export default function LittleTitle(props){
    const { name = '中台技术应用产品中心' } = props;
    return (
        <div className={'littleTitle'}>
            <div className={'littleTitle-line'}></div>
            <div>{name}</div>
            <div className={'littleTitle-line'}></div>
        </div>
    )
}
