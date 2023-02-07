import React, { useState } from 'react'
import { Image, ImageBackground, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { LoginStyle } from "./styles/LoginStyle"
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";
import Button from '../../component/button';
import BgImage from "../../assets/backgroundImage.png"
export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let Login = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        // if (email !== '' && password !== '') {
        if (email == "" || password == "") {
            // ToastAndroid.show("", 2000);
            showMessage({
                message: 'Please Fill The Input Field',
                type: 'Danger',
                duration: 2000,
                autoHide: true,
            });
            return <FlashMessage />
        }
        else if (email == email) {

            if (reg.test(email) === false) {
                // return()
                showMessage({
                    message: 'Email is Not Valid',
                    type: 'Danger',
                    duration: 2000,
                    autoHide: true,
                });
                return <FlashMessage />
            }
            let data = {
                "email": email.toLowerCase(),
                "password": password,
            }
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify(data);

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            fetch("http://192.168.18.217:5000/api/login", requestOptions)
                .then(response => response.text())
                .then(result => {
                    setEmail("");
                    setPassword("");
                    console.log(result)
                    showMessage({
                        message: 'User Sucessfully login',
                        type: 'success',
                        duration: 2000,
                        autoHide: true,
                    });
                    return <FlashMessage />
                })
                .catch(error => {
                    setEmail("");
                    setPassword("");
                    console.log('error', error)
                });
        }
    }
    return (
        <View style={{ backgroundColor: '#6c757d' }}>

            <Text style={{
                fontSize: 40, fontWeight: 'bold', color: 'white', textAlign: 'center', alignItems: "center", justifyContent: "center", marginTop: 80,
            }}>LOGIN</Text>

            <View style={{ backgroundColor: 'white', marginTop: 90, borderTopLeftRadius: 50, borderTopEndRadius: 50, paddingHorizontal: '10%', height: '80%' }}>
                <View style={{ paddingTop: 90, }}>
                    <View style={LoginStyle.shadow}>
                        <TextInput style={LoginStyle.txtField} textContentType={'emailAddress'} placeholder='Enter the Email' value={email} onChangeText={(e) => setEmail(e)} />
                    </View>
                    <View style={LoginStyle.shadow}>
                        <TextInput style={LoginStyle.txtField} textContentType={'password'} placeholder='Enter the Password' value={password} onChangeText={(e) => setPassword(e)} />
                    </View>

                    <Button style={LoginStyle.btn} style2={{ color: 'white', fontSize: 17, }} text={"Login"} onPress={() => Login()} />
                    {/* <TouchableOpacity style={LoginStyle.btn} onPress={() => Login()}>
                        <Text style={{ color: 'white', fontSize: 17, }}>Login </Text>
                    </TouchableOpacity> */}

                    <TouchableOpacity onPress={() => { navigation.navigate("Signup") }} style={{ marginVertical: 15, flexDirection: 'row', marginTop: 20, alignSelf: 'center' }}>
                        <Text>Don't Have an Account ? </Text>
                        <Text style={{ borderBottomColor: 'gray', borderBottomWidth: 1, }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}
