/**
 * 所有的路由
 * */
import Basic from "./HeadAndFooter/Basic";
import Product from "../Product/Product";
import Home from "../Home/Home";
import React from "react";
import { Route,Redirect } from 'react-router-dom';

const RouterList = (props) => (<Basic {...props}>
    <Route exact
           path="/Home"
           component={Home} /* 首页 */
    />
    <Route
           path="/Product/:id" // 产品中心
           component={Product}
    />
    <Redirect
              from="/"
              to={'/Home'}
              component={Home} /**  **/
    />
</Basic>);

export default RouterList;
