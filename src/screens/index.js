import { Navigation } from 'react-native-navigation'

import { tab1First } from '../modules/tab1/tab1FirstScreen'
import { tab2First } from '../modules/tab2/tab2FirstScreen'

export function registerScreens(store, Provider) {
  Navigation.registerComponent('navigation.FirstTabScreen', () => tab1First, store, Provider);
  Navigation.registerComponent('navigation.SecondTabScreen', () => tab2First, store, Provider);
  Navigation.registerComponent('navigation.ThirdTabScreen', () => tab2First, store, Provider);
}