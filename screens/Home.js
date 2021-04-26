import React from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text, Image, ImageBackground, TextInput, StyleSheet } from 'react-native'

export default class Home extends React.Component{
    render(){
        return(
           <ImageBackground source ={require('../assets/images/back.png')} style={styles.container}>
               <View style={styles.icons}>
                   <Icon name="menu" size={30} color="#a2a2db" style={{width:20}}/>
                   <Icon name="account-circle" size={30} color="#a2a2db" style={{marginLeft:230}} />
               </View>
               <View style={styles.textView}>
                   <Text style={styles.boldText}> Hello User!</Text>
                   <Text style={styles.regularText}>
                        Some information about the user can be displayed here!
                   </Text>
               </View>
               <View style={styles.inputView}>
                   <Image 
                   source={require('../assets/images/search.png')} 
                   style={{width:14,height:14}}/>

                   <TextInput 
                   placeholder="Search Bar" 
                   style={styles.inputBox}></TextInput>
               </View>

               <ScrollView 
               horizontal
               showsHorizontalScrollIndicator={false}
               style={{marginRight:10,marginTop:30}}>

                   <TouchableOpacity style={[styles.scrollView,{marginLeft:20}]}
                    onPress={()=>this.props.navigation.navigate('Detail')}>
                       <Image 
                       source={require('../assets/images/p.png')} 
                       style={{height:24,width:24}}/>
                   </TouchableOpacity>

                   <View style={[styles.scrollView,{backgroundColor:'#ff5c83'}]}>
                        <Icon name="office-building" color="white" size={32} />
                   </View>

                   <View style={[styles.scrollView,{backgroundColor:'#ffa06c'}]}>
                        <Icon name="bus" color="white" size={32} />
                   </View>

                   <View style={[styles.scrollView,{backgroundColor:'#bb32fe'}]}>
                         <Icon name="dots-horizontal" color="white" size={32} />
                   </View>
                   


               </ScrollView>

               <Text style={{color:'#fff',fontFamily:'Regular',paddingVertical:30,paddingHorizontal:30,fontSize:17}}>Recommended</Text>

                <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{marginHorizontal:10,marginTop:30}}>

                    <TouchableOpacity 
                    style={{backgroundColor:"#fff",width:190,height:200,borderRadius:15,padding:5}}>
                        <Image source={require("../assets/images/1.jpg")}
                        style={{width:180, borderRadius:10,height:130}}/>

                   
                    <View style={{flexDirection:'row',width:150,alignItems:'center'}}>
                        <View style={{paddingHorizontal:5,paddingVertical:5}}>
                            <Text 
                            style={{fontFamily:"Regular",fontSize:11,color:"#a2a2db"}}>
                                Some information about flights.
                                </Text>

                        </View>
                        <Icon name="map-marker" size={25} color="#ff5c83"/>
                        </View>

                    </TouchableOpacity>


                    <TouchableOpacity 
                    style={
                        {marginHorizontal:10,backgroundColor:"#fff",width:190,height:200,borderRadius:15,padding:5}}>
                        <Image source={require("../assets/images/2.jpg")}
                        style={{width:180, borderRadius:10,height:130}}/>

                   
                    <View style={{flexDirection:'row',width:150,alignItems:'center'}}>
                        <View style={{paddingHorizontal:5,paddingVertical:5}}>
                            <Text 
                            style={{fontFamily:"Regular",fontSize:11,color:"#a2a2db"}}>
                                Some information about flights.
                                </Text>

                        </View>
                        <Icon name="map-marker" size={25} color="#ff5c83"/>
                        </View>

                    </TouchableOpacity>


                    <TouchableOpacity 
                    style={{backgroundColor:"#fff",width:190,height:200,borderRadius:15,padding:5}}>
                        <Image source={require("../assets/images/3.jpg")}
                        style={{width:180, borderRadius:10,height:130}}/>

                   
                    <View style={{flexDirection:'row',width:150,alignItems:'center'}}>
                        <View style={{paddingHorizontal:5,paddingVertical:5}}>
                            <Text 
                            style={{fontFamily:"Regular",fontSize:11,color:"#a2a2db"}}>
                                Information about flights and tourist attractions
                                </Text>

                        </View>
                        <Icon name="map-marker" size={25} color="#ff5c83"/>
                        </View>

                    </TouchableOpacity>
                    
                </ScrollView>
           </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
 container:{
    width:"100%", height:"100%"
 },
 icons:{
     flexDirection:'row',
     marginTop:40,
     alignItems:'center',
     paddingHorizontal:40
 },
 boldText:{
     fontSize:40,
     color:'#522289',
     fontFamily:"Bold"
 },
 textView:{
     paddingHorizontal:40,
     marginTop:25
},
regularText:{
    fontSize:15,
    paddingVertical:10,
    paddingRight:80,
    lineHeight:22,
    fontFamily:"Regular",
    color:'#a2a2db'
},
inputView:{
    flexDirection:'row',
    backgroundColor:"#FFF",
    borderRadius:40,
    alignItems:'center',
    paddingVertical:10,
    paddingHorizontal:20,
    marginTop:30,
    marginHorizontal:30
},
inputBox:{
    paddingHorizontal:20,
    fontSize:15,
    color:"#ccccef"
},
scrollView:{
    alignItems:'center',
    justifyContent:'center',
    height:66,
    width:66,
    borderRadius:50,
    backgroundColor:'#5facdb',
    marginHorizontal:10,
}

})
