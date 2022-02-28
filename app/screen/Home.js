import React from 'react';
import { ImageBackground,StyleSheet, Text, View,Image, Button, SafeAreaView, ActivityIndicator,Alert, } from 'react-native';
import {ScrollView} from 'react-native';


export default class Home extends React.Component{
 
    constructor(props) {
      super(props);
      this.state ={
        isLoading: true,
        dataSource: null,
      }
    }

   
    componentDidMount() {
      return fetch('https://reactnative.dev/movies.json')
      .then ((response)=> response.json())
      .then ((responseJSON)=> {
        this.setState({
          isLoading: false,
          dataSource: responseJSON.movies,
        })
      })
      .catch((error)=> {
        console.log(error);
      })
    }
    render(){
      if (this.state.isLoading) {
        return(
          <View styles={styles.container}>
            <ActivityIndicator />
          </View>
        )
      } else{
         let list = this.state.dataSource.map((val,key)=> {
           return <View key={key} style = {styles.item}>
             <View style={styles.button1}>
             <Button style={styles.title}
               color="white"
               title={val.title} 
               onPress={() =>this.props.navigation.navigate('Movie')}
               />
             {/* <Text>Year of release: {val.releaseYear} </Text> */}
             </View>
             </View>
         });
        
         return(
    
          <ImageBackground 
          style={styles.background}
         source={require('../assets/background.jpg')}>
           <View style={styles.container}>
      <SafeAreaView
      style={styles.logoContainer}>
        
      <Image resizeMode="contain" style={styles.logo} source={require('../assets/logo.png')}/>
    
    
    </SafeAreaView>
    <ScrollView>
          <View style={styles.list}>
            
            {list}
            {list}
            {list}
            {list}
            {list}
            {list}
           
          </View>
          </ScrollView>
          </View>
          <View style= {styles.button2} >
          <Button style={styles.button2} 
        color= "#F7A241"
        title ={"Log in"}
        onPress={() => this.props.navigation.navigate('Login')}
         />

        </View>
        </ImageBackground>
         );
        
      }
  }
  };
  const styles = StyleSheet.create({
    background:{
      flex:1,
      justifyContent: 'center', 
      
  },
  container:{
    flexDirection:'column',
    marginTop:20,
  },
  logoContainer:{
      position:'absolute',
      marginTop: 70,    
  },
  logo:{
      width:150,
      height:100,
      
  },
  slogan:{
      color: 'white',
      fontWeight: 'bold',
      fontSize:20,
  
  },
  list:{
    flex:1,
    justifyContent: 'center',
    marginTop:150,
  
  },
  text:{
    flexDirection: 'row',
  },
  title:{
    color:'red',
   
  },
  button2:{
    width:'100%',
    height:70,
    backgroundColor: '#173053',
    borderWidth:2,
    borderRadius:5,
    borderColor: '#6F8AB0', 
   justifyContent: 'center',
   marginBottom: 70,
  
  },
  
  });
  


// (props) {
//     return (
//        <ImageBackground 
//        style={styles.background}
//        source={require('../assets/background.jpg')}>
//     <SafeAreaView
//     style={styles.logoContainer}>
//       <Image resizeMode="contain" style={styles.logo} source={require('../assets/logo.png')}/>
//       <Text style={styles.slogan}>Find your perfect cocktail!</Text>
    
//     </SafeAreaView>
     
    
//       <View style= {styles.button1} >
//       <Button style={styles.button1} 
//       color= "#F9E79F"
//       title ={"Log in"}
//       fontWeight= "bold"
//       onPress={() => Alert.alert('Log in pressed')} />
//       </View>
//        </ImageBackground>
//     );
// }
// const styles = StyleSheet.create({
//     background:{
//         flex:1,
//         justifyContent: 'flex-end', 
        
//     },
//     logoContainer:{
//         position:'absolute',
//         top: 30,    
//     },
//     logo:{
//         width:90,
//         height:90,
        
//     },
//     slogan:{
//         color: 'white',
//         fontWeight: 'bold',
//         fontSize:20,
    
//     },
//     button1:{
//         width:'100%',
//         height:70,
//         backgroundColor: '#808B96',
//        justifyContent: 'center',
    
//     },
// })
// export default Screen;