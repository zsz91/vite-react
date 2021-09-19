import React from 'react';
const modules = import.meta.globEager("./jiejuefangan/*.png");
const images = Object.keys(modules).map((x) => modules[x].default);

const imagesList = [
    {
        name: '政府',
        src: images[0],
    },
    {
        name: '军工',
        src: images[1],
    },
    {
        name: '教育',
        src: images[2],
    },
];

export default function JieJueFangAn(props){

    return (
        <div className={'JieJueFangAn'}>
            {
                imagesList.map((x) => {
                    return (<div key={x.name}
                                 className={'jieJueFangAn_bgDiv'}
                                 style={{backgroundImage: `url(${x.src})`}}>
                        <div className={'jieJueFangAn_DetailDiv'}>
                            <p>{x.name}</p>
                            <p>____</p>
                        </div>
                    </div>)
                })
            }
        </div>
    )
}
