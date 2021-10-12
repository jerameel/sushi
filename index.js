import Config from 'react-native-config';
import { AppRegistry, LogBox } from 'react-native';
import App from './src/App';
import Storybook from './storybook';
import { name as appName } from './app.json';

LogBox.ignoreAllLogs(true);

const Main = Number(Config.STORYBOOK) ? Storybook : App;

AppRegistry.registerComponent(appName, () => Main);
