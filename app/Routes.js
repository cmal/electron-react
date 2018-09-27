/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
// import CounterPage from './containers/CounterPage';
// import TypingPage from './containers/TypingPage';
// import HistoryPage from './containers/HistoryPage';
// import SettingPage from './containers/SettingPage';
// import ProfilePage from './containers/ProfilePage';
// import RankPage from './containers/RankPage';

export default () => (
  <App>
    <Switch>
      {/* <Route path={routes.COUNTER} exact component={CounterPage} /> */}
      <Route path={routes.HOME} exact component={HomePage} />
      {/* <Route path={routes.TYPING} exact component={TypingPage} /> */}
      {/* <Route path={routes.HISTORY} exact component={HistoryPage} /> */}
      {/* <Route path={routes.SETTING} exact component={SettingPage} /> */}
      {/* <Route path={routes.RANK} exact component={RankPage} /> */}
      {/* <Route path={routes.PROFILE} exact component={ProfilePage} /> */}
    </Switch>
  </App>
);
