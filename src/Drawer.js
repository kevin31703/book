import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

const Drawer = () => {
  return (
        <View style={styles.abouslute}>
            <View style={styles.background}></View>
                <View style={styles.viewStyle}>
                    <View style={styles.top}>
                        <Image style={styles.head} source={{uri:'https://cdn.zeplin.io/5e6edfd117dbf813ddad315b/assets/6FA2E86D-64B3-4F7D-8CA4-9C5F444C0A1B.png'}}/>
                        <Text style={styles.name}>GamexHCl</Text>
                        <Text style={styles.email}>gdlab2017@gmail.com</Text>
                        <Image style={styles.tri} source={require('./image/btn_down_arrow.png')}/>
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.box}>
                            <Image style={styles.icon} source={require('./image/icon_drawer_home.png')}/>
                            <Text style={styles.info}>Home</Text>
                        </View>
                        <View style={styles.box3}>
                            <Image style={styles.icon} source={require('./image/icon_drawer_mybook_pressed.png')}/>
                            <Text style={styles.info2}>My Book</Text>
                            <Text style={styles.box2}></Text>
                        </View>
                        <View style={styles.box4}>
                            <Image style={styles.icon} source={require('./image/icon_drawer_favorites.png')}/>
                            <Text style={styles.info}>Favorites</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={styles.icon} source={require('./image/icon_drawer_setting.png')}/>
                            <Text style={styles.info}>Settings</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={styles.icon} source={require('./image/icon_drawer_aboutus.png')}/>
                            <Text style={styles.info}>About us</Text>
                        </View>
                    </View>
                </View>
                
        </View>
    
  );
};

const styles = StyleSheet.create({
    abouslute:{
        position:'absolute',
        zIndex:10,
        elevation:10,
    },
    background:{
        backgroundColor:'#000000',
        position:'absolute',
        width:110,
        height:820,
        opacity:0.4,
        left:304

    },
    viewStyle: {
        backgroundColor:'#ebebeb',
        zIndex:9,
        elevation:10,
        shadowColor: "#000",
        shadowOffset: {width:2,height: 2,},
        shadowOpacity: 0.7,
        shadowRadius: 2.62,

    },
    top:{
        backgroundColor:'#00b49f',
        height:230,
        width:304,
        paddingLeft:20
    },
    head:{
        height:70,
        width:70,
        marginTop:85,
        marginBottom:10
    },
    name:{
        fontSize:18,
        color:'#ffffff',
        fontFamily:'Roboto',
        fontWeight:'400'
    },
    email:{
        fontSize:16,
        color:'#ffffff',
        fontFamily:'Roboto',
    },
    tri:{
        width:30,
        height:30,
        left:235,
        top:-35,
    },
    bottom:{
        backgroundColor:'#ebebeb',
        width:304,
        height:640,
        paddingLeft:20
    },
    box:{
        flexDirection:'row',
        flex:0,
        marginTop:30,
        alignItems: 'center',
    },

    box3:{
        flexDirection:'row',
        flex:0,
        marginTop:20,
        alignItems: 'center',
    },

    box4:{
        flexDirection:'row',
        flex:0,
        marginTop:20,
        alignItems: 'center',
    },
    
    box2:{
        width:304,
        height:60,
        left:-165,
        backgroundColor:'#00b49f',
        zIndex:-1,
    },

    icon:{
        height:36,
        width:36,
        marginRight:32
    },

    info:{
        fontSize:20,
        color:'#5c5c5c',
        fontFamily:'Roboto',
        fontWeight:'400',
    },
    
    info2:{
        fontSize:20,
        color:'#ffffff',
        fontFamily:'Roboto',
        fontWeight:'400',
    },
});

export default Drawer;