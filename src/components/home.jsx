import { Text, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './home_css';
import { Audio } from 'expo-av'
import { useEffect, useState } from 'react';


const Home = ({navigation}) => {

    

    const soundObject = new Audio.Sound();
    const soundObjectClick = new Audio.Sound();

    const playSound = async () => {
      try {
        await soundObject.loadAsync(require('../sounds/soundtrack.mp3'))   
        await soundObject.playAsync()
      } catch (error) {
        
      }
    }
    

    const playClick = async () => {
      try {
        await soundObjectClick.loadAsync(require('../sounds/click.mp3'))   
        await soundObjectClick.playAsync()
      } catch (error) {
        
      }
    }

    useEffect(() => {
        playSound()
      return () => {
        soundObject.unloadAsync()
      }
      
    },[]);
    
    
    
    return (
        
        <View style={styles.container}>
          <View style={styles.title_XO}>
            <Text style={styles.text_X}>X</Text><Text style={styles.text_O}>O</Text>
          </View>
          <View style={styles.icon_XO}>
            <Text style={styles.icon_XO_subtitle}>TIC TAC TOE</Text>
            <View style={styles.icon_XO_inside}>
              <View style={styles.icon_XO_inside_X}><Text style={styles.text_X_inside}>X</Text></View>
              <View style={styles.icon_XO_inside_O}><Text style={styles.text_O_inside}>O</Text></View>
            </View>
            <Text style={styles.icon_XO_subtitle}>Recuerda: X JUEGO PRIMERO</Text>
          </View>
          <Pressable style={styles.Pressable_newGame} onPress={()=>{playClick(),navigation.navigate('Game')}}><Text style={{color:'#1A2B33'}}>Empezar(VS JUGADOR)</Text></Pressable>
          <Text style={styles.icon_XO_subtitle}>Creador: Jostin Orbe</Text>
          <StatusBar style="auto"/>
        </View>
      );
}



export default Home