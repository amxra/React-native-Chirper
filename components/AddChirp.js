import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native';



function AddChirp(){
    return (
        <View>
            <TextInput
                placeholder = "What's popping?"
                style = {styles.input}
                // onChangeText = {onChange}
            />
            <TouchableOpacity style = {styles.btn} onPress ={() => addChirp(chirp)}>
                <Button 
                    style = {styles.btnText}
                    title = "chirp"
                    // onPress = {() => addChirp(chirp)}
                    color = '#fff'
                    />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    chirpArea:{
        borderBottomWidth: 3,
        borderColor: '#d8d8d8',
        display: 'flex',
        alignItems: 'center',
        padding: 20,
        paddingTop: 0,
    },
    input:{
        height: 60,
        padding: 8,
        fontSize: 16,
        width: 380,
        borderWidth: 1,
        borderColor: '#d8d8d8' 
    },
    btn: {
        backgroundColor : '#c2bad8',
        padding: 9,
        margin: 5,
        marginTop: 20,
        marginLeft: 280,
        width: 100,
        borderRadius : 10,
    },
    btnText : {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    },
})


export default AddChirp;