import React from 'react';
import { ImageBackground,StyleSheet, View } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';

export default function Movie(){

        const [visible, setVisible] = React.useState(false);
      
        const showDialog = () => setVisible(true);
      
        const hideDialog = () => setVisible(false);
    return(
   <ImageBackground 
   style={styles.background}
   source={require('../assets/film.jpg')}>
    <Provider >
    <View style={styles.main}>
        <View style={styles.button3}>
      <Button  onPress={showDialog}>Press to download the movie!</Button>
      </View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Nice choice!</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Movie downloaded! Have a good time watching with Movie.io</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  </Provider>
  </ImageBackground>
    );
}
const styles = StyleSheet.create({
    
    background:{
        flex:1,
        justifyContent: 'center', 
        
    },
  main:{
      justifyContent: 'center',
      marginTop:200,   
      
  },
  button3:{
 color:'black',
  }
})
