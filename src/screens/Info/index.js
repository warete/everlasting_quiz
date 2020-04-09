import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Info(props) {
  return (
    <View>
      <Text style={styles.h1}>
        Что такое Quiz?
      </Text>
      <Text>
        Квиз (Викторина) - игра, заключающаяся в ответах на вопросы из различных областей знания. Отвечайте правильно
        как можно больше, ставьте новые рекорды в каждой из тематик! Тематики сменяются раз в 3 дня, скучно не будет!
      </Text>
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
