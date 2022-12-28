import React from 'react';
import { getStorybookUI, configure } from '@storybook/react-native';
import SplashScreen from 'react-native-splash-screen';

configure(() => {
  require('./stories/base');
  require('./stories/module');
}, module);

const StorybookUI = getStorybookUI({
  asyncStorage: null,
});

// export default StorybookUIRoot;

export default (() => {
  SplashScreen.hide();
  return StorybookUI;
})();
