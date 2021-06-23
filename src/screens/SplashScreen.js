import React from 'react';
import { 
    View, 
    Text, 
    ImageBackground,
    Button,
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}) => {
    

    return (
       <View style={styles.container}>
         <ImageBackground source={require('../../assets/background.jpeg')}
               style={styles.bckg}>
           <View style={styles.header}>
               <Animatable.Image
                animation="bounceIn"
                duraton= '3000'
               source={require('../../assets/logo.png')}
               style={styles.logo}
               resizeMode="stretch"
               />
               <Text style={styles.header_red}>Red</Text>
               <Text style={styles.header_title}>Potencia</Text>
           </View>
           <Animatable.View 
             style={styles.footer}
             animation="fadeInUpBig"
             >
               <Text style={styles.title}>LA COBERTURA MÁS AMPLIA EN TODO MÉXICO</Text>
               <View style={styles.button}>
               <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                   <LinearGradient
                   colors={['#08d4c4', '#01ab9d']}
                   style={styles.signIn}
                   >
                   <Text style={styles.textSign}>Entrar</Text>       
                   </LinearGradient>
           </TouchableOpacity>
           </View>
           </Animatable.View>
           </ImageBackground>
       </View>
    );
};

const {height} = Dimensions.get("screen");
//const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    // backgroundColor: '#009387'
  },
  bckg:{
    flex: 2,
      justifyContent: 'center',
  },
  header_red:{
    flexDirection: 'row',
    alignSelf:'flex-start',
    paddingLeft:125,
    paddingTop: 10,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',  
  },
  header_title:{
    
    fontSize: 38,
    fontWeight: 'bold',
    color: '#fff',
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      marginTop:15
    //   width: height_logo,
    //   height: height_logo   #01ab9d
  },
  title: {
      color: '#01ab9d',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});


export default SplashScreen;