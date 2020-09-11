import React, { useState } from 'react';
import {  View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons'


function Retweet({item}){
    const [rt, setRT] = useState(0);
    const onPress = () => setRT(prevRT => prevRT + 1);
    return(
        <View>
            <Text style = {styles.footerText}> 
            {item.rtnumber}
            {rt}
            <TouchableOpacity
                onPress = {onPress}
            >
                <Icon
                    name = "retweet"
                    size = {23}
                    color = '#a8a8a8'
                />
            </TouchableOpacity>
            </Text>
        </View>
    )
}

export default Retweet;

const styles = StyleSheet.create({
    footerText:{
        color: "#a8a8a8",
    }
}) 
