import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1A2B33',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20
    },
    //TITULO
    title_XO:{
      flexDirection: 'row',
      gap: 5
    },
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
    //ICONO
    icon_XO:{
        flexDirection: 'column',
        alignItems:'center',
        backgroundColor: '#21353E',
        gap: 5,
        padding: 10,
        borderRadius:10,
        width:300,
        borderBottomColor:'#11222E',
        borderBottomEndRadius:10,
        borderBottomWidth:5
    },
    icon_XO_subtitle:{
        color: '#b3bec4',
        fontSize:15,
        margin:5
    },
    //ICONO_INSIDE
    icon_XO_inside:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#1A2B33',
        gap: 10,
        width: 250,
        padding:10,
        borderRadius:10
    },
    icon_XO_inside_X:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        height:60,
        backgroundColor: '#b3bec4',
        color: '#1A2B33',
        borderRadius:10,
        
    },
    icon_XO_inside_O:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
        height:60,
    },
    text_X_inside:{
        color: '#1A2B33',
        fontWeight:'bold',
        fontSize:40

    },
    text_O_inside:{
        color: '#b3bec4',
        fontWeight:'bold',
        fontSize:40
    }, 
    //BUTTON
    Pressable_newGame:{
        color:'#1A2B33',
        backgroundColor:'#35BFC0',
        
        borderRadius:10,
        width:300,

        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,

        borderBottomColor:'#11222E',
        borderBottomEndRadius:10,
        borderBottomWidth:5
    }
});

export default styles