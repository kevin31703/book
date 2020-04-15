import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

const Bottombar = () => {
  return (
    <View style={styles.vStyle}>
        <View style={styles.box}>
            <View style={styles.center}>
                <Image style={styles.home} source={require('./image/icon_bottomnav_home.png')}/>
                <Text style={styles.word}>Home</Text>
            </View>
            <View style={styles.center}>
                <Image style={styles.book} source={require('./image/icon_bottomnav_mybook_selected.png')}/>
                <Text style={styles.word2}>My book</Text>
            </View>
            <View style={styles.center}>
                <Image style={styles.fav} source={require('./image/icon_bottomnav_favorites.png')}/>
                <Text style={styles.word}>Favorites</Text>
            </View>
        </View>
    </View>
   );
 };

 const styles = StyleSheet.create({
    vStyle: {
        elevation:2,
    },

    box:{
        backgroundColor:'#ffffff',
        height:80,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-around',
        top:10,
        left:5,
        zIndex:2,
        paddingBottom:15
    },

    center:{
        alignItems: 'center',
        justifyContent:'center',
       },

    word:{
        fontFamily:'Roboto',
        fontSize:14,
        color:'#818181',
        lineHeight:20,
    },

    word2:{
        fontFamily:'Roboto',
        fontSize:16,
        color:'#00b49f',
        lineHeight:20,
    },

    home:{
        width:35,
        height:35,
    },
    
    book:{
        width:35,
        height:35,
    },

    fav:{
        width:35,
        height:35,
   },

 });

 export default Bottombar;