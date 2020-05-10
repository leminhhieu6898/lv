/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Home from './screens/MainTabScreen';
import Drawer from './screens/DrawerContent';
import test from './screens/test';
AppRegistry.registerComponent(appName, () => test);
