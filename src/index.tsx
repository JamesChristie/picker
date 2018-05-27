import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Picker } from './components/Picker';

ReactDOM.render(
  <Picker />,
  document.getElementById('picker')
);
