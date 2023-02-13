import { ActivityIndicator, Text, View } from "react-native"
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
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { add } from '../redux/reducer/cartSlice';
import { addFavourite } from '../redux/reducer/favouriteProdSlice';
import { BACKEND_URL } from "../../config";
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
    const [plants, setPlants] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const getPlants = () => {
        axios
            .get(`${BACKEND_URL}/api/plants`)
            .then(res => {
                // console.log(res.data);
                setErrorMessage(null);
                setPlants(res.data.plants);
                // console.log(plants);
            })
            .catch(err => {
                setErrorMessage(err.message);
                console.log(err.message);
            });
    };

    const dispatch = useDispatch();
    useEffect(() => {
        getPlants();
    }, []);
    return (
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
                {plants && plants.length > 0 ? (
                    plants.map((plant, i) => (
                        <TouchableOpacity style={{ marginTop: 10 }} key={i} onPress={() => navigation.navigate('Favorite', plant)}>
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
                                                <Text style={HomeScreenStyle.Name2}>{plant.name}</Text>
                                            </View>
                                            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 24, marginTop: 24 }}>
                                                <Text style={HomeScreenStyle.Price}>${plant.price}</Text>
                                                <TouchableOpacity onPress={() => dispatch(addFavourite(plant))}>
                                                    <Image source={Heart} style={{ marginRight: 18 }} />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => dispatch(add(plant))}>
                                                    <Image source={Face} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <Image source={{ uri: plant.image }} style={{ width: "35%", height: 120, marginLeft: 30, marginBottom: 30 }} />
                                    </View>
                                </ImageBackground>
                            </ImageBackground>
                        </TouchableOpacity>
                    ))
                ) : errorMessage ? (
                    <View style={{ width: 400 }}>
                        <Text style={{ color: 'red', textAlign: 'center', fontWeight: '700' }}>
                            {errorMessage}
                        </Text>
                    </View>
                ) : (
                    <ActivityIndicator size={30} color={"#0D986A"} />
                )}
                <Image source={bannnnnarr} style={{ marginTop: 24 }} />
                <View style={{ marginTop: 24 }}>
                    <Image source={AdVidPic} style={{ width: "100%", height: 200 }} />
                    <Text style={HomeScreenStyle.HommeText}>Caring for plants should be fun. That’s why we offer 1-on-1 virtual consultations from the comfort of your home or office. </Text>
                </View>
                <Image source={HomeLine} style={{ marginTop: 20 }} />
                <Text style={HomeScreenStyle.HOmePlant}>Plant a Life</Text>
                <Text style={HomeScreenStyle.Living}>Live amongst Living</Text>
                <Text style={HomeScreenStyle.joy}>Spread the joy</Text>
            </ScrollView>
        </View>
    )
}
export default HomeScreen