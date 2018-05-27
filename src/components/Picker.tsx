import * as React from 'react';

import { RestaurantListView } from './RestaurantListView';
import { ResultView } from './ResultView';
import { PickView } from './PickView';

export interface PickerProps {
}

export const Picker = (props: PickerProps) => {
  return <div>
    <PickView />
    <RestaurantListView />
    <ResultView />
  </div>;
};
