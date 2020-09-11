import React from 'react';
import { View, ScrollView, StyleSheet} from 'react-native';

function App(){
  return(
    <View style = {styles.appContainer}>
        <ScrollView>

        </ScrollView >
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