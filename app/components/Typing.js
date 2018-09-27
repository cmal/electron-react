// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import styles from './Typing.css';
// import routes from '../constants/routes.json';
import type { TypingState } from '../reducers/types';
import { typingState } from '../reducers/types';

export default class Typing extends Component<TypingState> {
  props: TypingState;

  constructor(props: TypingState) {
    super(props);

    this.state = typingState;

    this.handleChange = event => {
      console.log('change');
      console.log(event.target.value);
      this.setState({
        typingText: event.target.value
      });
    };

    this.handleCompositionUpdate = event => {
      console.log('update');
      console.log(event.target.value);
    };

    this.handlComositionEnd = event => {
      console.log('end');
      console.log(event.target.value);
    };

    this.handleCompositionStart = event => {
      console.log('start');
      console.log(event.target.value);
    };

    this.handleKeyDown = event => {
      console.log(event);
    };
  }

  state: TypingState = typingState;

  // getInitialState = () => typingState;

  render() {
    const { typing, loadClipboard } = this.props;
    const { text, typingText } = this.state;
    return (
      <div className={styles.typing}>
        <TextField
          id="typing-text"
          label=""
          style={{ margin: 8 }}
          placeholder=""
          helperText=""
          fullWidth
          disabled
          multiline
          margin="normal"
          value={typing.text}
          text={text}
          className={styles.typingOriginText}
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <div className={styles.btnGroup}>
          <button
            className={styles.btn}
            onClick={loadClipboard}
            data-tclass="btn"
            type="button"
          >
            LOAD CLIPBOARD
          </button>
        </div>
        <TextField
          id="typing-text"
          label=""
          style={{ margin: 8 }}
          placeholder="xxx"
          helperText=""
          fullWidth
          multiline
          margin="normal"
          value={typing.typingText}
          typingText={typingText}
          className={styles.typingText}
          variant="outlined"
          onChange={this.handleChange}
          onCompositionUpdate={this.handleCompositionUpdate}
          onCompositionEnd={this.handleCompositionEnd}
          onCompositionStart={this.handleCompositionStart}
          onKeyDown={this.handleKeyDown}
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
    );
  }
}
