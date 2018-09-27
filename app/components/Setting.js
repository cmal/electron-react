// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styles from './Setting.css';
// import routes from '../constants/routes.json';
import type { SettingState } from '../reducers/types';
import { settingState } from '../reducers/types';

export default class Setting extends Component<SettingState> {
  props: SettingState;

  constructor(props: SettingState) {
    super(props);
    this.state = settingState;
  }

  render() {
    console.log(styles);
    const { text } = this.props;
    return <div>{text}</div>;
  }
}
