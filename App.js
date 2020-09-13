import React from 'react';
import { View, ScrollView, StyleSheet, Text} from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import Footer from './components/Footer';
import ChirpList from './components/ChirpList';


function App(){
  return(
    <NativeRouter>
      <View style = {styles.appContainer}>
        <ScrollView>
        <Route exact path = '/' component = {ChirpList}/>
        </ScrollView >
        <Footer/>
      </View>
    </NativeRouter>
  )
}

export default App;

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    paddingTop: 60,
  },
  foot:{
    position : "relative"
  }
})