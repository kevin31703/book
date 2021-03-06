import React from "react";
import { StyleSheet, Text, View, Image ,ScrollView} from "react-native";


const Contain = props => {
    let { list } = props;
    return (
        <ScrollView style={styles.marginOS}>
            <View style={styles.box}>
                <View style={styles.bg}>
                    <Image
                        style={styles.img}
                        source={{ uri: list.image }}
                    />
                </View>
                <View style={styles.right}>
                    <Text style={styles.tital}>{list.title}</Text>
                    <Text style={styles.p1}>{list.p1}</Text>
                    <Text style={styles.p2}>{list.p2}</Text>
                    <Text style={styles.process}></Text>
                    <Text style={styles.processwd}></Text>
                    <Text style={styles.rate}>50% completed</Text>
                </View>
            </View>
                <View style={styles.line}></View>
       </ScrollView>     
    )
};



const styles = StyleSheet.create({
    box: {
        flexDirection:'row',
        height:200,
        flex:1,
        backgroundColor:'#f8f8f8',
        paddingLeft:20,
        paddingRight:50,
        alignItems:'center',
        justifyContent: 'space-between',
    },

    marginOS:{
        paddingLeft:18,
        paddingRight:18,
        backgroundColor:'#f8f8f8',
        marginLeft:-20,
    },

    right:{
        width:194,
        left:20,
        top:-5,
    },

    bg:{
        padding:3,
        height: 156,
        width: 106,
        borderWidth:0.5,
        borderColor:'#d1d1d1',
        shadowColor: "#000",
        shadowOffset: {width:0,height: 0,},
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    img: {
        height: 150,
        width: 100,

    },
    line:{
        height: 1,
        backgroundColor :'#d1d1d1',
    },
    tital:{
        fontFamily:'Roboto',
        fontSize:18,
        color:'#2e2e2e',
        fontWeight:'bold',
        lineHeight:24,
        marginBottom:10,
        marginTop:20
        
    },
    p1:{
        fontFamily:'Roboto',
        fontSize:16,
        color:'#717171',
        lineHeight:20,
        marginBottom:10
    },
    p2:{
        fontFamily:'Roboto',
        fontSize:14,
        color:'#b1b1b1',
        lineHeight:15,
        marginBottom:10
    },
    process:{
        backgroundColor:'#c3c3c3',
        height:3,
        borderRadius:3,
        marginBottom:9
    },
    processwd:{
        backgroundColor:'#70b4a1',
        height:3,
        borderRadius:3,
        marginTop:-12,
        marginBottom:9,
        width:97,
        zIndex:3
    },
    rate:{
        fontFamily:'Roboto',
        fontSize:14,
        color:'#b1b1b1',
        lineHeight:20,
        top:5,
    },

});

export default Contain;