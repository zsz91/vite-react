import React, { useRef, useState } from 'react';
import './svgList.less';
import { Carousel } from "antd";

const modules = import.meta.globEager('./systemlist/*.svg');
const modules2 = import.meta.globEager("./systemlistImages/*.png");
const svgList = Object.keys(modules).map((x) => modules[x].default);
const imageList = Object.keys(modules2).map((x) => modules2[x].default);
const nameList = ['知用中台', '公文智能识别与对比 OCR系统', '智慧校园基础平台', '学生工作综合管理平台', '一站式服务平台', '智能育人平台', '综合校情分析平台'];

export default function TitleAndSliderImage(props){
    const list = [];
    const carouselRef = useRef();
    const [activeName, setActiveName] = useState('知用中台');
    console.debug(svgList);

    for(let i = 0; i < nameList.length; i++){
        list.push({
            src: svgList[i * 2],
            hoverSrc: svgList[(i * 2) + 1],
            name: nameList[i],
        });
    }

    function onChange(index) {
        const newName = list[index].name;
        if(newName !== activeName){
            setActiveName(list[index].name);
        }
        return true;
    }
    return (<><div className={'TitleAndSliderImage'}>
        <div className={'svgList'}>
            {
                list.map((x, index) => {
                    return <div key={x.src} className={'oneIcon'} onClick={()=>{
                        setActiveName(x.name);
                        carouselRef.current.goTo(index, true);
                    }}>
                        <img src={activeName === x.name ? x.hoverSrc : x.src}
                             alt={x.name}
                        />
                        <div className={'info'}
                             style={{color: activeName === x.name ? 'rgba(52,161,255,1)' : '#000'}}
                        >
                            {x.name}
                            {activeName === x.name && <div>________</div>}
                        </div>
                    </div>
                })
            }
        </div>
    </div>
            <div style={{backgroundColor:　"#F9FBFD"}}>
                <Carousel
                    afterChange={onChange}
                    autoplay={true}
                    ref={carouselRef}
                    // effect={"fade"}
                >
                    {
                        imageList.map((x, index) => {
                            return (
                                <div key={x}>
                                    <div className={"sliderImages2"} style={{backgroundImage: `url(${x})`}}>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>

    </>)
}
