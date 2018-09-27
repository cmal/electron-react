// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styles from './Profile.css';
// import routes from '../constants/routes.json';
import type { ProfileState } from '../reducers/types';
import { profileState } from '../reducers/types';

export default class Profile extends Component<ProfileState> {
  props: ProfileState;

  constructor(props: ProfileState) {
    super(props);
    this.state = profileState;
  }

  render() {
    console.log(styles);
    const { text } = this.props;
    return <div>{text}</div>;
  }
}
