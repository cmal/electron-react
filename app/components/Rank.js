// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styles from './Rank.css';
// import routes from '../constants/routes.json';
import type { RankState } from '../reducers/types';
import { rankState } from '../reducers/types';

export default class Rank extends Component<RankState> {
  props: RankState;

  constructor(props: RankState) {
    super(props);
    this.state = rankState;
  }

  render() {
    console.log(styles);
    const { text } = this.props;
    return <div>{text}</div>;
  }
}
