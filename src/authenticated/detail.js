import React from 'react';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/reducer/cartSlice';
import { removeAllInstance } from '../redux/reducer/favouriteProdSlice';
import bannerbg from "../assets/bannerbg.png"
import Foot from "../assets/foot.png"
import Face from "../assets/face.png"
import Vector from "../assets/Vector.png"
import Heart from "../assets/Heart.png"
import { HomeScreenStyle } from "./Style/HomeScreenStyle";
import { FavoriteStyle } from './Style/Favorite';
import footer from "../assets/footer.png"
import footer3 from "../assets/footer3.png"
export default function Detail({ navigation }) {
  const favouriteProducts = useSelector(state => state.favourites);
  const dispatch = useDispatch();

  console.log(favouriteProducts.name);

  return (
    <ScrollView style={{ backgroundColor: '#EFFFF4', }}>
      <View style={{ marginHorizontal: 30, marginTop: 35 }}>
        <Text
          style={{
            fontSize: 44,
            color: "#0D986A",
            fontWeight: '900',
          }}>
          Your Favourites
        </Text>
      </View>
      <View style={{ marginLeft: 15, marginRight: 15, marginTop: 20 }}>

        {favouriteProducts && favouriteProducts.length > 0 ? (
          [...new Set(favouriteProducts)].map((favProd, i) => (
            <TouchableOpacity style={{ marginTop: 10 }} key={i} onPress={() => navigation.navigate('Favorite', favProd)}>
              <ImageBackground source={bannerbg} style={{ width: "100%", height: 200 }}>
                <ImageBackground source={Vector} >
                  <View style={{ flexDirection: "row", height: "100%", marginBottom: 30 }}>
                    <View style={{ marginTop: 24, marginLeft: 24 }}>
                      <View style={{ flexDirection: "row" }}>
                        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                          <Text style={HomeScreenStyle.Name}>{favProd.category}</Text>
                          <Image source={Foot} style={{ marginLeft: 27 }} />
                        </View>
                      </View>
                      <View>
                        <Text style={HomeScreenStyle.Name2}>{favProd.name}</Text>
                      </View>
                      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 24, marginTop: 24 }}>
                        <Text style={HomeScreenStyle.Price}>${favProd.price}</Text>
                        <TouchableOpacity onPress={() => dispatch(removeAllInstance(favProd))}>
                          <Image source={Heart} style={{ marginRight: 18 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => dispatch(add(favProd))}>
                          <Image source={Face} />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Image source={{ uri: favProd.image }} style={{ width: "35%", height: 120, marginLeft: 40, marginBottom: 30 }} />
                  </View>
                </ImageBackground>
              </ImageBackground>
            </TouchableOpacity>
          ))
        ) : (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 600,
            }}>
            <Text style={{ fontSize: 20, color: 'grey' }}>NO FAVOURITES YET</Text>
          </View>
        )}
      </View>
      {/* <TouchableOpacity onPress={() => navigation.navigate("Checkout")} style={{ position: "absolute", bottom: 0 }}>
        <Image source={footer} resizeMode="cover" />
        <View style={{ position: "absolute", flexDirection: "row", justifyContent: "space-between", width: "80%", marginLeft: 36, alignItems: "center", marginTop: 17 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={footer3} />
            <Text style={FavoriteStyle.checkout}>View 1 items </Text>
          </View>
          <Text style={FavoriteStyle.checkouts}>${price}</Text>
        </View>
      </TouchableOpacity> */}
    </ScrollView>
  );
}
