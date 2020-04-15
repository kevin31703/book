  
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

const Header = () => {
  return (
    <View style={styles.vStyle}>
        <Image style={styles.navbar} source={require('./image/btn_navbar_mobile.png')}/>
        <Text style={styles.tStyle}>My Book</Text>
        <Image style={styles.search} source={require('./image/btn_search.png')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  vStyle: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection:'row',
    height:100,
    paddingTop:25,
    elevation:2,
    backgroundColor:'#00b49f',
    zIndex:2
  },

  tStyle:{
      fontSize:24,
      color:'#ffffff',
      marginLeft:50,
      marginRight:50,
  },

  navbar:{
    height:45,
    width:45,
    zIndex:2
  },

  search:{
    height:45,
    width:45,
  }
});

export default Header;