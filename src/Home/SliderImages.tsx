import React from 'react';
import {Carousel, Button, Modal} from "antd";
const modules = import.meta.globEager("./slider/*.png");
const images = Object.keys(modules).map((x) => modules[x].default);

export default function SliderImages(props) {
    function onChange(a, b, c) {
        console.log(a, b, c);
    }

    const handleOnClick = () => {
        Modal.info({title: '敬请期待'});
    }

    return (
        <Carousel
            autoplay={true}
            // autoplay={false}
            effect="fade"
        >
            <div>
                <div
                    style={{
                        backgroundImage: `url(${images[0]})`, // 中台
                    }}
                    className={"sliderImages"}
                >
                    <div className={'content1'}>
                        <div className={'title1'}>助推中台技术架构 为核心战略的全面发展</div>
                        <div className={'title2'}>面向自然资源、工商、环保、水产等部门的产品级应用</div>
                        <div>
                            <Button type={'primary'}
                                    shape="round"
                                    size={'large'}
                                    style={{padding: '0 3rem'}}
                                    onClick={handleOnClick}
                            >
                                了解更多
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
             <div>
        <div
            style={{
              backgroundImage: `url(${images[1]})`, // 军事
            }}
            className={"sliderImages"}
        >
            <div className={'content2'}>
                <div className={'content2_title1'}>推动军队信息技术数字化的转型</div>
                <div className={'content2_title2'}>
                    <div>
                        <span>★</span>
                        基于中台技术架构
                        <span>★</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div>
        <div
            style={{
              backgroundImage: `url(${images[2]})`, // 教育
            }}
            className={"sliderImages"}
        >
            <div className={'content2'}>
                <div className={'content2_title1'}>助力国家信息化事业 为建设教育强国而奋斗</div>
                <div className={'content2_title2'}>
                        便捷高效 智慧决策 全场景一站式服务
                </div>
            </div>
        </div>
      </div>

        </Carousel>
    );
}
