import { Text, View, Pressable, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import stylesGame from './game_css';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Audio } from 'expo-av'
import ConfettiCannon from 'react-native-confetti-cannon';

var count=0
var points = {
    player1:0,
    player2:0,
    tie:0
}
var winner =''

const soundObjectApplause = new Audio.Sound();
const soundObjectLoser = new Audio.Sound();

const Game = () =>{

    const [isPlaying,setIsPlaying] = useState(true)
    const [isPlayingLoser,setIsPlayingLoser] = useState(true)
    const soundObjectClick = new Audio.Sound();
    
    const playClick = async () => {
        try {
          await soundObjectClick.loadAsync(require('../sounds/click.mp3'))   
          await soundObjectClick.playAsync()
        } catch (error) {
          
        }
    }
    

    const [modalVisible, setModalVisible] = useState(false);

   

    var [turn,setTurn] =  useState('X')

    const [box1,setbox1] = useState('')
    const [box2,setbox2] = useState('')
    const [box3,setbox3] = useState('')

    const [box4,setbox4] = useState('')
    const [box5,setbox5] = useState('')
    const [box6,setbox6] = useState('')

    const [box7,setbox7] = useState('')
    const [box8,setbox8] = useState('')
    const [box9,setbox9] = useState('')

    //btn

    const [btn1,setbtn1] = useState(false)
    const [btn2,setbtn2] = useState(false)
    const [btn3,setbtn3] = useState(false)

    const [btn4,setbtn4] = useState(false)
    const [btn5,setbtn5] = useState(false)
    const [btn6,setbtn6] = useState(false)

    const [btn7,setbtn7] = useState(false)
    const [btn8,setbtn8] = useState(false)
    const [btn9,setbtn9] = useState(false)

    const function_turn =() => {
        
        var set = ''
        if(turn == 'X'){
            setTurn('O')
            set = 'X'
        }else{
            setTurn('X')
            set = 'O'
        }
        
        return set
    }

    useEffect(()=>{
        function_win()
        
    })

    const reset = () => {
        setbox1('')
        setbox2('')
        setbox3('')
        setbox4('')
        setbox5('')
        setbox6('')
        setbox7('')
        setbox8('')
        setbox9('')

        setbtn1(false)
        setbtn2(false)
        setbtn3(false)
        setbtn4(false)
        setbtn5(false)
        setbtn6(false)
        setbtn7(false)
        setbtn8(false)
        setbtn9(false)

        count = 0

    }

    const reset_btn = () => {
        setbox1('')
        setbox2('')
        setbox3('')
        setbox4('')
        setbox5('')
        setbox6('')
        setbox7('')
        setbox8('')
        setbox9('')

        setbtn1(false)
        setbtn2(false)
        setbtn3(false)
        setbtn4(false)
        setbtn5(false)
        setbtn6(false)
        setbtn7(false)
        setbtn8(false)
        setbtn9(false)

        count = 0

        points.player1 = 0
        points.player2 = 0
        points.tie = 0
    }

    const function_win = (set) => {
        count+=1
        
        if(box1=='X'&&box2=='X'&&box3=='X'||box4=='X'&&box5=='X'&&box6=='X'||box7=='X'&&box8=='X'&&box9=='X'||
        box1=='X'&&box4=='X'&&box7=='X'||box2=='X'&&box5=='X'&&box8=='X'||box3=='X'&&box6=='X'&&box9=='X'||
        box1=='X'&&box5=='X'&&box9=='X'||box3=='X'&&box5=='X'&&box7=='X'){
            
            points.player1 += 1
            winner = '!Ha ganado "X"!'
           
            reset()
            setModalVisible(true)
            //playApplause()
           
        }else if(box1=='O'&&box2=='O'&&box3=='O'||box4=='O'&&box5=='O'&&box6=='O'||box7=='O'&&box8=='O'&&box9=='O'||
        box1=='O'&&box4=='O'&&box7=='O'||box2=='O'&&box5=='O'&&box8=='O'||box3=='O'&&box6=='O'&&box9=='O'||
        box1=='O'&&box5=='O'&&box9=='O'||box3=='O'&&box5=='O'&&box7=='O'){
            points.player2 += 1
            winner = '!Ha ganado "O"!'
            
            reset()
            setModalVisible(true)
            //playApplause()
            
        }else if(count == 9){
            points.tie += 1
            winner = '!Empate!'
            //playLoser()
            reset()
            setModalVisible(true)
        }
        else{
        
        }
    }


    return (
        
        <View style={stylesGame.container}>
            
            <Modal
            
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <ConfettiCannon
                        count={50}
                        origin={{x: -10, y: 0}}
                        autoStart={true}
                    />
                <View style={styles.modalView}>
                    
                    <Text style={styles.modalText}>{winner}</Text>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {reset(),setModalVisible(false)} }>
                    <Text style={styles.textStyle}>Siguiente ronda</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
            <View style={stylesGame.header}>
                <View style={stylesGame.header_title}>
                    <Text style={stylesGame.text_X}>X</Text><Text style={stylesGame.text_O}>O</Text>
                </View>
                <View style={stylesGame.header_turn}>
                    <Text style={{color:'white',fontWeight:'bold'}}>Turno de: </Text>
                    <Text style={{color:'white',fontWeight:'bold'}}>{turn}</Text>
                </View>
                <Pressable style={stylesGame.header_btn} onPress={()=>{playClick(),reset_btn()}} ><Text>⟲</Text></Pressable>
            </View>
            <View style={{width:300,gap:10}}>
                <View style={stylesGame.cards}>
                    <Pressable style={stylesGame.cards_game} disabled={btn1} onPress={()=>{playClick(),setbox1(function_turn),setbtn1(true)}}><Text style={stylesGame.text_cards}>{box1}</Text></Pressable>
                    <Pressable style={stylesGame.cards_game} disabled={btn2} onPress={()=>{playClick(),setbox2(function_turn),setbtn2(true)}}><Text style={stylesGame.text_cards}>{box2}</Text></Pressable>
                    <Pressable style={stylesGame.cards_game} disabled={btn3} onPress={()=>{playClick(),setbox3(function_turn),setbtn3(true)}}><Text style={stylesGame.text_cards}>{box3}</Text></Pressable>
                </View>
                    <View style={stylesGame.cards}>
                    <Pressable style={stylesGame.cards_game} disabled={btn4} onPress={()=>{playClick(),setbox4(function_turn),setbtn4(true)}}><Text style={stylesGame.text_cards}>{box4}</Text></Pressable>
                    <Pressable style={stylesGame.cards_game} disabled={btn5} onPress={()=>{playClick(),setbox5(function_turn),setbtn5(true)}}><Text style={stylesGame.text_cards}>{box5}</Text></Pressable>
                    <Pressable style={stylesGame.cards_game} disabled={btn6} onPress={()=>{playClick(),setbox6(function_turn),setbtn6(true)}}><Text style={stylesGame.text_cards}>{box6}</Text></Pressable>
                </View>
                <View style={stylesGame.cards}>
                    <Pressable style={stylesGame.cards_game} disabled={btn7} onPress={()=>{playClick(),setbox7(function_turn),setbtn7(true)}}><Text style={stylesGame.text_cards}>{box7}</Text></Pressable>
                    <Pressable style={stylesGame.cards_game} disabled={btn8} onPress={()=>{playClick(),setbox8(function_turn),setbtn8(true)}}><Text style={stylesGame.text_cards}>{box8}</Text></Pressable>
                    <Pressable style={stylesGame.cards_game} disabled={btn9} onPress={()=>{playClick(),setbox9(function_turn),setbtn9(true)}}><Text style={stylesGame.text_cards}>{box9}</Text></Pressable>
                </View>
            </View>
            <View style={{flexDirection:'row',width:300,gap:10}}>
                <View style={stylesGame.points_player1}>
                    <Text style={stylesGame.points_text}>Jugador1</Text>
                    <Text style={stylesGame.points_text}>{points.player1}</Text>
                </View>
                <View style={stylesGame.points_tie}>
                    <Text style={stylesGame.points_text}>Empates</Text>
                    <Text style={stylesGame.points_text}>{points.tie}</Text>
                </View>
                <View style={stylesGame.points_player2}>
                    <Text style={stylesGame.points_text}>Jugador2</Text>
                    <Text style={stylesGame.points_text}>{points.player2}</Text>
                </View>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: '#21353E',
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width:500
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      
    },
    buttonOpen: {
      backgroundColor: '#35BFC0',
    },
    buttonClose: {
      backgroundColor: '#35BFC0',
    },
    textStyle: {
      color: '#1A2B33',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontSize:30,
      fontWeight:'bold',
      color:'#E0AF55'
    },
  });

export default Game