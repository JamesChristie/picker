import * as React from 'react';
import * as ReactTestUtils from 'react-dom/test-utils';
import { shallow, ShallowWrapper } from 'enzyme';

import { Picker } from '../../src/components/Picker';
import { RestaurantListView } from '../../src/components/RestaurantListView';
import { ResultView } from '../../src/components/ResultView';
import { PickView } from '../../src/components/PickView';

describe('<Picker />', () => {
  let wrapper: ShallowWrapper<any, any>;

  beforeEach(() => {
    wrapper = shallow(<Picker />);
  });

  it('renders the pick view', () => {
    const containsPickView = wrapper.contains(<PickView />);
    expect(containsPickView).toBe(true);
  });

  it('it renders a restaurant list view', () => {
    const containsRestaurantListView = wrapper.contains(<RestaurantListView />);
    expect(containsRestaurantListView).toBe(true);
  });

  it('it renders a result view', () => {
    const containsResultView = wrapper.contains(<ResultView />);
    expect(containsResultView).toBe(true);
  });
});
