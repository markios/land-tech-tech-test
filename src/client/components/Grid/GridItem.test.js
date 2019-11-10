import React from 'react';
import { shallow } from 'enzyme';
import GridItem from './GridItem';

describe('GridItem', () => {
  it('renders without crashing', () => {
    shallow(<GridItem />);
  });

  it('should add in children', () => {
    const Child = <div>Child</div>;
    const wrapper = shallow(<GridItem>{Child}</GridItem>);
    
    expect(wrapper.contains(Child)).toEqual(true);
  });

  it('should set GridItem grid area', () => {
    const Child = <div>Child</div>;
    const x = 11;
    const y = 22;
    const wrapper = shallow(<GridItem x={x} y={y}>{Child}</GridItem>);
    expect(wrapper.html().includes(`grid-area:${x} / ${y}`)).toEqual(true);
  });
})