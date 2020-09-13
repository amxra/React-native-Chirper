import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { v4 as uuid } from 'uuid';
import AddChirp from './AddChirp';
import ChirpListHeader from './ChirpListHeader';
import Chirp from './Chirp';


function ChirpList (){

    const [items, setItems] = useState([
      { id: uuid(), 
        imgUrl: 'https://pbs.twimg.com/profile_images/1298401694607380482/DHF117FC_400x400.jpg',
        time: '25m',
        name: 'Dictator.',
        username: 'iamforbes',
        text:'My nigga ain’t got a platinum plaque but got a platinum budget...',
        commentNo: 0,
        rtnumber: 0,
        likesNumber: 0
      },
      { id: uuid(), 
        imgUrl: 'https://pbs.twimg.com/profile_images/1302169630966980609/yyFedap9_400x400.jpg',
        time: '2h',
        name: 'Moyo',
        username: 'moyoo',
        text:'This sleep really hit!',
        commentNo: 0,
        rtnumber: 0,
        likesNumber: 0
      },
    {
        id: uuid(),
        imgUrl: 'https://pbs.twimg.com/profile_images/1302169630966980609/yyFedap9_400x400.jpg',
        time: '3m',
        name: 'Moyo',
        username: 'moyoo',
        text:'I deserve really nice shoes that i can barely afford tbh',
        commentNo: 1,
        rtnumber: 9,
        likesNumber: 29
      },
      { id: uuid(), 
        imgUrl: 'https://pbs.twimg.com/profile_images/1300588775677005826/R1opT4Yv_400x400.jpg',
        time: '25m',
        name: 'Phones.',
        username: 'Headphoneslaw',
        text:'Lol felt like I gave away a blueprint there.',
        commentNo: 1,
        rtnumber: 0,
        likesNumber: 3
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
      },
  
      { id: uuid(), 
        imgUrl: 'https://pbs.twimg.com/profile_images/1298401694607380482/DHF117FC_400x400.jpg',
        time: '25m',
        name: 'Dictator.',
        username: 'iamforbes',
        text:'I done put 20 up under the sig... y’dig',
        commentNo: 0,
        rtnumber: 0,
        likesNumber: 0
      },
      { id: uuid(), 
        imgUrl: 'https://pbs.twimg.com/profile_images/1274483721341751299/KrEr1Pbg_400x400.jpg',
        time: '52m',
        name: 'K10Shaw',
        username: 'officiallyk10',
        text:'This Lucy.. she love audience for her vex ehn? Everybody must hear o. No way no how she no swallow cordless mic as pikin.',
        commentNo: 7,
        rtnumber: 10,
        likesNumber: 29
      },
      { id: uuid(), 
        imgUrl: 'https://pbs.twimg.com/profile_images/1295846040768323591/5O8HwkG4_400x400.jpg',
        time: '1h',
        name: 'Ozzy Etomi',
        username: 'ozzyetomi',
        text:'People thirst to work with Beyoncé then try to play her after. Whether they like it or not, a portion of her light shining on catapulted their careers whether they would have gotten there on their own or not. That goes for everyone that has ever been blessed by Giselle.',
        commentNo: 2,
        rtnumber: 26,
        likesNumber: 84
      },
      { id: uuid(), 
        imgUrl: 'https://pbs.twimg.com/profile_images/1287185720390627328/L4Ep5yZG_400x400.jpg',
        time: '3m',
        name: 'Whiplash Ham',
        username: 'HamOfArabia',
        text:"Being with someone that consistently goes out of their way to make your life amazing is an actual drug. 100% recommend.",
        commentNo: 5 ,
        rtnumber: 214,
        likesNumber: 355
      },
      { id: uuid(), 
        imgUrl: 'https://pbs.twimg.com/profile_images/1298401694607380482/DHF117FC_400x400.jpg',
        time: '1h',
        name: 'Dictator.',
        username: 'iamforbes',
        text:'My god, I love the NBA',
        commentNo: 0,
        rtnumber: 4,
        likesNumber: 2
      },
      { id: uuid(), 
        imgUrl: 'https://pbs.twimg.com/profile_images/1302169630966980609/yyFedap9_400x400.jpg',
        time: '2h',
        name: 'Moyo',
        username: 'moyoo',
        text:'Working out without my watch and I feel like I’m not doing anything 😩',
        commentNo: 0,
        rtnumber: 0,
        likesNumber: 0
      },
      { id: uuid(), 
        imgUrl: 'https://pbs.twimg.com/profile_images/1246930223544795136/lkzFDM1k_400x400.jpg',
        time: '6m',
        name: 'Tosin',
        username: 'tos',
        text:'Officially a cupcake 🥰',
        commentNo: 2,
        rtnumber: 13,
        likesNumber: 4
      },
      { id: uuid(), 
        imgUrl: 'https://pbs.twimg.com/profile_images/1299736273318543360/r-tNej7c_400x400.jpg',
        time: '6m',
        name: 'Jola',
        username: 'Jollz',
        text:'I need a Cuban link necklace, anklet and bracelet ASAPTUALLY',
        commentNo: 4,
        rtnumber: 8,
        likesNumber: 3
      },
      { id: uuid(), 
        imgUrl: 'https://pbs.twimg.com/profile_images/1287185720390627328/L4Ep5yZG_400x400.jpg',
        time: '3m',
        name: 'Whiplash Ham',
        username: 'HamOfArabia',
        text:"...and if not, God is still good Folded handsGreen heart",
        commentNo: 0,
        rtnumber: 1,
        likesNumber: 1
      },
      { id: uuid(), 
        imgUrl: 'https://pbs.twimg.com/profile_images/1260522079079858177/7ZssyZK6_400x400.jpg',
        time: '3m',
        name: 'OdunEweniyi',
        username: 'Big Odun Energy',
        text:'Piggyvest users >>>>>>>',
        commentNo: 8,
        rtnumber: 7,
        likesNumber: 52
      },
      { id: uuid(), 
        imgUrl: 'https://pbs.twimg.com/profile_images/1285553176536657920/bTHdPz1G_400x400.jpg',
        time: '3m',
        name: 'Kamiyun',
        username: 'the_kingcam',
        text:"I hate that Spar chicken breast has bones 😳",
        commentNo: 1,
        rtnumber: 11,
        likesNumber: 56
      },
      { id: uuid(), 
        imgUrl: 'https://pbs.twimg.com/profile_images/1284257545847267328/K38qnHL2_400x400.jpg',
        time: '3m',
        name: 'Shawarma Huntress ',
        username: 'shawarmahuntrss',
        text:'I think Bank On It might displace Deja Vu as my favorite Burna song o',
        commentNo: 0,
        rtnumber: 0,
        likesNumber: 0
      },
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
                <FlatList data = {items} renderItem = {({item}) => <Chirp item = {item}/>}/>
            </View>
        </View>
    )
}

export default ChirpList;