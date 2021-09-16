import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import { Router, Route, BrowserRouter, Switch } from 'react-router-dom';
// https://reactrouter.com/web/guides/quick-start 路由
import Head from './component/HeadAndFooter/Head/index';
import Footer from './component/HeadAndFooter/Footer/index';
import Home from './Home/index';
function App(props) {

  return (
      <Provider store={store}>
        <Fragment>
          <BrowserRouter>
            <div>
              <Head /> {/*公共头部*/}
                <Switch>
                    <Route exact
                           path="/home">
                        <Home />   {/* 首页 */}
                    </Route>
                </Switch>
                <Footer /> {/*公共尾部*/}
            </div>
          </BrowserRouter>
        </Fragment>
       </Provider>
  )
}

export default App
