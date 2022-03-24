import React, { useEffect } from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity,Platform} from 'react-native'
import {
  setTestDeviceIDAsync,
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob';

//MainPage로 부터 navigation 속성을 전달받아 Card 컴포넌트 안에서 사용
export default function Card({content,navigation}){
    
  useEffect(()=>{
    // Card.js에 들어오자마자 전면 광고 준비하느라 useEffect에 설정
    //애드몹도 외부 API 이므로 실행 순서를 지키기위해 async/await 사용!
    //안드로이드와 IOS 각각 광고 준비 키가 다르기 때문에 디바이스 성격에 따라 다르게 초기화 시켜줘야 합니다.
    Platform.OS === 'ios' ? AdMobInterstitial.setAdUnitID("ca-app-pub-3136510936842919/6344330778") : AdMobInterstitial.setAdUnitID("ca-app-pub-3136510936842919/9795780180")

    AdMobInterstitial.addEventListener("interstitialDidLoad", () =>
        console.log("interstitialDidLoad")
    );
    AdMobInterstitial.addEventListener("interstitialDidFailToLoad", () =>
        console.log("interstitialDidFailToLoad")
    );
    AdMobInterstitial.addEventListener("interstitialDidOpen", () =>
        console.log("interstitialDidOpen")
    );
    AdMobInterstitial.addEventListener("interstitialDidClose", () => {
          //광고가 끝나면 다음 코드 줄이 실행!
        console.log("interstitialDidClose")
        navigation.navigate('DetailPage',{idx:content.idx})
    });
  },[])
  const goDetail = async () =>{

    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
    await AdMobInterstitial.showAdAsync();
  }
  
  return(
    //카드 자체가 버튼역할로써 누르게되면 상세페이지로 넘어가게끔 TouchableOpacity를 사용
    // <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate('DetailPage',{idx:content.idx})}}>
    <TouchableOpacity style={styles.card} onPress={()=>{goDetail()}}>
        <Image style={styles.cardImage} source={{uri:content.image}}/>
        <View style={styles.cardText}>
            <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
            <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
            <Text style={styles.cardDate}>{content.date}</Text>
        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    
    card:{
      flex:1,
      flexDirection:"row",
      margin:10,
      borderBottomWidth:0.5,
      borderBottomColor:"#eee",
      paddingBottom:10
    },
    cardImage: {
      flex:1,
      width:100,
      height:100,
      borderRadius:10,
    },
    cardText: {
      flex:2,
      flexDirection:"column",
      marginLeft:10,
    },
    cardTitle: {
      fontSize:20,
      fontWeight:"700"
    },
    cardDesc: {
      fontSize:15
    },
    cardDate: {
      fontSize:10,
      color:"#A6A6A6",
    }
});