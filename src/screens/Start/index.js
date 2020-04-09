import * as React from 'react';
import { View, FlatList, Text, StyleSheet } from "react-native";

export default function Start(props) {
  const data = [];
  for (let i = 1; i <= 5; i++) {
    data.push(`Тематика ${i}`);
  }
  return (
    <View>
      <Text style={styles.h1}>
        Выберите тематику
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={item => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
