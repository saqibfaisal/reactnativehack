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
function HomeScreen() {
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
                <Image source={Logo2} style={{ width: "60%", height: "100%" }} />
                <View style={HomeScreenStyle.SearchAndMenu}>
                    <Image source={Union} style={{ marginRight: 30 }} />
                    <TouchableOpacity>
                        <Image source={Menu} />
                    </TouchableOpacity>
                </View>
            </View>
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
            {/* <FlatList  horizontal={true} data={names} renderItem={({ item, index }) => {
                return ( */}
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
            {/* )
            }} /> */}
            {/* <FlatList data={data} renderItem={({ item, index }) => {
                return ( */}
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style-={{ width: "100%", height: "100%" }}>
                    <ImageBackground source={bannerbg} style={{ width: "90%", height: "90%" }}>
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
                                <Image source={Varse} style={{ width: "35%", height: "65%", marginLeft: 40, marginBottom: 30 }} />
                            </View>
                        </ImageBackground>
                    </ImageBackground>
                </View>
            </ScrollView>
            {/* )
            }} /> */}

        </View>
        // </ScrollView>
    )
}
export default HomeScreen