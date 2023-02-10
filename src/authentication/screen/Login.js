import React, { useState } from 'react'
import { Image, ImageBackground, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { LoginStyle } from "./styles/LoginStyle"
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";
import Button from '../../component/button';
import Back from "../../assets/Back.png"
import Logo2 from "../../assets/Logo2.png"
import Passowrdsssss from "../../assets/passowrdsssss.png"
import Userrsss from "../../assets/Userrsss.png"
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
        <View style={{ marginLeft: 24, marginTop: 24, marginRight: 24 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={Back} />
            </TouchableOpacity>
            <Image source={Logo2} style={{ width: "77%", height: "7%", marginTop: 24 }} />
            <View style={{ marginTop: 19 }}>
                <Text style={LoginStyle.LoginText}>Login</Text>
                <Text style={LoginStyle.LoginText2}>Masukan NISN dan password untuk
                    memulai belajar sekarang</Text>
            </View>
            <View style={{ marginTop: 47 }}>
                <Text style={LoginStyle.Email}>Username/ Email</Text>
                <View style={LoginStyle.password}>
                    <Image source={Userrsss} style={{ marginRight: 5 }} />
                    <TextInput placeholder='Username/ Email' style={LoginStyle.EmailInput} />
                </View>
                <Text style={LoginStyle.passwordText}>Password</Text>
                <View style={LoginStyle.password}>
                    <Image source={Passowrdsssss} style={{ marginRight: 5 }} />
                    <TextInput placeholder='Password' style={LoginStyle.EmailInput} />
                </View>
                <View>
                    <Text style={LoginStyle.ForgetPasssword}>Forget Passowrd</Text>
                </View>
            </View>
            <View>
                <Button style={LoginStyle.btn} style2={LoginStyle.BtnText} text={"Login"} onPress={() => Login()} />
            </View>
        </View>
    )
}
