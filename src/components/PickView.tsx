import * as React from 'react';
import { PickControl } from './PickView/PickControl';
import { PickHeader } from './PickView/PickHeader';

export const PickView = () => {
  return <div>
    <PickHeader />
    <PickControl />
  </div>;
};
