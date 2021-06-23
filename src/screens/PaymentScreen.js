import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  Image,
  Alert
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
import { RadioButton } from "react-native-paper";


class PaymentScreen extends React.Component {

  constructor(props){
    super(props);
    this.state={checked: ""
    
    }
  }
  goBack = () => {
    this.props.navigation.goBack();
  };
  render() {
    const { checked } = this.state;
    const {price,gigas,minutes,messages}= this.props.route.params;
    const alerta = ()=> Alert.alert("datos mandados= Pago por "+this.state.checked +price)
    return (
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingTop: 20 }}>
          <View style={styles.card}>
            <View style={styles.container}>
              <View style={styles.itemOne}>
                <Text>Resumen del Plan</Text>
              </View>
              <View style={styles.itemTwo}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 13, marginTop: -20 }}
                >
                  {JSON.stringify(price)}{"\n"}
                  {gigas}{"\n"}
                  {minutes}{"\n"}
                  {messages}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ paddingTop: 20 }}>
          <View style={styles.card}>
            <View style={styles.container}>
              <View style={styles.itemOne}>
                <Image
                  style={styles.profileImg}
                  source={require("../../assets/cards.jpeg")}
                />
              </View>
              <View style={styles.itemTwo}>
                <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>Pago con tarjeta</Text>
              </View>
              <View style={styles.itemThree}>
                <RadioButton
                  value="card"
                  status={checked === "card" ? "checked" : "unchecked"}
                  onPress={() => {
                    this.setState({ checked: "card" });
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        {/*  */}
        <View style={{ paddingTop: 20 }}>
          <View style={styles.card}>
            <View style={styles.container}>
              <View style={styles.itemOne}>
                <Image
                  style={styles.profileImg}
                  source={require("../../assets/spei.png")}
                />
              </View>
              <View style={styles.itemTwo}>
                <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>Pago con SPEI</Text>
              </View>
              <View style={styles.itemThree}>
                <RadioButton
                  value="spei"
                  status={checked === "spei" ? "checked" : "unchecked"}
                  onPress={() => {
                    this.setState({ checked: "spei" });
                  }}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={{ paddingTop: 20 }}>
          <View style={styles.card}>
            <View style={styles.container}>
              <View style={styles.itemOne}>
                <Image
                  style={styles.profileImg}
                  source={require("../../assets/paynet.png")}
                />
              </View>
              <View style={styles.itemTwo}>
                <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>Pago en Tienda de Autoservicio</Text>
              </View>
              <View style={styles.itemThree}>
                <RadioButton
                  value="store"
                  status={checked === "store" ? "checked" : "unchecked"}
                  onPress={() => {
                    this.setState({ checked: "store" });
                  }}
                ></RadioButton>
              </View>
            </View>
          </View>
        </View>

        
          <View style={styles.buttonGreen}>
            <TouchableOpacity 
            
            onPress= {
              ()=>{
                 this.state.checked === "card" ? this.props.navigation.navigate('CardScreen', {
                  price
               }): 
                 this.props.navigation.navigate('SupportScreen', {
                    price
                 });
               }
            }
             >
            
              <LinearGradient
                colors={["#08d4c4", "#01ab9d"]}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>Pagar</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
       

        
          <View style={styles.buttonGreen}>
            <TouchableOpacity 
            onPress={this.goBack}>
              <LinearGradient
                colors={["#08d4c4", "#01ab9d"]}
                style={styles.signIn}
              >
                {/* <MaterialIcons name="navigate-before" color="#fff" size={20} /> */}
                <Text style={styles.textSign}>Regresar</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 20,
    paddingLeft: 15,
  },
  button: {
    marginTop: 5,
    borderRadius: 60,
  },
  card: {
    height: 90,
    width: "93%",
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 10,
    paddingTop: 8,
  },
  profileImg: {
    width: 50,
    height: 30,
    borderRadius: 20,
  },
  itemOne: {
    width: "30%",
    alignItems: "center",
  },
  itemTwo: {
    width: "40%",
    alignItems: "center",
  },
  itemThree: {
    width: "30%",
    alignItems: "center",
  },
  buttonGreen: {
    alignItems: "center",
    marginTop: 30,
  },
  signIn: {
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});

export default PaymentScreen;