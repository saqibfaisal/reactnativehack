import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native"
import Greenbg from "../assets/Greenbg.png"
import meunbg from "../assets/meunbg.png"
import cancel from "../assets/cancel.png"
import shop from "../assets/shop.png"
import plant from "../assets/plant.png"
import communit from "../assets/communit.png"
import TrackOrder from "../assets/TrackOrder.png"
import myAccount from "../assets/myAccount.png"
import { MenuStyle } from "./Style/MenuStyle"
function Menu() {
    return (
        <ImageBackground source={Greenbg}>
            <ImageBackground source={meunbg}>
                <View style={{ marginTop: 38.96, marginRight: 36 }}>
                    <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
                        <Image source={cancel} />
                    </View>
                    <View style={{ justifyContent: "flex-start", alignItems: "center", marginTop: 25 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
                            <Image source={shop} />
                            <Text style={MenuStyle.Shops}>Shop</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 39, justifyContent: "flex-start" }}>
                            <Image source={plant} />
                            <Text style={MenuStyle.Shop}>Plant Care</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 39, justifyContent: "flex-start" }}>
                            <Image source={communit} />
                            <Text style={MenuStyle.Shop}>Community</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 39, justifyContent: "flex-start" }}>
                            <Image source={myAccount} />
                            <Text style={MenuStyle.Shop}>My Account</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 39, justifyContent: "flex-start" }}>
                            <Image source={TrackOrder} />
                            <Text style={MenuStyle.Shop}>Track Order</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: "center", marginTop: 49 }}>
                        <Text style={MenuStyle.dirt}>Get the dirt.</Text>
                    </View>
                    <TouchableOpacity style={MenuStyle.Email}>
                        <Text style={MenuStyle.EmailText}>Enter your Email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 30 }}>
                        <Text style={MenuStyle.Frq}>FAQ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 20 }}>
                        <Text style={MenuStyle.Frq}>About US    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 20 }}>
                        <Text style={MenuStyle.Frq}>Contact Us</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ImageBackground>
    )
}
export default Menu