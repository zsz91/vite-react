import React from 'react';
const modules = import.meta.globEager("./images/*.png");
const images = Object.keys(modules).map((x) => modules[x].default);


export default function ArticleList(props) {
    const ArticleList = [
        {
            img: images[0],
            title: '知用观点｜高职院校智慧校园整体规划思路',
            desc: '在中国的教育体系中，职业教育是支撑国家战略和地方经济社会发展的重要力…',
            date: '2020-09-05',
        },
        {
            img: images[1],
            title: '新学期新起点，知用教学资源制作服务，为高校优质课程建设保驾护航',
            desc: '2020年初，一场突如其来的新冠病毒疫情迅速席卷全球，各级学校的开学时间相继延后导致了许多问题',
            date: '2020-09-05',
        },
        {
            img: images[2],
            title: '高校应用系统升级只能推倒重建？“中台+智慧校园”解决方案来助力！',
            desc: '在中国的教育体系中，职业教育是支撑国家战略和地方经济社会发展的重要力…',
            date: '2020-09-05',
        },
        {
            img: images[3],
            title: '高校应用系统升级只能推倒重建？“中台+智慧校园”解决方案来助力！',
            desc: '在中国的教育体系中，职业教育是支撑国家战略和地方经济社会发展的重要力…',
            date: '2020-09-05',
        },
    ];

    return (
        <div style={{width: '100%', backgroundColor: '#F9FBFD'}}>
        <div className={'XinWenDongTai'}>
            {
                ArticleList.map((x) => {
                    return <div key={x.img} className={'XinWenDongTai_One'}>
                        <div className={'XinWenDongTai_One_img'}
                             style={{backgroundImage: `url(${x.img})`}}
                        >

                        </div>
                        <div className={'XinWenDongTai_One_info'}>
                            <h4>{x.title}</h4>
                            <p>{x.desc}</p>
                            <p>{x.date}</p>
                        </div>
                    </div>
                })
            }
        </div>
        </div>
    )

}
