import { spy } from 'sinon';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Typing from '../../app/components/Typing';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const actions = {
    loadClipboard: spy()
  };
  const component = shallow(
    <Typing typing={{ text: 'demo', typingText: '' }} {...actions} />
  );
  return {
    component,
    actions
  };
}

describe('Typing component', () => {
  it('should have initial state', () => {
    const { component } = setup();
    expect(component.find('.typingOriginText').at(0)).toHaveProperty(
      ['typing', 'text'],
      'demo'
    );
  });

  it('should display text', () => {
    const { component } = setup();
    expect(component.find('.typingOriginText textarea').at(0)).toHaveProperty(
      ['typing', 'text'],
      'demo'
    );
  });

  it('should display typingText', () => {
    const { component } = setup();
    expect(component.find('.typingText textarea').at(0)).toHaveProperty(
      ['typing', 'typingText'],
      ''
    );
  });

  it('should first button should call increment', () => {
    const { component, actions } = setup();
    component
      .find('button')
      .at(0)
      .simulate('click');
    expect(actions.loadClipboard.called).toBe(true);
  });

  it('should match exact snapshot', () => {
    const { actions } = setup();
    const typing = (
      <div>
        <Router>
          <Typing typing={{ text: 'demo', typingText: '' }} {...actions} />
        </Router>
      </div>
    );
    const tree = renderer.create(typing).toJSON();

    expect(tree).toMatchSnapshot();
  });

  // it('should second button should call decrement', () => {
  //   const { buttons, actions } = setup();
  //   buttons.at(1).simulate('click');
  //   expect(actions.decrement.called).toBe(true);
  // });

  // it('should third button should call incrementIfOdd', () => {
  //   const { buttons, actions } = setup();
  //   buttons.at(2).simulate('click');
  //   expect(actions.incrementIfOdd.called).toBe(true);
  // });

  // it('should fourth button should call incrementAsync', () => {
  //   const { buttons, actions } = setup();
  //   buttons.at(3).simulate('click');
  //   expect(actions.incrementAsync.called).toBe(true);
  // });
});
