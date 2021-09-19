import React from 'react';
import {connect} from "react-redux";
import './footer.less';
import qrCode from '/images/footer/qrCode.png';
function Footer(props){
    return <div className='zy_footer'>
        <div className={'zy_footer_content'}>
            <div>
                <div className={'zy_footer_margin2rem'}>
                    智慧校园基础平台｜学生工作综合管理平台｜一站式服务平台｜教学诊改平台｜智能育人平台｜综合校情平台
                </div>
                <div className={'zy_footer_margin1rem'}>
                    成都市知用科技有限公司
                </div>
                <div className={'zy_footer_detailInfo'}>
                    <div>公司地址：成都市武侯区人民南路四段9号教育基地2号楼421室</div>
                    <div>联系电话：17780027730</div>
                    <div>招聘邮箱：hr@cdzhiyong.com</div>
                </div>
            </div>
            <div className={'zy_footer_rightQrCode'}>
                <img src={qrCode} alt="微信公众号"/>
                <div>微信公众号</div>
            </div>
        </div>
    </div>
}

export default connect((state) => {
    return {

    };
})(Footer);
