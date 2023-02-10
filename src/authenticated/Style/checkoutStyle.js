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
        fontWeight: "700",
        fontSize: 32,
        lineHeight: 40,
        color: "#0D986A",
    },
    Name: {
        fontFamily: 'Philosopher',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 12,
        lineHeight: 20,
        color: "#002140",
        marginBottom: 14,
        marginTop: 4
    },
    Number: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 14,
        lineHeight: 21,
        color: "#0D986A",
        marginLeft: 12,
        marginRight: 12
    },
    price: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 21,
        color: "#002140",
        marginLeft: 8
    },
    delivery: {
        fontFamily: 'Philosopher',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 15,
        lineHeight: 20,
        color: "#002140",
    },
    Order: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 20,
        color: "#002140",
    },
    Apply: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 15,
        lineHeight: 20,
        color: "#002140",
        marginLeft: 22,
        marginRight: 26,
    },
    Total: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 28,
        lineHeight: 30,
        color: "#002140",
    },
    save: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 30,
        color: "#0D986A",
    },
    checkout: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 30,
        color: "#FFFFFF",
    }
});