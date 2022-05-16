/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
  Pressable,
} from 'react-native';


import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';


import { parseIconName } from 'react-native-fontawesome';


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
        <View style={styles.container}>

          <View style={styles.backgroundContainer}>
            <ImageBackground 
              style={styles.backgroundImage} 
              source={require('./assets/images/dream.jpg')} 
            />

              <View style={styles.titleWrap}>
              <Image
                style={styles.image}
                source={require('./assets/images/logo.png')}/>
              </View>

              <View style={styles.inputWrapper}>

                <View style={styles.inputView}>
                  <TextInput
                    style={styles.textInput}
                    placeholder='Enter Email'
                    placeholderTextColor='black'
                    onChangeText={(email) => setEmail(email)}
                  />
                </View>
                
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.textInput}
                    placeholder='Enter Password'
                    placeholderTextColor='black'
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                  />
                </View>

                <TouchableOpacity 
                  style={styles.loginButton}
                  onPress={() => Alert.alert('Login Successful')}>
                  <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={styles.forgotButton}>Forgot Password?</Text>
                </TouchableOpacity>

                {/* <Button
                  style={styles.loginButton}
                  title='Login'
                  color='#db6303'
                  onPress={() => Alert.alert('Simple Button pressed')}
                /> */}
              </View>

              <View style={styles.signupWrapper}>
                <Text style={styles.signupText}>or sign in with:</Text>
                <View style={styles.signupIcons}>

                    <FontAwesome icon={BrandIcons.facebook} style={styles.icons}/>
                    <FontAwesome icon={BrandIcons.google} style={styles.icons}/>
                    <FontAwesome icon={BrandIcons.twitter} style={styles.icons}/>
                  
                </View>
              </View>

              <View style={styles.signupTexts}>
                <TouchableOpacity>
                  <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
                </TouchableOpacity>
              </View>

              
          </View>
          <StatusBar style="auto" />
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 0,
    borderColor: 'red',
  },

  backgroundContainer: {
    width: '100%',
    height: '100%',
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    opacity: 0.3,
  },

  image:{
    width:'50%',
    height: '50%',
  },

  titleWrap:{
    marginTop:'30%',
    width: '100%',
    alignItems: 'center',
    height: 150,
  },

  title: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },

  inputWrapper: {
    alignItems: 'center',
    width: '100%'
  },

  inputView: {
    backgroundColor: 'transparent',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#db6303',
  },
  
  textInput: {
    padding: 10,
  },

  forgotButton: {
    height: 30,
    marginBottom: 30,
    alignItems: 'center',
  },
 
  loginButton: {
    width: '70%',
    borderRadius: 25,
    height: 45,
    alignItems: 'center',
    backgroundColor: '#DB6303',
    padding: 10,
    marginBottom: 10,
  },

  loginText: {
    fontSize: 15,
    fontWeight: '500',
  },

  signupWrapper: {
    width: '100%',
    flex: 2,
    alignItems: 'center',
  },

  signupText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 20,
  },

  signupTexts: {
    flex: 3,
    fontSize: 15,
    fontWeight: '500',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  signupIcons: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },

  icons: {
    fontSize: 40,
    padding: 10,
  },

});

export default App;
