import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function Footer(){
    return(
        <View style = {styles.footerContainer}>
            <View style = {styles.footer}>
                <Icon
                    name = 'home'
                    size = {30}
                    color = '#a8a8a8'
                />
                <Icon
                    name = 'search'
                    size = {30}
                    color = '#a8a8a8'
                />
                <Icon
                    name = 'md-notifications-outline'
                    size = {30}
                    color = '#a8a8a8'
                />
                <Icon
                    name = 'md-mail-outline'
                    size = {30}
                    color = '#a8a8a8'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer:{
        display: "flex",
        borderTopWidth: 1,
        borderColor : "#d8d8d8",
        flexDirection: "row",
        width: 420,
        justifyContent: "space-around",
        padding: 30,
    }
})

export default Footer;