import React from 'react';
import { View, Text } from 'react-native';
import AddChirp from './AddChirp';
import ChirpListHeader from './ChirpListHeader';


function ChirpList (){
    return(
        <View>
            <ChirpListHeader/>
            <AddChirp/>
        </View>
    )
}

export default ChirpList;