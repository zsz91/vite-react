import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import { Router, Route, BrowserRouter, Switch, HashRouter, Redirect } from 'react-router-dom';
// https://reactrouter.com/web/guides/quick-start 路由
import 'antd/dist/antd.css';
import RouterList from "./component/Router";

function App(props) {
  return (
      <Provider store={store}>
          <HashRouter>
                <Switch>
                    <Route path={'/'} component={RouterList}/>
                </Switch>
          </HashRouter>
       </Provider>
  )
}

export default App
