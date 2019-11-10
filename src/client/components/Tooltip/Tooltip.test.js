import React from 'react';
import { shallow } from 'enzyme';
import Tooltip from './Tooltip';

describe('Tooltip', () => {
  it('renders without crashing', () => {
    shallow(<Tooltip />);
  });

  it('should add in children', () => {
    const Child = <div>Child</div>;
    const wrapper = shallow(<Tooltip>{Child}</Tooltip>);
    
    expect(wrapper.contains(Child)).toEqual(true);
  });

  it('should set tooltip attribute', () => {
    const Child = <div>Child</div>;
    const content = 'something';
    const wrapper = shallow(<Tooltip content={content}>{Child}</Tooltip>);
    
    expect(wrapper.html().includes(`data-content="${content}"`)).toEqual(true);
  });
})