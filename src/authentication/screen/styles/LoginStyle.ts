import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
export const LoginStyle = StyleSheet.create({
    LoginText: {
        fontFamily: 'Philosopher',
        fontSize: 36,
        fontWeight: "700",
        fontStyle: "normal",
        lineHeight: 40,
        color: "#0D986A",
        // marginTop:19
    },
    LoginText2: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 21,
        color: "#0D986A",
        marginTop: 6
    },
    Email: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 19,
        color: " rgba(0, 74, 97, 0.4)"
    },
    passwordText: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 19,
        color: " rgba(0, 74, 97, 0.4)",
        marginTop: 30
    },
    EmailInput: {
        width: wp("70%")
    },
    password: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        backgroundColor: "#FCFCFC",
        borderColor: "#E6E8EB",
        borderRadius: 4,
        paddingRight: 16,
        paddingLeft: 16,
        marginTop: 5,
    },
    ForgetPasssword: {
        textAlign: "right",
        color: "#004A61",
        textDecorationLine: "underline",
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 17,
    },
    BtnText: {
        color: "#ffffff",
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 22,
    },
    btn: {
        backgroundColor: "#0D986A",
        alignItems: "center",
        borderRadius: 25,
        paddingTop: 16,
        paddingBottom: 16,
        marginTop:43,
    },
});