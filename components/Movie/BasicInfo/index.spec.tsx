import React from 'react';
import { shallow } from 'enzyme';
import BasicInfo from './index';

describe('BasicInfo', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    const wrapper = shallow(
      <BasicInfo
        movie={{
          imdbID: '1234',
          poster: 'poster',
          title: 'Title',
          year: '2022',
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('title needs to be shorten when is bigger than 90 characters', () => {
    const wrapper = shallow(
      <BasicInfo
        movie={{
          imdbID: '1234',
          poster: 'poster',
          title:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulput',
          year: '2022',
        }}
      />
    );
    expect(wrapper.find('p').at(0).text()).toBe(
      'LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT. NULLAM FEUGIAT, TURPIS AT PULVIN...'
    );
  });
});
