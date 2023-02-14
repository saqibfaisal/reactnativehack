import { Image, Text, TouchableOpacity, View } from "react-native"
import { OrderDoneStyle } from "./Style/OrderDoneStyle"
import Back from "../assets/Back.png";
import OrderDones from "../assets/OrderDones.png";
import OrderDone2 from "../assets/OrderDone2.png";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { add, remove, removeAllInstance } from "../redux/reducer/cartSlice"
import { useDispatch, useSelector } from "react-redux";
function OrderDone({ navigation }) {
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();
    // const [totalPrice, setTotalPrice] = useState(0);
    const favouriteProducts = useSelector(state => state.favourites);

    console.log(favouriteProducts);
    let orderDones = () => {
        [...new Set(cartItems)].map((x, i) =>
            dispatch(removeAllInstance(x))
        )
        showMessage({
            message: 'Your Order is Done',
            type: 'success',
            duration: 2000,
            autoHide: true,
        });
        return <FlashMessage />
    }
    return (
        <View style={{ marginTop: 24 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
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
            <TouchableOpacity style={OrderDoneStyle.DoneView} onPress={() => orderDones()}>
                <Text style={OrderDoneStyle.Done}>Done</Text>
            </TouchableOpacity>
        </View>
    )
}
export default OrderDone