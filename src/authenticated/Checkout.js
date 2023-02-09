import { Text, View, Image, TouchableOpacity, FlatList } from "react-native"
import Logo2 from "../assets/Logo2.png"
import Union from "../assets/Union.png"
import Menu from "../assets/Menu.png"
import checkoutvarse from "../assets/checkoutvarse.png"
import add from "../assets/add.png"
import sub from "../assets/sub.png"
import deletes from "../assets/delete.png"
import save from "../assets/save.png"
import checkoutvarse2 from "../assets/checkoutvarse2.png"
import checkoutvarse3 from "../assets/checkoutvarse3.png"
import delivery from "../assets/delivery.png"
import { CheckoutStyle } from "./Style/checkoutStyle"
function Checkout() {

    return (
        <View style={{ marginTop: 26, marginLeft: 26, marginRight: 36 }}>
            <View style={CheckoutStyle.MainContainer}>
                <Image source={Logo2} style={{ width: "60%", height: "115%" }} />
                <View style={CheckoutStyle.SearchAndMenu}>
                    <Image source={Union} style={{ marginRight: 30 }} />
                    <TouchableOpacity>
                        <Image source={Menu} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 50 }}>
                <Text style={CheckoutStyle.Bag}>Your Bag</Text>
            </View>
            <View>
                <View style={{ flexDirection: "row", }}>
                    <Image source={checkoutvarse} />
                    <View style={{ marginLeft: 5, marginTop: 10 }}>
                        <Text style={CheckoutStyle.Name}>Watermelon Peperomia</Text>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity>
                                <Image source={add} />
                            </TouchableOpacity>
                            <Text style={CheckoutStyle.Number}>1</Text>
                            <TouchableOpacity>
                                <Image source={sub} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 36 }}>
                                <Image source={deletes} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 15, marginLeft: 21, flexDirection: "row" }}>
                        <TouchableOpacity>
                            <Image source={save} />
                        </TouchableOpacity>
                        <Text style={CheckoutStyle.price}>₹350</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ flexDirection: "row", }}>
                    <Image source={checkoutvarse2} />
                    <View style={{ marginLeft: 5, marginTop: 10 }}>
                        <Text style={CheckoutStyle.Name}>Peperomia Obtusfolia</Text>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity>
                                <Image source={add} />
                            </TouchableOpacity>
                            <Text style={CheckoutStyle.Number}>1</Text>
                            <TouchableOpacity>
                                <Image source={sub} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 36 }}>
                                <Image source={deletes} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 15, marginLeft: 21, flexDirection: "row" }}>
                        <TouchableOpacity>
                            <Image source={save} />
                        </TouchableOpacity>
                        <Text style={CheckoutStyle.price}>$400</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ flexDirection: "row", }}>
                    <Image source={checkoutvarse3} />
                    <View style={{ marginLeft: 5, marginTop: 10 }}>
                        <Text style={CheckoutStyle.Name}>Cactus</Text>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity>
                                <Image source={add} />
                            </TouchableOpacity>
                            <Text style={CheckoutStyle.Number}>1</Text>
                            <TouchableOpacity>
                                <Image source={sub} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 36 }}>
                                <Image source={deletes} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 15, marginLeft: 21, flexDirection: "row" }}>
                        <TouchableOpacity>
                            <Image source={save} />
                        </TouchableOpacity>
                        <Text style={CheckoutStyle.price}>$260</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ flexDirection: "row" }}>
                    <Image source={delivery} />
                    <View>
                        <View>
                            <Text>Delivery</Text>
                            <Image/>
                        </View>
                        <Text>Order above ₹1200 to get free delivery</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Checkout