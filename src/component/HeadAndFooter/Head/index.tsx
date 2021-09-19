import React, {useEffect, useState} from "react";
import logo from '/images/public/logo.png';
import {connect} from "react-redux";
import {Menu} from "antd";
import './head.less';

const {SubMenu} = Menu;

function Head(props) {
  const {global, dispatch} = props;
  const [scrollTop, setScrollTop] = useState(false);
  const {activeMenu} = global;
  useEffect(() => {
    changeActiveMenu(props.history?.location?.pathname);
    window.onscroll = () => {
      const newScrollTop = document.documentElement.scrollTop;
      setScrollTop(newScrollTop > 0);
    }
  }, []);

  function changeActiveMenu(newMenu: string) {
    dispatch({
      type: 'global/changeActiveMenu',
      payload: {
        activeMenu: newMenu,
      },
    });
  }

  const handleClick = (e) => {
    changeActiveMenu(e.key);
    props.history.push(e.key);
  }
  const style1 = {
    backgroundColor: 'rgba(1,99,175,1)',
  };
  const style2 = {
    backgroundColor: 'transparent',
  }
  const thisStyle = scrollTop ? style1 : style2;
  return (
      <div className={'zy_public_head'}
           style={thisStyle}
      >
        <div className={'content'}>
          <div>
            <img src={logo} alt="logo"/>
          </div>
          <div>
            <Menu onClick={handleClick} selectedKeys={[activeMenu]} mode="horizontal">
              <Menu.Item key={'/Home'}>
                首页
              </Menu.Item>
              <SubMenu key={'/Product'} title={'产品中心'}>
                <Menu.Item key="/Product/zhongtai">
                  知用中台
                </Menu.Item>
                <Menu.Item key="/Product/ocr">
                  OCR
                </Menu.Item>
                <Menu.Item key="/Product/xhxyjcpt">
                  智慧校园基础平台
                </Menu.Item>
                <Menu.Item key="/Product/xsgzzhglpt">
                  学生工作综合管理平台
                </Menu.Item>
                <Menu.Item key="/Product/yzsfwpt">
                  一站式服务平台
                </Menu.Item>
                <Menu.Item key="/Product/jxzgpt">
                  教学诊改平台
                </Menu.Item>
                <Menu.Item key="/Product/zhyrpt">
                  智能育人平台
                </Menu.Item>
                <Menu.Item key="/Product/zhxqfxpt">
                  综合校情分析平台
                </Menu.Item>
              </SubMenu>
              <Menu.Item key={'/Solutions'}>
                解决方案
              </Menu.Item>
              <Menu.Item key={'/Service'}>
                服务体系
              </Menu.Item>
              <Menu.Item key={'/Cases'}>
                典型案例
              </Menu.Item>
              <Menu.Item key={'/News'}>
                新闻中心
              </Menu.Item>
              <Menu.Item key={'/About'}>
                关于知用
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </div>
  );
}

export default connect(({global}) => {
  return {
    global
  };
})(Head);
