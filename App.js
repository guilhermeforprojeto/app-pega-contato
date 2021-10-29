import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Button, Alert } from "react-native";




const UselessTextInput = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [button, onPress] = React.useState(null)

  function recebeDados (){
      console.log(number)
      console.log(text)
      Alert.alert("Obrigado "+text+","+" Dados Enviados!")

  }

  

  return (
    <SafeAreaView>

      <Text>-</Text>
      <Text>-</Text>
      <Text>-</Text>
      <Text style={styles.text}>APP PEGA CONTATO</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Digite aqui o nome"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Digite aqui o contato"
        keyboardType="numeric"
      />
     <Button
        onPress={recebeDados}
        title="Enviar!"
        color="#000000"
        
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 25,

  }
});

export default UselessTextInput;