import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
export const Welcome = StyleSheet.create({

    
    MainContainer:{
        justifyContent:"center", 
        alignItems:"center",
        marginTop:15
    },
    Heading:{
        fontFamily:'Philosopher',
        fontSize:26,
        fontWeight:"700",
        lineHeight:29,
        fontStyle:"normal",
        color:"#0D986A",
        width:"50%"
    },
    mainView:{
        marginLeft:24,
        marginRight:24,

    },
    Texts:{
        fontFamily:'Inter',
        fontSize:14,
        fontWeight:"400",
        lineHeight:17,
        fontStyle:"normal",
        color:"#0D986A",
        marginTop:25,
        marginBottom:25
    },
    btn:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#0D986A",
        borderRadius:20,
        paddingTop:13,
        paddingBottom:13,
        color:"#FFFFFF"
    },
    TeXtColor:{
       color:"#FFFFFF" ,
       fontFamily:'Inter',
        fontSize:18,
        fontWeight:"700",
        lineHeight:22,
        fontStyle:"normal",
    }
})