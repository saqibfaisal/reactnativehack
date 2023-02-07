import BgImage from "../../assets/backgroundImage.png"
import Logo from "../../assets/Logo.png"
import Plantify from "../../assets/Plantify.png"
import Vector from "../../assets/Vector.png"
import { Image, ImageBackground, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { Welcome } from "./styles/Welcome"
import Button from "../../component/button"
function Welcomes({navigation}) {
    return (
        <View>
            <ImageBackground source={BgImage} style={{ height: "74%", width: "100%", marginBottom: 0 }}>
                <ImageBackground source={Vector} style={{ height: "90%", width: "100%" }}>
                    <View style={Welcome.MainContainer}>
                        <Image source={Logo} style={{ height: "52%", width: "60%", marginTop: 20 }} />
                        <Image source={Plantify} style={{ height: "10%", width: "75%", marginTop: 35 }} />
                    </View>
                </ImageBackground>
            </ImageBackground>
            <View style={Welcome.mainView}>
                <Text style={Welcome.Heading}>GET READY BE HIGYENIC</Text>
                <Text style={Welcome.Texts}>Jelajahi AiLearn untuk menambah kemampuanmu
                    dalam mengoperasikan Adobe Illustrator</Text>
                    <Button  style={Welcome.btn} style2={Welcome.TeXtColor} onPress={()=>navigation.navigate("Login")} text={"GetStart"}/>
            </View>
        </View>
    )
}
export default Welcomes