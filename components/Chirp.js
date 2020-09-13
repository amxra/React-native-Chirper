import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Retweet from './ChirpBits/Retweet';

function Chirp({item}){
    return(
        <View>
            <View style = {styles.listItem}>
                <View style = {styles.listItemView}>
                    <Image
                        style = {styles.avi}
                        source={{
                            uri: item.imgUrl,
                        }}
                    />
                    <View style = {styles.listTexts}>
                        <View style = {styles.listChirpHeader}>
                            <Text style = {styles.listChirpName}>
                                {item.name}
                            </Text>
                            <Text style = {styles.listChirpUsername}>
                                @{item.username}
                            </Text>
                            <Text style = {styles.listChirpTime}>
                                . {item.time}
                            </Text>
                        </View>
                        <Text style = {styles.listItemChirp}>
                            {item.text} 
                        </Text>
                        <View style = {styles.listChirpFooter}>
                            <Text style = {styles.listChirpFooterText}>
                            <Icon
                                name = "comment"
                                size = {23}
                                color = '#a8a8a8'
                            />
                                {item.commentNo}
                            </Text>
                            <Text style = {styles.listChirpFooterText}>
                                <Retweet item = {item}/>
                            </Text>
                            <Text style = {styles.listChirpFooterText}>
                            <Icon
                                name = "heart"
                                size = {23}
                                color = '#a8a8a8'
                            />
                                {item.likesNumber}
                            </Text>
                            <Text style = {styles.listChirpFooterText}>
                            <Icon
                                name = "share-apple"
                                size = {23}
                                color = '#a8a8a8'
                            />
                            </Text>
                        </View>
                    </View>
                </View>
        </View>
        </View>
    )
}

export default Chirp; 

const styles = StyleSheet.create({
    listItem:{
        borderBottomWidth:1,
        borderColor: '#e8e8e8',
        display: "flex",
        alignItems: "center",
        padding: 5,
    },
    listItemView:{
        flexDirection: 'row',
        width: 380,
        justifyContent: 'space-around',
        // borderWidth: 2,
        // borderColor: "red",
        padding: 10,
        paddingRight: 0,
        paddingLeft: 0
    },
    listTexts:{
        // borderWidth: 1,
        // borderColor: "red"  
    },
    listChirpHeader:{
        maxWidth: 250,
        // borderWidth: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 3,
        paddingRight: 10,
        paddingLeft: 0,
    },
    listChirpFooter:{
        // borderWidth: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        maxWidth: 240,
        padding: 5,
        paddingBottom:0,
    },
    listChirpFooterText: {
        color: '#a8a8a8',
        display: "flex",
        alignItems: "center",
        fontSize: 12,

        justifyContent: "space-between"
    },
    listChirpName:{
        fontWeight: "bold",
        fontSize: 16,
        paddingRight: 10,
    },
    listChirpUsername: {
        color: "#a8a8a8",
        paddingRight: 10,
    },
    listChirpTime: {
        color: "#a8a8a8"
    },
    listItemChirp:{
        // borderWidth: 1,
        width: 300,
        fontSize: 16,
        padding: 5,
        paddingLeft: 0,
        paddingRight: 0,
    },
    avi:{
        // borderWidth: 2,
        borderRadius: 20,
        // borderColor: "#00ACEE",
        width: 50,
        height: 50,
        marginTop: 3,
    },
})
