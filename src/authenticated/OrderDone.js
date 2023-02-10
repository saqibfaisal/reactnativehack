import { Image, Text, TouchableOpacity, View } from "react-native"
import { OrderDoneStyle } from "./Style/OrderDoneStyle"
import Back from "../assets/Back.png";
import OrderDones from "../assets/OrderDones.png";
import OrderDone2 from "../assets/OrderDone2.png";
function OrderDone({navigation}) {
    return (
        <View style={{ marginTop: 24 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={Back} />
                </TouchableOpacity>
                <Image source={OrderDones} />
            </View>
            <View>
                <Text style={OrderDoneStyle.OrderRecevied}>
                    Order
                </Text>
                <Text style={OrderDoneStyle.OrderRecevied}>
                    Received
                </Text>
            </View>
            <View>
                <Text style={OrderDoneStyle.Id}>Order ID : #293092309</Text>
            </View>
            <View style={{ marginTop: 50, justifyContent: "center", alignItems: "center" }}>
                <Image source={OrderDone2} />
            </View>
            <TouchableOpacity style={OrderDoneStyle.DoneView}>
                <Text style={OrderDoneStyle.Done}>Done</Text>
            </TouchableOpacity>
        </View>
    )
}
export default OrderDone