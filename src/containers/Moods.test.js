import React from 'react';
import { shallow } from 'enzyme';
import Moods from './Moods';

describe('Moods', () => {
  describe.skip('container', () => {
    it('matches a snapshot', () => {
      const wrapper = shallow(<Moods />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
