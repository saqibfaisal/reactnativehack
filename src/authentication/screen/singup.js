import React, { useState } from 'react'
import { Image, ImageBackground, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { LoginStyle } from "./styles/LoginStyle"
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";
import Button from '../../component/button';
import Back from "../../assets/Back.png"
import Logo2 from "../../assets/Logo2.png"
import Passowrdsssss from "../../assets/passowrdsssss.png"
import Userrsss from "../../assets/Userrsss.png"
export default function Signup({ navigation }) {
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
            fetch("http://192.168.18.217:5000/api/singup", requestOptions)
                .then(response => response.json())
                .then(result => {
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
                    return <FlashMessage />


                })
                .catch(error => {
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
                    <TextInput onChange={(e)=>setEmail(e)}value={email} placeholder='Email' style={LoginStyle.EmailInput} />
                </View>
                <Text style={LoginStyle.passwordText}>Password</Text>
                <View style={LoginStyle.password}>
                    <Image source={Passowrdsssss} style={{ marginRight: 5 }} />
                    <TextInput placeholder='Password' onChange={(e)=>setPassword(e)}value={password} style={LoginStyle.EmailInput} />
                </View>
                <View>
                    <Text style={LoginStyle.ForgetPasssword}>Forget Passowrd</Text>
                </View>
            </View>
            <View>
                <Button style={LoginStyle.btn} style2={LoginStyle.BtnText} text={"SignUp"} onPress={() => Login()} />
            </View>
        </View>
        // <View style={{ backgroundColor: '#6c757d' }}>
        //     <Text style={{
        //         fontSize: 40, fontWeight: 'bold', color: 'white', textAlign: 'center', alignItems: "center", justifyContent: "center", marginTop: 80,
        //     }}>SignUp</Text>

        //     <View style={{ backgroundColor: 'white', marginTop: 90, borderTopLeftRadius: 50, borderTopEndRadius: 50, paddingHorizontal: '10%', height: '80%' }}>


        //         <View style={{ paddingTop: 50, }}>
        //             <View style={LoginStyle.shadow}>
        //                 <TextInput style={LoginStyle.txtField} textContentType={'emailAddress'} placeholder='Enter the User' value={username} onChangeText={(e) => setUserName(e)} />
        //             </View>
        //             <View style={LoginStyle.shadow}>
        //                 <TextInput style={LoginStyle.txtField} textContentType={'emailAddress'} placeholder='Enter the Email' value={email} onChangeText={(e) => setEmail(e)} />
        //             </View>
        //             <View style={LoginStyle.shadow}>
        //                 <TextInput style={LoginStyle.txtField} textContentType={'emailAddress'} placeholder='Enter the Password' value={password} onChangeText={(e) => setPassword(e)} />
        //             </View>
        //             <View style={LoginStyle.shadow}>
        //                 <TextInput style={LoginStyle.txtField} textContentType={'password'} placeholder='Confirm Password' value={confirmPassword} onChangeText={(e) => setConfirmPassword(e)} />

        //             </View>
        //             <Button style={LoginStyle.btn} style2={{ color: 'white', fontSize: 17, }} text={"SignUp"} onPress={() => Signup()} />
        //             {/* <TouchableOpacity style={LoginStyle.btn} onPress={() => Signup()}>
        //                 <Text style={{ color: 'white', fontSize: 17, }}>SignUp </Text>
        //             </TouchableOpacity> */}

        //             <TouchableOpacity onPress={() => { navigation.navigate("Login") }} style={{ marginVertical: 15, flexDirection: 'row', marginTop: 20, alignSelf: 'center' }}>
        //                 <Text>You Have Already Account </Text>
        //                 <Text style={{ borderBottomColor: 'gray', borderBottomWidth: 1, }}>Login</Text>
        //             </TouchableOpacity>
        //         </View>
        //     </View>
        // </View>

    )
}