import React from 'react';
import { View, ScrollView, StyleSheet, Text} from 'react-native';
import Footer from './components/Footer'


function App(){
  return(
    <View style = {styles.appContainer}>
        <ScrollView>
          <Text>Hello</Text>
        </ScrollView >
        <Footer/>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  appContainer:{
    flex: 1, 
  },
  foot:{
    position : "relative"
  }
})