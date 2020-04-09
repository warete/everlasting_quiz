import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Button } from 'react-native';
import { ApplicationTheme} from "../../config/theme";


export default function Main({ navigation }) {
  navigation.setOptions({
    headerLeft: () => (
      <Button onPress={() => navigation.navigate("Info")} title="Info" />
    ),
    headerRight: () => <Text>Счет</Text>
  });
  return (
    <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate("Start")}>
      <Text style={styles.startText}>Начать викторину!</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  startBtn: {
    backgroundColor: ApplicationTheme.colors.primary,
    borderRadius: 50,
    padding: 10,
    width: "50%",
    alignItems: "center",
    marginTop: 50
  },
  startText: {
    color: "white"
  },
  infoBtn: {
    fontWeight: 'bold'
  }
});
