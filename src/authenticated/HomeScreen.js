import { Text, View } from "react-native"
import { Image, TouchableOpacity, TextInput, ImageBackground, ScrollView, FlatList, } from "react-native";
import Logo2 from "../assets/Logo2.png"
import Menu from "../assets/Menu.png"
import Union from "../assets/Union.png"
import Banner from "../assets/Banner.png"
import Search from "../assets/Search.png"
import Filter from "../assets/Filter.png"
import filter2 from "../assets/filter2.png"
import bannerbg from "../assets/bannerbg.png"
import Foot from "../assets/foot.png"
import Varse from "../assets/varse.png"
import Heart from "../assets/Heart.png"
import Face from "../assets/face.png"
import Vector from "../assets/Vector.png"
import { HomeScreenStyle } from "./Style/HomeScreenStyle";
import Homebannar2 from "../assets/Homebannar2.png"
import homesage from "../assets/homesage.png"
import favoritess from "../assets/favoritess.png"
import bannnnnarr from "../assets/bannnnnarr.png"
import interiormediumlight from "../assets/interiormediumlight.png"
import AdVidPic from "../assets/AdVidPic.png"
import Layer27 from "../assets/Layer27.png"
import HomeLine from "../assets/HomeLine.png"
function HomeScreen({ navigation }) {
    const names = [
        {
            name: "Top Pick"
        },
        {
            name: "Top Pick"
        },
        {
            name: "Top Pick"
        },
        {
            name: "Top Pick"
        },
    ]
    const data = [
        {
            backgroundImage: bannerbg,
            text1: "Air Purifier",
            FootImage: Foot,
            VarseImage: Varse,
            price: "$400",
            Heart: Heart,
            Face: Face,
            text2: "Peperomia"
        }
    ]
    return (
        // <ScrollView style={{height:"100%"}}>
        <View style={{ marginLeft: 15, marginRight: 15, marginTop: 20 }}>
            <View style={HomeScreenStyle.MainContainer}>
                <Image source={Logo2} style={{ width: "60%", height: "125%" }} />
                <View style={HomeScreenStyle.SearchAndMenu}>
                    <Image source={Union} style={{ marginRight: 30 }} />
                    <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
                        <Image source={Menu} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={Banner} style={{ marginTop: 30 }} />
                <View style={{ flexDirection: "row", alignItems: "center", width: "100%", marginTop: 24 }}>
                    <View style={HomeScreenStyle.Searching}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image source={Search} style={{ marginRight: 24 }} />
                            <TextInput placeholder="Search" style={HomeScreenStyle.SearchInput} />
                        </View>
                        <Image source={filter2} />
                    </View>
                    <View style={HomeScreenStyle.FilterView}>
                        <Image source={Filter} />
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 24, marginBottom: 30 }}>
                    <TouchableOpacity>
                        <Text style={HomeScreenStyle.ScrollText}>Top Pick</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={HomeScreenStyle.Scroll}>
                        <Text style={HomeScreenStyle.ScrollText1}>Indoor</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={HomeScreenStyle.Scroll}>
                        <Text style={HomeScreenStyle.ScrollText1}>Outdoor</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={HomeScreenStyle.Scroll}>
                        <Text style={HomeScreenStyle.ScrollText1}>Seeds</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={HomeScreenStyle.Scroll}>
                        <Text style={HomeScreenStyle.ScrollText1}>Planters</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
                    <ImageBackground source={bannerbg} style={{ width: "100%", height: 200 }}>
                        <ImageBackground source={Vector} >
                            <View style={{ flexDirection: "row", height: "100%", marginBottom: 30 }}>
                                <View style={{ marginTop: 24, marginLeft: 24 }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                                            <Text style={HomeScreenStyle.Name}>Air Purifier</Text>
                                            <Image source={Foot} style={{ marginLeft: 27 }} />
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={HomeScreenStyle.Name2}>Peperomia</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 24, marginTop: 24 }}>
                                        <Text style={HomeScreenStyle.Price}>$400</Text>
                                        <Image source={Heart} style={{ marginRight: 18 }} />
                                        <Image source={Face} />
                                    </View>
                                </View>
                                <Image source={Varse} style={{ width: "35%", height: 120, marginLeft: 40, marginBottom: 30 }} />
                            </View>
                        </ImageBackground>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
                    <ImageBackground source={Homebannar2} style={{ width: "100%", height: 200, marginTop: 24 }}>
                        <ImageBackground source={Vector} >
                            <View style={{ flexDirection: "row", height: "100%", marginBottom: 30 }}>
                                <View style={{ marginTop: 24, marginLeft: 24 }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                                            <Text style={HomeScreenStyle.Name}>Air Purifier</Text>
                                            <Image source={Foot} style={{ marginLeft: 27 }} />
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={HomeScreenStyle.Name2}>Peperomia</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 24, marginTop: 24 }}>
                                        <Text style={HomeScreenStyle.Price}>$400</Text>
                                        <Image source={favoritess} style={{ marginRight: 18 }} />
                                        <Image source={Face} />
                                    </View>
                                </View>
                                <Image source={homesage} style={{ width: "35%", height: 120, marginLeft: 40, marginBottom: 30 }} />
                            </View>
                        </ImageBackground>
                    </ImageBackground>
                </TouchableOpacity>
                <Image source={bannnnnarr} style={{ marginTop: 24 }} />
                <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
                    <ImageBackground source={bannerbg} style={{ width: "100%", height: 200, marginTop: 24 }}>
                        <ImageBackground source={Vector} >
                            <View style={{ flexDirection: "row", height: "100%", marginBottom: 30 }}>
                                <View style={{ marginTop: 24, marginLeft: 24 }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                                            <Text style={HomeScreenStyle.Name}>Air Purifier</Text>
                                            <Image source={Foot} style={{ marginLeft: 27 }} />
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={HomeScreenStyle.Name2}>Peperomia</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 24, marginTop: 24 }}>
                                        <Text style={HomeScreenStyle.Price}>$400</Text>
                                        <Image source={favoritess} style={{ marginRight: 18 }} />
                                        <Image source={Face} />
                                    </View>
                                </View>
                                <Image source={interiormediumlight} style={{ width: "35%", height: 120, marginLeft: 40, marginBottom: 30 }} />
                            </View>
                        </ImageBackground>
                    </ImageBackground>
                </TouchableOpacity>
                <View style={{ marginTop: 24 }}>
                    <Image source={AdVidPic} style={{ width: "100%", height: 200 }} />
                    <Text style={HomeScreenStyle.HommeText}>Caring for plants should be fun. That’s why we offer 1-on-1 virtual consultations from the comfort of your home or office. </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
                    <ImageBackground source={Homebannar2} style={{ width: "100%", height: 200, marginTop: 24 }}>
                        <ImageBackground source={Vector} >
                            <View style={{ flexDirection: "row", height: "100%", marginBottom: 30 }}>
                                <View style={{ marginTop: 24, marginLeft: 24 }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                                            <Text style={HomeScreenStyle.Name}>Air Purifier</Text>
                                            <Image source={Foot} style={{ marginLeft: 27 }} />
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={HomeScreenStyle.Name2}>Peperomia</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 24, marginTop: 24 }}>
                                        <Text style={HomeScreenStyle.Price}>$400</Text>
                                        <Image source={favoritess} style={{ marginRight: 18 }} />
                                        <Image source={Face} />
                                    </View>
                                </View>
                                <Image source={Layer27} style={{ width: "35%", height: 120, marginLeft: 40, marginBottom: 30 }} />
                            </View>
                        </ImageBackground>
                    </ImageBackground>
                </TouchableOpacity>
                <Image source={HomeLine} style={{ marginTop: 20 }} />
                <Text style={HomeScreenStyle.HOmePlant}>Plant a Life</Text>
                <Text style={HomeScreenStyle.Living}>Live amongst Living</Text>
                <Text style={HomeScreenStyle.joy}>Spread the joy</Text>
            </ScrollView>
        </View>
    )
}
export default HomeScreen