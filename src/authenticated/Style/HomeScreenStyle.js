import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
export const HomeScreenStyle = StyleSheet.create({
    MainContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        // alignItems:"center"
    },
    SearchAndMenu:{
        flexDirection:"row",
        paddingTop:5,

    },
    Searching:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:"#ffffff",
        borderWidth:1,
        width:wp("73%"),
        marginRight:20,
        borderColor:"#002140",
        borderRadius:14, 
        paddingLeft:24,
        paddingRight:12,
        
    },
    SearchInput:{
        fontFamily:"Poppins",
        fontStyle:"normal",
        fontWeight:"500", 
        fontSize:15,
        lineHeight:21
    },
    FilterView:{
        borderColor:"#002140",
        borderWidth:1,
        backgroundColor:"#ffffff",
        borderRadius:14,
        padding:10,
        paddingTop:14,
        paddingBottom:14
    },
    Scroll:{
        paddingLeft:32,
        // paddingRight:32
    },
    ScrollText:{
        fontFamily:"Poppins",
        fontStyle:"normal",
        fontSize:14,
        lineHeight:21,
        fontWeight:"700",
        color:"#0D986A"
    },
    ScrollText1:{
        fontFamily:"Poppins",
        fontStyle:"normal",
        fontSize:14,
        lineHeight:21,
        fontWeight:"700",
        color:"#002140" 
    },
    Name:{
        fontFamily:"Poppins",
        fontStyle:"normal",
        fontWeight:"600",
        fontSize:14,
        lineHeight:21, 
        color:"#002140"
    },
    Name2:{
        fontFamily:'Philosopher',
        fontSize:32,
        fontStyle:"normal",
        fontWeight:"700",
        color:"#002140"
    },
    Price:{
        fontFamily:"Poopins",
        fontStyle:"normal",
        fontWeight:"600",
        fontSize:16,
        lineHeight:27,
        color:"#002140",
        marginRight:20
    },
});