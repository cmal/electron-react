// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import routes from '../constants/routes.json';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './Home.css';
import Typing from '../containers/TypingPage';
import History from '../containers/HistoryPage';
import Setting from '../containers/SettingPage';
import Rank from '../containers/RankPage';
import Profile from '../containers/ProfilePage';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  state = { value: 0 };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div className={styles.container} data-tid="container">
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="Typing" />
          <Tab label="History" />
          <Tab label="Setting" />
          <Tab label="Rank" />
          <Tab label="Profile" />
        </Tabs>
        {/* <h2>Home</h2> */}
        {/* <Link to={routes.COUNTER}>to Counter</Link> */}
        {/* <Link to={routes.TYPING}>to Typing</Link> */}
        {/* <Link to={routes.HISTORY}>to History</Link> */}
        {/* <Link to={routes.SETTING}>to Setting</Link> */}
        {/* <Link to={routes.RANK}>to Rank</Link> */}
        {/* <Link to={routes.PROFILE}>to Profile</Link> */}
        {value === 0 && <Typing />}
        {value === 1 && <History />}
        {value === 2 && <Setting />}
        {value === 3 && <Rank />}
        {value === 4 && <Profile />}
      </div>
    );
  }
}
