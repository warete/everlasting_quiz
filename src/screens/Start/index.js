import * as React from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from "react-native";
import { ApplicationTheme} from "../../config/theme";

export default function Start({ navigation }) {
  const data = [];
  for (let i = 1; i <= 5; i++) {
    data.push(`Тематика ${i}`);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>
        Выберите тематику
      </Text>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.variantBtn} onPress={() => navigation.navigate("Home")}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '20%'
  },
  h1: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  variantBtn: {
    backgroundColor: ApplicationTheme.colors.primary,
    padding: 10,
    width: "100%",
    alignItems: "center",
    borderTopColor: '#fff',
    borderTopWidth: 1,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
  list: {
    marginTop: 40
  }
});
