import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Desinyo} from "./Desinyo";

import default function App(){
  const [ngan, setNgan]= useState("Imong ngan: ");
  return (
    <View style=(Desinyo.container)>
      <TextInput
      placeholder='Butangi'
      onChangeText={(ambot) => setNgan (ambot)}
      style={Desinyo.cube}/>
      <Text style={Desinyo.text}>Mensahe para {ngan}<Text/>
      <Text/>
      <Chikata tao="Nesa" chika= "Maldita"/>
      </View>
      
    );
}

const Chikata = {(tao,chika)} =>
<View>
  <Text style={Desinyo.text}>
    {tao} : {chika}
    </Text>
</View>
