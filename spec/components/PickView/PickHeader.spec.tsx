import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';

import { PickHeader } from '../../../src/components/PickView/PickHeader';

describe('<PickHeader />', () => {
  let hamburgerListener: jasmine.Spy;
  let wrapper: ShallowWrapper<any, any>;

  beforeEach(() => {
    hamburgerListener = jasmine.createSpy('hamburgerListener');
    wrapper = shallow(<PickHeader onHamburgerClick={hamburgerListener} />);
  });

  it('renders a hamburger menu', () => {
    const hamburgerMenu = wrapper.find('.hamburger-menu').first();
    expect(hamburgerMenu).toBeDefined();
  });

  it('renders header text', () => {
    const headerText = wrapper.find('.header-text').first();
    expect(headerText).toBeDefined();
  });

  it('toggles the restaurant list view', () => {
    const hamburgerMenu = wrapper.find('.hamburger-menu').first();
    hamburgerMenu.simulate('click', undefined);

    expect(hamburgerListener).toHaveBeenCalled();
  });
});
