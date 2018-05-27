import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';

import { PickHeader } from '../../src/components/PickView/PickHeader';
import { PickControl } from '../../src/components/PickView/PickControl';
import { PickView } from '../../src/components/PickView';

describe('<PickView />', () => {
  let wrapper: ShallowWrapper<any, any>;

  beforeEach(() => {
    wrapper = shallow(<PickView />);
  });

  it('it renders a header', () => {
    const containsHeader = wrapper.contains(<PickHeader />);
    expect(containsHeader).toBe(true);
  });

  it('it renders a pick control', () => {
    const containsPickControl = wrapper.contains(<PickControl />);
    expect(containsPickControl).toBe(true);
  });
});
