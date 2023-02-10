import { Image, ImageBackground, Text, View, TouchableOpacity, ScrollView, FlatList } from "react-native"
import FavoriteBg from "../assets/FavoriteBg.png"
import Logo2 from "../assets/Logo2.png"
import Menu from "../assets/Menu.png"
import bgLine from "../assets/bgLine.png"
import Search from "../assets/Search.png"
import { FavoriteStyle } from "./Style/Favorite"
import Foot from "../assets/foot.png"
import Face from "../assets/face.png"
import HeartGroup from "../assets/HeartGroup.png"
import sage from "../assets/sage.png"
import Water from "../assets/water.png"
import Sun from "../assets/Sun.png"
import dot from "../assets/dot.png"
import sage222 from "../assets/sage222.png"
import Vedio from "../assets/Vedio.png"
import Books from "../assets/Books.png"
import favoriteBannar from "../assets/favoriteBannar.png"
import Favoritebanna2 from "../assets/Favoritebanna2.png"
import foot from "../assets/foot.png"
import Heart from "../assets/Heart.png"
import varse from "../assets/varse.png"
import favoritevarse from "../assets/favoritevarse.png"
import favoritess from "../assets/favoritess.png"
import BackgroundLine from "../assets/BackgroundLine.png"
import Favoritebg3 from "../assets/Favoritebg3.png"
import AIScan from "../assets/AIScan.png"
import footer from "../assets/footer.png"
import footer2 from "../assets/footer2.png"
import footer3 from "../assets/footer3.png"
function Favorite({ navigation }) {
    const Images = [
        {
            Image: Vedio
        },
        {
            Image: Books
        },
        {
            Image: sage222
        }
    ]
    const data = [
        {
            favoriteBannar: favoriteBannar,
            BackgroundLine: BackgroundLine,
            AirPurifier: "Air Purifier",
            foot: foot,
            Peperomia: "Peperomia",
            Pirce: "$400",
            Heart: Heart,
            varse: varse
        },
        {
            favoriteBannar: Favoritebanna2,
            BackgroundLine: BackgroundLine,
            AirPurifier: "Air Purifiernbgh",
            foot: foot,
            Peperomia: "Cactus",
            Pirce: "$260",
            Heart: favoritess,
            varse: favoritevarse
        }
    ]
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                <ImageBackground source={FavoriteBg} >
                    <ImageBackground source={bgLine}>
                        <View style={{ marginLeft: 25, marginRight: 25, marginTop: 20, position: "relative" }}>
                            <View style={FavoriteStyle.MainContainer}>
                                <Image source={Logo2} style={{ width: "55%", height: "120%" }} />
                                <View style={FavoriteStyle.SearchAndMenu}>
                                    <Image source={Search} style={{ marginRight: 30 }} />
                                    <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
                                        <Image source={Menu} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={FavoriteStyle.MainView}>
                                <Text style={FavoriteStyle.MAinText}>Air Purifier</Text>
                                <Image source={Foot} style={{ marginLeft: 27 }} />
                            </View>
                            <View style={{ marginTop: 11 }}>
                                <Text style={FavoriteStyle.name}>
                                    Watermelon Peperomia
                                </Text>
                            </View>
                            <View style={{ marginTop: 24 }}>
                                <Text style={FavoriteStyle.price}>Price</Text>
                                <Text style={FavoriteStyle.number}>$350</Text>
                                <Text style={FavoriteStyle.Size}>Size</Text>
                                <Text style={FavoriteStyle.Height}>5” h</Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 34 }}>
                                <Image source={Face} />
                                <Image source={HeartGroup} style={{ marginLeft: 20 }} />
                            </View>
                            <Image source={sage} style={{ width: "100%", height: "70%", position: "absolute", marginTop: 155, marginLeft: 70 }} />
                        </View>
                    </ImageBackground>
                </ImageBackground>
                <View style={{ marginTop: 52, marginLeft: 30 }}>
                    <View>
                        <Text style={FavoriteStyle.Overview}>Overview</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "flex-start", marginTop: 20 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={Water} />
                            <View style={{ marginLeft: 14 }}>
                                <Text style={FavoriteStyle.ML}>250ml</Text>
                                <Text style={FavoriteStyle.water}>Water</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginLeft: 30, }}>
                            <Image source={Sun} />
                            <View style={{ marginLeft: 14 }}>
                                <Text style={FavoriteStyle.ML}>35-40%</Text>
                                <Text style={FavoriteStyle.water}>Light</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginLeft: 30, }}>
                            <Image source={dot} />
                            <View style={{ marginLeft: 14 }}>
                                <Text style={FavoriteStyle.ML}>250gm</Text>
                                <Text style={FavoriteStyle.water}>Fertilizer</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 40 }}>
                        <Text style={FavoriteStyle.Overview}>Plant Bio</Text>
                    </View>
                    <View>
                        <Text style={FavoriteStyle.Plant}>No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.</Text>
                    </View>
                    <FlatList horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled data={Images} renderItem={({ item, index }) => {
                        return (

                            <View style={{ flexDirection: "row", marginTop: 33.62 }}>
                                <Image source={item.Image} style={{ marginRight: 14 }} />
                            </View>
                        )
                    }} />
                    <View style={{ marginTop: 20 }}>
                        <Text style={FavoriteStyle.Similar}>Similar Plants</Text>
                    </View>
                    <View style={{ flex: 1, }}>
                        <FlatList horizontal={true} data={data} showsHorizontalScrollIndicator={false} renderItem={({ item, index }) => {
                            return (
                                <ImageBackground source={item.favoriteBannar} resizeMode="contain" style={{ height: 140, width: 200, marginRight: 20, marginTop: 40, }}>
                                    <ImageBackground source={item.BackgroundLine} style={{ width: "100%", height: "100%" }}>
                                        <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 15, paddingBottom: 20, justifyContent: "space-between", marginRight: 14 }}>
                                            <View >
                                                <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                                                    <Text style={FavoriteStyle.Air}>{item.AirPurifier}</Text>
                                                    <Image source={item.foot} style={{ marginLeft: 19 }} />
                                                </View>
                                                <View>
                                                    <Text style={FavoriteStyle.Peperomia}>{item.Peperomia}</Text>
                                                </View>
                                                <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                                                    <Text>{item.Pirce}</Text>
                                                    <Image source={item.Heart} />
                                                </View>
                                            </View>
                                            <Image source={item.varse} style={{ width: "40%", height: 100, }} />
                                        </View>
                                    </ImageBackground>
                                </ImageBackground>
                            )
                        }} />
                    </View>
                </View>
                <View style={{ marginTop: 35, marginBottom: 70 }}>
                    <ImageBackground source={Favoritebg3}>
                        <View style={{ flexDirection: "row", marginTop: 30, marginBottom: 25, marginLeft: 25, marginRight: 25, justifyContent: "space-around" }}>
                            <View style={{ width: 150, marginRight: 10 }}>
                                <Text style={FavoriteStyle.explain}>That very plant?</Text>
                                <Text style={FavoriteStyle.Para}>Just Scan and the AI will know exactly</Text>
                                <TouchableOpacity style={FavoriteStyle.scanView}>
                                    <Text style={FavoriteStyle.Scan}>Scan Now</Text>
                                </TouchableOpacity>
                            </View>
                            <Image source={AIScan} style={{ width: "50%", height: 150 }} />
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
            <TouchableOpacity onPress={()=>navigation.navigate("Checkout")} style={{ position: "absolute", bottom: 0 }}>
                <Image source={footer} resizeMode="cover" />
                <View style={{ position: "absolute", flexDirection: "row", justifyContent: "space-between", width: "80%", marginLeft: 36, alignItems: "center", marginTop: 17 }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={footer3} />
                        <Text style={FavoriteStyle.checkout}>View 3 items</Text>
                    </View>
                    <Text style={FavoriteStyle.checkouts}>$1000</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default Favorite