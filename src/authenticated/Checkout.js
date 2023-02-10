import { Text, View, Image, TouchableOpacity, FlatList, ImageBackground, ScrollView } from "react-native"
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
import percent from "../assets/percent.png"
import percent2 from "../assets/percent2.png"
import apply from "../assets/apply.png"
import fullpercent from "../assets/fullpercent.png"
import checkoutvarse4 from "../assets/checkoutvarse4.png"
import save2 from "../assets/save2.png"
import footer from "../assets/footer.png"
import { CheckoutStyle } from "./Style/checkoutStyle"
import { useState } from "react"
function Checkout({ navigation }) {
    const [index, setIndex] = useState(1)
    let adds = () => {
        let num = index + 1
        setIndex(num);
        console.log(index);

    }
    let subs = () => {
        let num = index - 1
        setIndex(num);
        console.log(index);

    }
    return (
        <View>
            <View style={{ marginTop: 26, marginLeft: 26, marginRight: 36 }}>
                <View style={CheckoutStyle.MainContainer}>
                    <Image source={Logo2} style={{ width: "60%", height: "115%" }} />
                    <View style={CheckoutStyle.SearchAndMenu}>
                        <Image source={Union} style={{ marginRight: 30 }} />
                        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
                            <Image source={Menu} />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ marginTop: 50 }}>
                        <Text style={CheckoutStyle.Bag}>Your Bag</Text>
                    </View>
                    <View>
                        <View style={{ flexDirection: "row", }}>
                            <Image source={checkoutvarse} />
                            <View style={{ marginLeft: 0, marginTop: 10 }}>
                                <Text style={CheckoutStyle.Name}>Watermelon Peperomia</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <TouchableOpacity onPress={() => adds()}>
                                        <Image source={add} />
                                    </TouchableOpacity>
                                    <Text style={CheckoutStyle.Number}>{index}</Text>
                                    <TouchableOpacity onPress={() => subs()}>
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
                                    <TouchableOpacity onPress={() => adds()}>
                                        <Image source={add} />
                                    </TouchableOpacity>
                                    <Text style={CheckoutStyle.Number}>{index}</Text>
                                    <TouchableOpacity onPress={() => subs()}>
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
                                    <TouchableOpacity onPress={() => adds()}>
                                        <Image source={add} />
                                    </TouchableOpacity>
                                    <Text style={CheckoutStyle.Number}>{index}</Text>
                                    <TouchableOpacity onPress={() => subs()}>
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
                            <View style={{ marginLeft: 12 }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={CheckoutStyle.delivery}>Delivery</Text>
                                    <ImageBackground source={percent} style={{ width: 100, height: 5, marginLeft: 10 }}>
                                        <Image source={percent2} />
                                    </ImageBackground>
                                </View>
                                <Text style={[CheckoutStyle.Order]}>Order above ₹1200 to get</Text>

                                <Text style={CheckoutStyle.Order}> free delivery <Text style={{
                                    color: "#0D986A",
                                }}> Shop for more ₹190 </Text></Text>
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={CheckoutStyle.price}>$80</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 22 }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image source={apply} />
                            <Text style={CheckoutStyle.Apply}>Apply Coupon</Text>
                            <Image source={fullpercent} />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 30 }}>
                        <Text style={CheckoutStyle.Total}>Total</Text>
                        <Text style={CheckoutStyle.Total}>$1090</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 50 }}>
                        <Text style={CheckoutStyle.save}>Saved for later</Text>
                        <Text style={CheckoutStyle.save}>6 items</Text>
                    </View>
                    <View style={{ marginBottom: 80 }}>
                        <View style={{ flexDirection: "row", marginBottom: 20, marginTop: 20 }}>
                            <Image source={checkoutvarse4} />
                            <View style={{ marginLeft: 5, marginTop: 10 }}>
                                <Text style={CheckoutStyle.Name}>Large Snake Zylanica</Text>
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
                                    <Image source={save2} />
                                </TouchableOpacity>
                                <Text style={CheckoutStyle.price}>$600</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <TouchableOpacity style={{ position: "absolute", bottom: 25 }} onPress={() => navigation.navigate("Order")}>
                <Image source={footer} resizeMode="cover" />
                <View style={{ position: "absolute", flexDirection: "row", justifyContent: "space-between", width: "80%", marginLeft: 36, alignItems: "center", marginTop: 17 }}>
                    <Text style={CheckoutStyle.checkout}>Checkout</Text>
                    <Text style={CheckoutStyle.checkout}>$1090</Text>
                </View>
                {/* </ImageBackground> */}
            </TouchableOpacity>
        </View>
    )
}
export default Checkout