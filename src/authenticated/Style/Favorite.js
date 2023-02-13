import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
export const FavoriteStyle = StyleSheet.create({
    MainContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        // alignItems:"center"
        // marginLeft: 15,
        // marginRight: 15,
        // marginTop: 20
    },
    SearchAndMenu: {
        flexDirection: "row",
        paddingTop: 5,

    },
    MainView: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 39
    },
    MAinText: {
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 21,
        fontStyle: "normal",
        color: "#002140"
    },
    name: {
        fontFamily: 'Philosopher',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 38,
        lineHeight: 54,
        color: "#002140",
    },
    price: {
        fontFamily: "Poppins",
        fontSize: 12,
        fontWeight: "600",
        lineHeight: 18,
        fontStyle: "normal",
        color: "#002140",
        textTransform: "uppercase"
    },
    number: {
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 24,
        fontStyle: "normal",
        color: "#002140",
        marginTop: 9
    },
    Size: {
        fontFamily: "Poppins",
        fontSize: 12,
        fontWeight: "600",
        lineHeight: 18,
        fontStyle: "normal",
        color: "#002140",
        marginTop: 24
    },
    Height: {
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 24,
        fontStyle: "normal",
        color: "#002140",
        marginTop: 9
    },
    Overview: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.02,
        color: "#002140",
    },
    ML: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 20,
        color: "#0D986A",
    },
    water: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 14,
        lineHeight: 14,
        color: "#002140",
        marginTop: 6
    },
    Plant: {
        fontFamily: 'Philosopher',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 15,
        lineHeight: 25,
        color: "#002140",
        elevation: 0.7
    },
    Similar: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.02,
        color: "#002140",
    },
    Air: {
        // position: "absolute",
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 14,
        lineHeight: 21,
        color: "#002140",
        width: 50
    },
    Peperomia: {
        fontFamily: 'Philosopher',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 21,
        color: "#002140",
    },
    explain: {
        fontFamily: 'Philosopher',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 20,
        // marginTop: 30,
        color: "#002140"
    },
    Para:{
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 14,
        marginTop: 21,
        color: "#002140",
        elevation:0.7
    },
    scanView:{
        marginTop:31
        ,borderWidth:1,
        borderColor:"#0D986A",
        borderRadius:4,
        justifyContent:"center",
        alignItems:"center",
        paddingBottom:11
        ,paddingTop:11
    },
    Scan:{
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 13,
        // marginTop: 20,
        color: "#0D986A",
        
    },
    checkout: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 13,
        lineHeight: 30,
        color: "#FFFFFF",
        marginLeft:23.28
    },
    checkouts: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 30,
        color: "#FFFFFF",
    }
});