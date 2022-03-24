import React,{useEffect} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import * as Linking from 'expo-linking';

export default function AboutPage({navigation,route}){

    useEffect(()=>{
        navigation.setOptions({
            title:"소개 페이지",
            headerStyle: {
                backgroundColor: '#1F266A',
                shadowColor: "#1F266A",
            },
            headerTintColor: "#fff",
        })
    },[])

    const link = () => {
        Linking.openURL("https://spartacodingclub.kr")
    }

    return(
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.headContainer}>
            <Text style={styles.titleText}>Hi! 스파르타코딩 앱개발반에 오신것을 환영합니다</Text>
            </View>
            <View style={styles.bodyContainer}>
                <Image
                    style={styles.bodyImage}
                    source={{uri:'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4'}}
                />
                <Text style={styles.bodyTitle}>
                    많은 내용을 간결하게 담아내려 노력했습니다!
                </Text>
                <Text style={styles.bodyDesc}>
                    꼭 완주 하셔서 꼭 여러분것으로 만들어가시길 바랍니다
                </Text>
                <TouchableOpacity style={styles.bodyButton} onPress={()=>link()}>
                    <Text style={styles.buttonText}>여러분의 인스타계정</Text>
                </TouchableOpacity> 
            </View>
        </View>
)}

const styles = StyleSheet.create({
    container: {
        width:"100%",
        height:"100%",
        backgroundColor:"#1F266A"

    },
    headContainer: {
        width:330,
        marginTop:20,
        marginBottom:20,
        alignSelf:"center",
        
    },
    titleText: {
        fontSize:33,
        fontWeight:"700",
        color:"#fff"
    },
    bodyContainer: {
        width:330,
        height:550,
        margin:30,
        backgroundColor:"#fff",
        alignSelf:"center",
        borderRadius:30
    },
    bodyImage: {
        width:160,
        height:150,
        marginTop:90,
        alignSelf:"center",
        borderRadius:30
    },
    bodyTitle: {
        fontSize:21,
        fontWeight:"900",
        margin:30,
        marginTop:0,
        marginBottom:15,
        textAlign:"center"
    },
    bodyDesc: {
        fontSize:16,
        fontWeight:"700",
        margin:30,
        marginTop:10,
        textAlign:"center"
    },
    bodyButton: {
        width:160,
        height:60,
        alignSelf:"center",
        borderRadius:20,
        backgroundColor:"orange"
    },
    buttonText: {
        fontSize:16,
        fontWeight:"700",
        color:"#fff",
        margin:5,
        marginTop:19,
        textAlign:"center"
    }
})