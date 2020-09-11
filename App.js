import React from 'react';
import { View, ScrollView, StyleSheet, Text} from 'react-native';
import Footer from './components/Footer';
import ChirpList from './components/ChirpList';


function App(){
  return(
    <View style = {styles.appContainer}>
        <ScrollView>
          <ChirpList/>
        </ScrollView >
        <Footer/>
    </View>
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