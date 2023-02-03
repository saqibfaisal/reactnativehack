import React from 'react'
import { Image, LoginStyleheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { LoginStyle } from "./styles/LoginStyle"
export default function Signup() {
    return (
        <View style={{ backgroundColor: '#6c757d' }}>

            <Text style={{
                fontSize: 40, fontWeight: 'bold', color: 'white', textAlign: 'center', alignItems: "center", justifyContent: "center", marginTop: 80,
            }}>SignUp</Text>

            <View style={{ backgroundColor: 'white', marginTop: 90, borderTopLeftRadius: 50, borderTopEndRadius: 50, paddingHorizontal: '10%', height: '80%' }}>


                <View style={{ paddingTop: 50, }}>

                    {/* <Text style={LoginStyle.label}>Email: </Text> */}
                    <View style={LoginStyle.shadow}>
                        <TextInput style={LoginStyle.txtField} textContentType={'emailAddress'} placeholder='Enter the User' />
                    </View>
                    {/* <Text style={LoginStyle.label}>Email: </Text> */}
                    <View style={LoginStyle.shadow}>
                        <TextInput style={LoginStyle.txtField} textContentType={'emailAddress'} placeholder='Enter the Email' />
                    </View>
                    {/* <Text style={LoginStyle.label}>Email: </Text> */}
                    <View style={LoginStyle.shadow}>
                        <TextInput style={LoginStyle.txtField} textContentType={'emailAddress'} placeholder='Enter the Password' />
                    </View>

                    {/* <Text style={LoginStyle.label}>Password: </Text> */}
                    <View style={LoginStyle.shadow}>
                        <TextInput style={LoginStyle.txtField} textContentType={'password'} placeholder='Confirm Password' />

                    </View>


                    <TouchableOpacity style={LoginStyle.btn}>
                        <Text style={{ color: 'white', fontSize: 17, }}>SignUp </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate("Login") }} style={{ marginVertical: 15, flexDirection: 'row', marginTop: 20, alignSelf: 'center' }}>

                        <Text>You Have Already Account </Text>
                        <Text style={{ borderBottomColor: 'gray', borderBottomWidth: 1, }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}