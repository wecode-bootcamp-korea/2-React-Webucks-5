import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';

// // 김민재님 컴포넌트
// import LoginMinjaeKim from './pages/minjaekim/Login/Login';
// import ListMinjaeKim from './pages/minjaekim/List/List';
// import DetailMinjaeKim from './pages/minjaekim/Detail/Detail';

// // 이민재님 컴포넌트
// import LoginMinjaeLee from './pages/minjaelee/Login/Login';
// import ListMinjaeLee from './pages/minjaelee/List/List';
// import DetailMinjaeLee from './pages/minjaelee/Detail/Detail';

// // 이욱창님 컴포넌트
// import LoginWookChangLee from './pages/wookchanglee/Login/Login';
// import ListWookChangLee from './pages/wookchanglee/List/List';
// import DetailWookChangLee from './pages/wookchanglee/Detail/Detail';

// 이성재님 컴포넌트
import LoginSungJaeLee from './pages/sungjaelee/Login/Login';
import ListSungJaeLee from './pages/sungjaelee/List/List';
import DetailSungJaeLee from './pages/sungjaelee/Detail/Detail';

// // 김재원님 컴포넌트
// import LoginJaeWonKim from './pages/jaewonkim/Login/Login';
// import ListJaeWonKim from './pages/jaewonkim/List/List';
// import DetailJaeWonKim from './pages/jaewonkim/Detail/Detail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />

          {/* <Route exact path="/login-minjaekim" component={LoginMinjaeKim} />
          <Route exact path="/list-minjaekim" component={ListMinjaeKim} />
          <Route exact path="/detail-minjaekim" component={DetailMinjaeKim} />

          <Route exact path="/login-minjaelee" component={LoginMinjaeLee} />
          <Route exact path="/list-minjaelee" component={ListMinjaeLee} />
          <Route exact path="/detail-minjaelee" component={DetailMinjaeLee} />

          <Route
            exact
            path="/login-wookchanglee"
            component={LoginWookChangLee}
          />
          <Route exact path="/list-wookchanglee" component={ListWookChangLee} />
          <Route
            exact
            path="/detail-wookchanglee"
            component={DetailWookChangLee}
          /> */}

          <Route exact path="/login-sungjaelee" component={LoginSungJaeLee} />
          <Route exact path="/list-sungjaelee" component={ListSungJaeLee} />
          <Route exact path="/detail-sungjaelee" component={DetailSungJaeLee} />
          {/* 
          <Route exact path="/login-jaewonkim" component={LoginJaeWonKim} />
          <Route exact path="/list-jaewonkim" component={ListJaeWonKim} />
          <Route exact path="/detail-jaewonkim" component={DetailJaeWonKim} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
