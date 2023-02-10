import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
export const OrderDoneStyle = StyleSheet.create({
    OrderRecevied: {
        textAlign: "center",
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: 800,
        fontSize: 36,
        lineHeight: 44,
        // width:10,
        color: "#0D986A",
    },
    Id:{
        textAlign: "center",
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 21,
        // width:10,
        color: "#002140",
        marginTop:10,
    },
    DoneView:{
        backgroundColor:"#0D986A",
        borderRadius:20,
        marginLeft:24,
        marginRight:24,
        marginTop:24, justifyContent:"center",
        alignItems:"center",
        paddingTop:12
        ,paddingBottom:12
    },
    Done:{
        textAlign: "center",
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 24,
        // width:10,
        color: "#FFFFFF",
    }
});