import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { v4 as uuid } from 'uuid';
import AddChirp from './AddChirp';
import ChirpListHeader from './ChirpListHeader';
import Chirp from './Chirp';


function ChirpList (){

    const [item, setItem] = useState([
        {
            id: uuid(),
            imgUrl: 'https://pbs.twimg.com/profile_images/1277045112959311887/5gqnEOp1_400x400.jpg',
            time: '3m',
            name: 'Moyo',
            username: 'moyoo',
            text:'I deserve really nice shoes that i can barely afford tbh',
            commentNo: 1,
            rtnumber: 9,
            likesNumber: 29
          },
          { id: uuid(), 
            imgUrl: 'https://pbs.twimg.com/profile_images/1246930223544795136/lkzFDM1k_400x400.jpg',
            time: '6m',
            name: 'Tosin',
            username: 'tos',
            text:'Tried to diet today, bruh the way that hunger hooked me ehn, I found myself asking for jara on my jollof rice 🥴',
            commentNo: 2,
            rtnumber: 33,
            likesNumber: 473
          }
    ])

    function addChirp(chirp){
        if(!chirp){
          Alert.alert('Oops', "You haven't entered any text", {text: 'OK'});
        }
        else{
          setItems(prevItems => {
            return [ {
              id: uuid(), 
              text: chirp, 
              imgUrl: 'https://pbs.twimg.com/profile_images/1287903743976103939/TMAD8w1K_400x400.jpg',
              time: '5s',
              name: 'amira',
              username : 'amira',
              commentNo : 0,
              rtnumber: 0,
              likesNumber: 0
            }, ...prevItems]
          })
        }
      }



    return(
        <View>
            <ChirpListHeader/>
            <AddChirp addChirp = {addChirp}/>
            <View>
                <FlatList data = {item} renderItem = {({item}) => <Chirp item = {item}/>}/>
            </View>
        </View>
    )
}

export default ChirpList;