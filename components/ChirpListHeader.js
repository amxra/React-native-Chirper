import React from 'react';
import { View, StyleSheet , Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


function ChirpListHeader (){
    return (
        <View>
            <View style = {styles.header}>
                <Image
                    style = {styles.avi}
                    source={{
                        uri: 'https://pbs.twimg.com/profile_images/1287903743976103939/TMAD8w1K_400x400.jpg',
                    }}
                />
                <Icon
                    name = 'logo-twitter'
                    size = {30}
                    color = '#c2bad8'
                />
                <Icon
                    name = 'star-outline'
                    size = {30}
                    color = '#c2bad8'
                />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: "flex",
        borderBottomWidth: 1,
        borderBottomColor: '#c8c8c8',
        flexDirection: "row",
        width: 412,
        justifyContent: "space-between",
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
        marginBottom: 50,
    },
    avi:{
        borderRadius: 20,
        width: 35,
        height: 35,
    },
})

export default ChirpListHeader;