import React from 'react';
import { shallow } from 'enzyme';
import { Moods } from './Moods';
import { Provider } from 'react-redux';
import store from '../store';

describe('Moods', () => {
  describe('container', () => {
    it('matches a snapshot', () => {
      const wrapper = shallow(<Provider store={store}><Moods /></Provider>).dive();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
