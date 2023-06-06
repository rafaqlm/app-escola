import React from 'react';
import {StyleSheet, Image} from 'react-native';

const Logo = () =>{
  return <Image style={styles.image} source={require('../assets/logo.png')} />
};

const styles = StyleSheet.create({
 image:{
    width: 128,
    height: 128,
    borderRadius: 0
  },
});

export default Logo;