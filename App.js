import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { Appbar } from 'react-native-paper';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#848484' style="auto" />
      <Appbar>
        <Appbar.Action
          icon="archive"
          color="#848484"
          onPress={() => console.log('Pressed archive')}
        />
        <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
        <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
        <Appbar.Action
          icon="delete"
          onPress={() => console.log('Pressed delete')}
        />
      </Appbar>
      <Appbar style={styles.bar_bottom}>
        <Appbar.Action
          icon="archive"
          color="#848484"
          onPress={() => console.log('Pressed archive')}
        />
        <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
        <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
        <Appbar.Action
          icon="delete"
          onPress={() => console.log('Pressed delete')}
        />
      </Appbar>
      <View style={styles.formulario}>
        <Text>Este rexto ha sido modificado</Text>
        <Button title="Login" color="#848484" style={styles.btn_margin}></Button>
        <Button title="Register"></Button>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: Constants.statusBarHeight,
  },
  formulario: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    margin:15,
  },
  bar_bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },

  btn_margin: {
    marginTop:3,
  },
});
