import React, { useState } from 'react'
import { ActivityIndicator, Image, ImageBackground, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { LoginStyle } from "./styles/LoginStyle"
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";
import Button from '../../component/button';
import Back from "../../assets/Back.png"
import Logo2 from "../../assets/Logo2.png"
import Passowrdsssss from "../../assets/passowrdsssss.png"
import Userrsss from "../../assets/Userrsss.png"
import { BACKEND_URL } from '../../../config';
export default function Signup({ navigation }) {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let Signup = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (email == "" || password == "") {
            showMessage({
                message: 'Please Fill the Input',
                type: 'Danger',
                duration: 2000,
                autoHide: true,
            });
            return <FlashMessage />
        }
        else if (email !== '' && password !== '') {
            if (reg.test(email.toLowerCase()) === false) {
                showMessage({
                    message: 'Email is Not Valid',
                    type: 'Danger',
                    duration: 2000,
                    autoHide: true,
                });
                return <FlashMessage />
            }
            // if (password == confirmPassword) {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            let initialData = {
                "email": email.toLowerCase(),
                "password": password,
                "type": "User",
            }
            const raw = JSON.stringify(
                initialData
            );
            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            setLoading(true)
            fetch(`${BACKEND_URL}/api/singup`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    setLoading(false)
                    // ToastAndroid.show("user successfully signup", 2000);
                    setEmail("");
                    setPassword("");
                    console.log(result);
                    showMessage({
                        message: 'user successfully signup',
                        type: 'success',
                        duration: 2000,
                        autoHide: true,
                    });
                    navigation.navigate("HomeScreen")
                    return <FlashMessage />


                })
                .catch(error => {
                    setLoading(false)
                    setEmail("");
                    setPassword("");
                    console.log('error', error)
                });
            // }
        }
    }
    return (
        <View style={{ marginLeft: 24, marginTop: 24, marginRight: 24 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={Back} />
            </TouchableOpacity>
            <Image source={Logo2} style={{ width: "77%", height: "7%", marginTop: 24 }} />
            <View style={{ marginTop: 19 }}>
                <Text style={LoginStyle.LoginText}>Signup</Text>
                <Text style={LoginStyle.LoginText2}>Masukan NISN dan password untuk
                    memulai belajar sekarang</Text>
            </View>
            <View style={{ marginTop: 47 }}>
                <Text style={LoginStyle.Email}>Username/ Email</Text>
                <View style={LoginStyle.password}>
                    <Image source={Userrsss} style={{ marginRight: 5 }} />
                    <TextInput onChangeText={(e) => setEmail(e)} value={email} placeholder='Email' style={LoginStyle.EmailInput} />
                </View>
                <Text style={LoginStyle.passwordText}>Password</Text>
                <View style={LoginStyle.password}>
                    <Image source={Passowrdsssss} style={{ marginRight: 5 }} />
                    <TextInput placeholder='Password' onChangeText={(e) => setPassword(e)} value={password} style={LoginStyle.EmailInput} />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={LoginStyle.ForgetPasssword}>Login</Text>
                </TouchableOpacity>
            </View>
            <View>
                {loading == true ?
                    <ActivityIndicator />
                    :
                    <Button style={LoginStyle.btn} style2={LoginStyle.BtnText} text={"SignUp"} onPress={() => Signup()} />
                }
            </View>
        </View>
    )
}