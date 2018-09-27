import typing from '../../app/reducers/typing';
import { LOAD_CLIPBOARD } from '../../app/actions/typing';

describe('reducers', () => {
  describe('typing', () => {
    it('should handle initial state', () => {
      expect(typing(undefined, {})).toMatchSnapshot();
    });

    it('should handle LOAD_CLIPBOARD', () => {
      expect(typing(1, { type: LOAD_CLIPBOARD })).toMatchSnapshot();
    });

    it('should handle unknown action type', () => {
      expect(typing(1, { type: 'unknown' })).toMatchSnapshot();
    });
  });
});
