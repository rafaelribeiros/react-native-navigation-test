import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { iconsLoaded, iconsMap } from './utils/appIcons'
import { registerScreens } from './screens';
import { createStore } from './config/redux';

const store = createStore();

registerScreens(store, Provider);

const navigatorStyle = {
  statusBarColor: '#831d19',
  // navigationBarColor: '#339999',
  navBarBackgroundColor: '#339999',
  navBarTextColor: '#ffffff',
  navBarButtonColor: '#ffffff',
  statusBarTextColorScheme: 'light',
  tabBarButtonColor: 'white',
  tabBarSelectedButtonColor: 'white',
  tabBarBackgroundColor: '#339999',
};

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'navigation.FirstTabScreen',
      title: 'Hello World',
      icon: require('./img/search.png'),
      selectedIcon: require('./img/search.png'),
      navigatorStyle
    },
    {
      label: 'Two',
      screen: 'navigation.SecondTabScreen',
      title: 'Test Title 2',
      icon: require('./img/search.png'),
      selectedIcon: require('./img/search.png'),
      navigatorStyle
    },
    {
      label: 'Three',
      screen: 'navigation.ThirdTabScreen',
      title: 'Test Title 3 World',
      icon: require('./img/search.png'),
      selectedIcon: require('./img/search.png'),
      navigatorStyle
    },
  ],
});

// export class App extends Component {
//   constructor(props) {
//     super(props);
//     iconsLoaded.then(() => {
//       console.log('passou')
// 			this.startApp()
// 		});
//   }

//   startApp() {
//   Navigation.startTabBasedApp({
//     tabs: [
//       {
//         label: 'One',
//         screen: 'navigation.FirstTabScreen',
//         title: 'Hello World',
//         icon: require('./img/search.png'),
//         selectedIcon: require('./img/search.png'),
//         // navigatorStyle
//       },
//       {
//         label: 'One',
//         screen: 'navigation.FirstTabScreen',
//         title: 'Hello World',
//         icon: require('./img/search.png'),
//         selectedIcon: require('./img/search.png'),
//         // navigatorStyle
//       },
//       {
//         label: 'Two',
//         screen: 'navigation.SecondTabScreen',
//         title: 'Test Title 2',
//         icon: require('./img/search.png'),
//         selectedIcon: require('./img/search.png'),
//        // navigatorStyle
//       }
//     ],
//   });
//   }

// }
