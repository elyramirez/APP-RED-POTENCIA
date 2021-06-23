import * as React from "react";

import { Alert,StyleSheet, View, Text, TextInput, TouchableOpacity, Offset } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



class CardScreen extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state={

  //   }
  // }
 

  render(){
    const alerta = ()=> Alert.alert("datos mandados= Pago por "
    // +this.state.checked
     )
  

  return (
    <KeyboardAwareScrollView 
    behavior={Platform.OS === 'ios' ? 'padding' : ''}
    keyboardVerticalOffset={Offset}>
    <View style={styles.container}>
      <View style={styles.textbox}>
       <Text style={styles.title}>Pago con Tarjeta</Text>
       <Text style={styles.amount}>Monto:</Text>
       <View style={styles.label}>
       <Text style={styles.text}>Nombre y Apellidos</Text>
      <TextInput data-openpay-card="holder_name" style={styles.input}> </TextInput>
      </View>
      <View style={styles.label}>
       <Text style={styles.text}>Numero de tarjeta</Text>
      <TextInput data-openpay-card="card_number" style={styles.input}> </TextInput>
      </View>
      <View style={styles.label}>
       <Text style={styles.text}>Expiración (Mes)</Text>
      <TextInput  data-openpay-card="expiration_month" style={styles.input}> </TextInput>
      </View>
      <View style={styles.label}>
       <Text style={styles.text}>Expiración (Año)</Text>
      <TextInput data-openpay-card="expiration_year" style={styles.input}> </TextInput>
      </View>
      <View style={styles.label}>
       <Text style={styles.text}>Cvv2</Text>
      <TextInput data-openpay-card="cvv2" style={styles.input}> </TextInput>
      </View>
      
      <View style={styles.buttonGreen}>
            <TouchableOpacity 
            
            onPress= {alerta
              // ()=>{
              //    this.state.checked === "card" ? this.props.navigation.navigate('CardScreen', {
              //     price
              //  }): 
              //    this.props.navigation.navigate('SupportScreen', {
              //       price
              //    });
              //  }
            }
             >
            
              <LinearGradient
                colors={["#08d4c4", "#01ab9d"]}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>Pagar</Text>
                {/* <MaterialIcons name="navigate-next" color="#fff" size={20} /> */}
              </LinearGradient>
            </TouchableOpacity>
          </View>

      </View>
    </View>
    </KeyboardAwareScrollView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textbox: {
    paddingTop: '10%'
  },
  label:{
    paddingTop: '5%',
    paddingBottom: '5%',
  },
  title: {
    fontFamily: "",
    fontSize: 14,
    color: "#121212",
    height: 34,
    width: 125,
    marginTop: '2%',
    marginLeft: '30%'
  },
  amount:{
    fontSize: 14,
    color: "#121212",
    height: 34,
    width: 125,
    marginTop: '2%',
    marginLeft: '10%'
  },
  text: {
    fontFamily: "",
    fontSize: 16,
    color: "#121212",
    height: 34,
    width: 200,
    marginTop: 9,
    marginLeft: 46
  },
  input: {
    color: "#121212",
    paddingRight: 5,
    fontSize: 20,
    alignSelf: "stretch",
    lineHeight: 16,
    marginLeft: 46,
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
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

export default CardScreen;
