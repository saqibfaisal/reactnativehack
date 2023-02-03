import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import { LoginStyle } from './LoginStyle/LoginStyle'
import { LoginStyle } from "./styles/LoginStyle"
export default function Login({ navigation }) {
    return (
        <View style={{ backgroundColor: '#6c757d' }}>

            <Text style={{
                fontSize: 40, fontWeight: 'bold', color: 'white', textAlign: 'center', alignItems: "center", justifyContent: "center", marginTop: 80,
            }}>LOGIN</Text>

            <View style={{ backgroundColor: 'white', marginTop: 90, borderTopLeftRadius: 50, borderTopEndRadius: 50, paddingHorizontal: '10%', height: '80%' }}>


                <View style={{ paddingTop: 90, }}>

                    {/* <Text style={LoginStyle.label}>Email: </Text> */}
                    <View style={LoginStyle.shadow}>
                        <TextInput style={LoginStyle.txtField} textContentType={'emailAddress'} placeholder='Enter the Email' />
                    </View>

                    {/* <Text style={LoginStyle.label}>Password: </Text> */}
                    <View style={LoginStyle.shadow}>
                        <TextInput style={LoginStyle.txtField} textContentType={'password'} placeholder='Enter the Password' />

                    </View>


                    <TouchableOpacity style={LoginStyle.btn}>
                        <Text style={{ color: 'white', fontSize: 17, }}>Login </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate("Signup") }} style={{ marginVertical: 15, flexDirection: 'row', marginTop: 20, alignSelf: 'center' }}>
                        <Text>Don't Have an Account ? </Text>
                        <Text style={{ borderBottomColor: 'gray', borderBottomWidth: 1, }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}
