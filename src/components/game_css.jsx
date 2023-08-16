import { StyleSheet } from 'react-native';

const stylesGame = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A2B33',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    //HEADER
    header:{
        flexDirection:'row',
        width:300,
        justifyContent:'space-between',
        
    },
    header_title:{
        flexDirection:'row',
        gap:5
    },
    header_turn:{
        flexDirection:'row',
        backgroundColor: '#21353E',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:15,
        borderRadius:5,
        gap:5,
        borderBottomColor:'#11222E',
        borderBottomEndRadius:10,
        borderBottomWidth:5
    },
    header_btn:{
        backgroundColor:'#b3bec4',
        alignItems:'center',
        justifyContent:'center',
        width:40,
        borderRadius:5,
        borderBottomColor:'#11222E',
        borderBottomEndRadius:10,
        borderBottomWidth:5
    },
    //XO
    text_X:{
        color: '#35BFC0',
        fontSize:25,
        fontWeight:'bold'
    },
    text_O:{
        color: '#E0AF55',
        fontSize:25,
        fontWeight:'bold'
    },  
    //CARDS 
    cards:{
        flexDirection:'row',
        gap:10
    },
    cards_game:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#21353E',
        height:90,
        borderRadius:5,
        borderBottomColor:'#11222E',
        borderBottomEndRadius:10,
        borderBottomWidth:5
    },
    text_cards:{
        color:'white',
        fontSize:60,
        fontWeight:'bold'
    },
    //FOOTER
    points_player1:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#35BFC0',
        justifyContent:'center',
        paddingVertical:10,
        borderRadius:5,
        borderBottomColor:'#11222E',
        borderBottomEndRadius:10,
        borderBottomWidth:5
    },
    points_tie:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#b3bec4',
        justifyContent:'center',
        paddingVertical:10,
        borderRadius:5,
        borderBottomColor:'#11222E',
        borderBottomEndRadius:10,
        borderBottomWidth:5
    },
    points_player2:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#E0AF55',
        justifyContent:'center',
        paddingVertical:10,
        borderRadius:5,
        borderBottomColor:'#11222E',
        borderBottomEndRadius:10,
        borderBottomWidth:5
    },
    points_text:{
        color:'#1A2B33'
    }
})

export default stylesGame