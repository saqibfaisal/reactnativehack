import { Image, ImageBackground, Text, View, TouchableOpacity, ScrollView } from "react-native"
import FavoriteBg from "../assets/FavoriteBg.png"
import Logo2 from "../assets/Logo2.png"
import Menu from "../assets/Menu.png"
import Union from "../assets/Union.png"
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
function Favorite() {
    return (
        <ScrollView >
            <ImageBackground source={FavoriteBg} >
                <ImageBackground source={bgLine}>
                    <View style={{ marginLeft: 25, marginRight: 25, marginTop: 20, position: "relative" }}>
                        <View style={FavoriteStyle.MainContainer}>
                            <Image source={Logo2} style={{ width: "55%", height: "120%" }} />
                            <View style={FavoriteStyle.SearchAndMenu}>
                                <Image source={Search} style={{ marginRight: 30 }} />
                                <TouchableOpacity>
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
            </View>
        </ScrollView>
    )
}
export default Favorite