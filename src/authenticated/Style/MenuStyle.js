import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
export const MenuStyle = StyleSheet.create({
    Shop: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 22,
        lineHeight: 33,
        letterSpacing: 0.02,
        marginLeft: 29,
        color: "#FFFFFF",
    },
    Shops: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 22,
        lineHeight: 33,
        letterSpacing: 0.02,
        paddingLeft:39,
        color: "#FFFFFF",
        paddingRight:39,
        // te
    },
    dirt:{
        fontFamily: 'Philosopher',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 22,
        letterSpacing: 0.02,
        textTransform:"uppercase",
        color:"#ffffff"
    },
    Email:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:24,
        borderWidth:1,
        borderRadius:5,
        width: "80%",
        marginLeft:37,
        paddingTop:24,
        paddingBottom:25,
        borderColor:"#FFFFFF"
    },
    EmailText:{
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 24,
        elevation:0.7,
        color:"#ffffff"
    },
    Frq:{
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 27,
        letterSpacing: 0.02,
        textTransform: "uppercase",
        textAlign:"center",
        color:"#FFFFFF"
    }
});