import React from 'react';
import { shallow } from 'enzyme';
import { useFetch } from '../../state/useFetch';
import Loading from '../Loading/Loading';
import GridItem from '../Grid/GridItem';
import Grid from '../Grid/Grid';
import HorizontalList from '../List/HorizontalList';
import SoldProperties from './SoldProperties';

jest.mock('../../state/useFetch', () => ({
  useFetch: jest.fn(),
}));

describe('Tooltip', () => {
  let data;
  let loading;
  let failed;
  beforeEach(() => {
    data = [];
    loading = true;
    failed = false;
    useFetch.mockImplementation(() => {
      return [data, loading, failed];
    });
  });
  
  it('renders without crashing', () => {
    shallow(<SoldProperties />);
  });

  it('renders menu guide', () => {
    const wrapper = shallow(<SoldProperties />);

    const list = wrapper.find(HorizontalList);
    expect(list).toHaveLength(1);
    expect(list.html()).toMatchSnapshot();
  });

  it('shows loading while fetching', () => {
    const wrapper = shallow(<SoldProperties />);

    expect(wrapper.contains(<Loading />)).toEqual(true);
  });

  it('shows error if useFetch fails', () => {
    loading = false;
    failed = true;
    const wrapper = shallow(<SoldProperties />);
    
    expect(wrapper.html().includes("Failed to fetch data")).toEqual(true);
  });

  it('correctly renders total items', () => {
    loading = false;
    const records = [{
      x: 11,
      y: 22,
      price: 100000
    }];

    data = { 
      records,
      metadata: {
        totalCount: records.length
      } 
    };
    const wrapper = shallow(<SoldProperties />);

    expect(wrapper.find('[role="contentinfo"]').html()).toMatchSnapshot();
  });

  it('correctly renders item in grid', () => {
    loading = false;
    const records = [{
      x: 11,
      y: 22,
      price: 100000
    }, {
      x: 1,
      y: 2,
      price: 99999
    }];

    data = { 
      records,
      metadata: {
        totalCount: records.length
      } 
    };
    const wrapper = shallow(<SoldProperties />);
    
    expect(wrapper.find(GridItem).length).toEqual(records.length);
    expect(wrapper.find(Grid).html()).toMatchSnapshot();
  });
});