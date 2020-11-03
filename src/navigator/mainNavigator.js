import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps167377Navigator from '../features/Maps167377/navigator';
import Additem167376Navigator from '../features/Additem167376/navigator';
import Maps167372Navigator from '../features/Maps167372/navigator';
import UserProfile167368Navigator from '../features/UserProfile167368/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps167377: { screen: Maps167377Navigator },
Additem167376: { screen: Additem167376Navigator },
Maps167372: { screen: Maps167372Navigator },
UserProfile167368: { screen: UserProfile167368Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
