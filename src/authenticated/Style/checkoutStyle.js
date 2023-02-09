import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
export const CheckoutStyle = StyleSheet.create({
    MainContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        // alignItems:"center"
    },
    SearchAndMenu: {
        flexDirection: "row",
        paddingTop: 5,

    },
    Bag: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: 32,
        lineHeight: 40,
        color: "#0D986A",
    },
    Name:{
        fontFamily: 'Philosopher',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: 12,
        lineHeight: 20,
        color: "#002140",
        marginBottom:14,
        marginTop:4
    },
    Number:{
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: 14,
        lineHeight: 21,
        color: "#0D986A",
        marginLeft:12,
        marginRight:12
    },
    price:{
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 21,
        color: "#002140",
        marginLeft:8
    },
});