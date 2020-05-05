import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {calcGenetic} from './src/genetic';
import {numberize} from './src/mathFunctions.js';


export default function App() {
  const [coeffs, setCoeffs] = useState({
    a: '',
    b: '',
    c: '',
    d: '',
    y: '',
  });
  
  const inputCall = (value, type) =>
  ({
    a: () => setCoeffs({...coeffs, a: value}),
    b: () => setCoeffs({...coeffs, b: value}),
    c: () => setCoeffs({...coeffs, c: value}),
    d: () => setCoeffs({...coeffs, d: value}),
    y: () => setCoeffs({...coeffs, y: value}),
  }[type]());
  
  const onChange = (value, type) => inputCall(value, type);


  const clickHandler = () => {
    alert(`Resulting value:\n\t${calcGenetic(numberize(coeffs))}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Labowork 3.3</Text>
        <Text style={styles.text}>Genetic Algorithm</Text>
      </View>
      <TextInput      
        style={styles.input}
        placeholder="'a' value"
        keyboardType='number-pad'
        onChangeText={text => onChange(text, 'a')}
        value = {coeffs.a}/>
      <TextInput      
        style={styles.input}
        placeholder="'b' value"
        keyboardType='number-pad'
        onChangeText={text => onChange(text, 'b')}
        value = {coeffs.b}/>
      <TextInput      
        style={styles.input}
        placeholder="'c' value"
        keyboardType='number-pad'
        onChangeText={text => onChange(text, 'c')}
        value = {coeffs.c}/>
      <TextInput      
        style={styles.input}
        placeholder="'d' value"
        keyboardType='number-pad'
        onChangeText={text => onChange(text, 'd')}
        value = {coeffs.d}/>
      <TextInput      
        style={styles.input}
        placeholder="'y' value"
        keyboardType='number-pad'
        onChangeText={text => onChange(text, 'y')}
        value = {coeffs.y}/>
      <Button title='Calculate' onPress={clickHandler}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 20
  },
  header: {
    marginTop: 50,
    marginBottom: 50,
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    marginTop: 10,
    marginBottom: 10,
    width: 400
  }
});