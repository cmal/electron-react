// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styles from './History.css';
// import routes from '../constants/routes.json';
import type { HistoryState } from '../reducers/types';
import { historyState } from '../reducers/types';

export default class History extends Component<HistoryState> {
  props: HistoryState;

  constructor(props: HistoryState) {
    super(props);
    this.state = historyState;
  }

  render() {
    console.log(styles);
    const { text } = this.props;
    return <div>{text}</div>;
  }
}
