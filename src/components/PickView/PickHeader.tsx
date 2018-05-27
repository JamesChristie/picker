import * as React from 'react';

export interface PickHeaderProps {
  onHamburgerClick?: () => void;
}

export const PickHeader = (props: PickHeaderProps) => {
  return <div>
    <div className='hamburger-menu'
         onClick={props.onHamburgerClick} />
    <div className='header-text'>
      Pick a Restaurant
    </div>
  </div>;
};
