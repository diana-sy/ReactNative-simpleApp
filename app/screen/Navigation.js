
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import LogIn from './LogIn';
import Movie from './Movie';

const {Navigator, Screen} = createNativeStackNavigator();

const Navigation = ()=> (
    <NavigationContainer>
      <Navigator  headerMode ="none" initialRouteName ="Home">
        <Screen name="Home" component={Home} />
         <Screen name ="Login" component ={LogIn} />
        <Screen name="Movie" component={Movie} /> 
      </Navigator>
    </NavigationContainer>
  );


export default Navigation;