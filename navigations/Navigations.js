import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Detail from '../screens/Detail';

const screens = {
    Home:{screen:Home},
    Detail:{screen:Detail}
}
const stackNavigationsOptions={
    headerShown:false
}
 const AppNavigator = createStackNavigator(screens,{defaultNavigationOptions:stackNavigationsOptions});

 export default createAppContainer(AppNavigator);