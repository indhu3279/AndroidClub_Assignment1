import React, { useState } from "react";
import Navbar from "./Navbar.js"
import { ImageBackground } from "react-native";
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from "react-native";
const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {
    console.log("username", username);
    console.log("password", password);
  };

  return (
      <View style={styles.container}>
        <Text style={styles.title}>LOGIN</Text>
        <TextInput
          style={styles.input}
          placeholder="USERNAME"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="PASSWORD"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "purple",
  },
  button: {
    backgroundColor: "brown",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    paddingHorizontal: 100,
    paddingVertical: 5,
  },
  input: {
    width: "100%",
    borderBottomWidth: 2,
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default function App() {
  return <LoginScreen />;
}