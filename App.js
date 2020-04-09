import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import screens from "./src/config/screens";

import { ApplicationTheme } from "./src/config/theme";

const Stack = createStackNavigator();

function ScreenLayout(props) {
  return (
    <View style={styles.container}>
      {React.cloneElement(props.children, props)}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={ApplicationTheme}>
      <Stack.Navigator
        screenOptions={{
          headerLeftContainerStyle: {
            marginLeft: '5%'
          },
          headerRightContainerStyle: {
            marginRight: '5%'
          }
        }}
      >
        {screens.map((item, i) => (
          <Stack.Screen
            name={item.name}
            options={item.options}
            headerMode='screen'
            key={i}
          >
            {props => <ScreenLayout {...props}>{item.component}</ScreenLayout>}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30
  }
});
