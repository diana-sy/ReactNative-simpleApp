import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import Navigation from './app/screen/Navigation';



 const App = ()=> {
   return(
     <PaperProvider>
       <Navigation />
     </PaperProvider>
   );
 };

 export default App;





// function App() {
//   return (
//     <NavigationContainer>
//       <Navigator headerMode="none">
//         <Screen name="Home" component={Home} ></Screen>
//       </Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// export default class App extends React.Component{
 
//   constructor(props) {
//     super(props);
//     this.state ={
//       isLoading: true,
//       dataSource: null,
//     }
//   }
//   componentDidMount() {
//     return fetch('https://reactnative.dev/movies.json')
//     .then ((response)=> response.json())
//     .then ((responseJSON)=> {
//       this.setState({
//         isLoading: false,
//         dataSource: responseJSON.movies,
//       })
//     })
//     .catch((error)=> {
//       console.log(error);
//     })
//   }
//   render(){
//     if (this.state.isLoading) {
//       return(
//         <View styles={styles.container}>
//           <ActivityIndicator />
//         </View>
//       )
//     } else{
//        let list = this.state.dataSource.map((val,key)=> {
//          return <View key={key} style = {styles.item}>
//            <View style={styles.button1}>
//            <Button style={styles.title}
//              title={val.title} 
//              onPress={() => Alert.alert('Nice choice!')}
//              />
//            {/* <Text>Year of release: {val.releaseYear} </Text> */}
//            </View>
//            </View>
//        });
//        return(
//         <ImageBackground 
//         style={styles.background}
//        source={require('./app/assets/background.jpg')}>
//     <SafeAreaView
//     style={styles.logoContainer}>
//     <Image resizeMode="contain" style={styles.logo} source={require('./app/assets/logo.png')}/>
//     <Text style={styles.slogan}>Find your perfect movie!</Text>
  
//   </SafeAreaView>
   
//         <View style={styles.list}>
//           {list}
//         </View>
//         <View style= {styles.button2} >
//         <Button style={styles.button2} 
//       color= "#F9E79F"
//       title ={"Log in"}
//       onPress={() => Alert.alert('Log in pressed')} />
//       </View>
//       </ImageBackground>
//        );
      
//     }
// }
// };
// const styles = StyleSheet.create({
//   background:{
//     flex:1,
//     justifyContent: 'flex-end', 
    
// },
// logoContainer:{
//     position:'absolute',
//     top: 30,    
// },
// logo:{
//     width:90,
//     height:90,
    
// },
// slogan:{
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize:20,

// },
// list:{
//   flex:1,
//   justifyContent: 'center',
// },
// text:{
//   flexDirection: 'row',
// },
// title:{
//   color:'red',
 
// },
// button2:{
//   width:'100%',
//   height:70,
//   backgroundColor: '#808B96',
//  justifyContent: 'center',

// },

// });
