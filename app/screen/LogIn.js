import React from 'react';
import {ImageBackground,View, SafeAreaView,Alert,StyleSheet} from 'react-native';
import{ Button, Card, TextInput} from 'react-native-paper';

export default function LogIn(){

 const login=()=>Alert.alert("Welcome to Movie.io!")
    return(
        <ImageBackground 
   style={styles.background}
   source={require('../assets/movie.jpg')}>
        <SafeAreaView>
            <View style={styles.card}>
                <Card>
                    <Card.Title 
                    title="More movies are waiting for you!"/>
                <Card.Content>
                    <TextInput
                    label="Email"
                    keyboardType="email-address"/>
                    <TextInput
                    label="Password"
                    secureTextEntry={true}
                    />
                    <View style={styles.button4}>
                    <Button 
                    style={styles.button4}
                    mode="contained"
                
                    onPress={login}>
                        Login
                    </Button>
                    </View>
                    
                </Card.Content>    

                </Card>
            </View>
        </SafeAreaView>
        </ImageBackground>
    );

}
const styles = StyleSheet.create({
    
    background:{
        flex:1,
        justifyContent: 'center', 
        
    },
    card:{
        marginBottom:120
    },
    button4:{
        backgroundColor:"#F7A241"
    }
})