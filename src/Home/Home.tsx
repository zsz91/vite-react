import React from "react";
import "./style.less";
import SliderImages from './SliderImages';
import LittleTitle from "./LittleTitle";
import TitleAndSliderImage from "./TitleAndSliderImage/TitleAndSliderImage";
import JieJueFangAn from "./JieJueFangAn";
import ArticleList from "./ArticleList/ArticleList";

export default function Home(props) {
    console.log(props);
    const { history } = props;
    const goTo = () => {
        history.push({
            pathname: '/Product',
        });
    }

  return (
    <div className={"divHome"}>
        <div className={'sliderImages'} data-info={'轮播图'}>
            <SliderImages history={props.history}/>
        </div>
        <div>
           <LittleTitle name={'中台技术应用产品中心'}/>
            <TitleAndSliderImage />
        </div>
        <div>
            <LittleTitle name={'解决方案'}/>
            <JieJueFangAn />
        </div>
        <div>
            <LittleTitle name={'新闻动态'}/>
            <ArticleList />
        </div>
    </div>
  );
}
