import { getStorybookUI, configure } from '@storybook/react-native';

configure(() => {
  require('./stories/base');
  require('./stories/module');
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

export default StorybookUIRoot;
