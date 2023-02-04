import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
export const LoginStyle = StyleSheet.create({
  heading: {
    backgroundColor: 'darkblue',
    fontSize: 30,
    padding: 10,
    textAlign: 'center',
    fontWeight: '600',
    color: 'white',
},
txtField: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 15,
},
shadow: {
    width: '100%',
    elevation: 12,
    shadowColor: 'grey',
    overflow: 'hidden',
    backgroundColor: 'white',
    marginBottom: 15,
    borderRadius: 12,
    marginTop:10
},
btn: {
    backgroundColor: '#6c757d',
    // width: '100%',
    width: wp('80%'),
    borderRadius: 20,
    padding: 12,
    // paddingHorizontal: 10,
    marginVertical: 15,
    alignItems: 'center',
    
},
label: {
    fontSize: 15,
    marginTop: 20,
    marginBottom: 8,
    fontWeight: '600',
}
});