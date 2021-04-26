import React from 'react';
import {View,Text,Alert,StyleSheet,ScrollView,Modal,Image,ImageBackground} from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import ModalCard from "../screens/ModalCard";
import ListCard from '../screens/ListCard';
export default class Detail extends React.Component{
    state={
        modalVisible:false
    }
    setModalVisible = (visible) =>{
        this.setState({modalVisible:visible})
    }
    render(){
        const {modalVisible} = this.state
        return(
            <ImageBackground
            source = {require('../assets/images/back2.png')}
            style={{widt:'100%', height:'100%'}}>

                <View style={styles.icons}>
                    <Icon name="menu" size={30} color="#a2a2db" style={{width:20}}/>
                   <Icon name="account-circle" size={30} color="#a2a2db" style={{marginLeft:230}} />
                </View>
                <View style={{ 
                    width:"100%",
                    marginTop:50,
                    marginBottom:20,
                    justifyContent:'center',
                    alignItems:'center'
                     }}>
                    <View style={{
                        backgroundColor:"#5facdb",
                        width:80,
                        height:80,
                        borderRadius:50,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <Image source={require('../assets/images/p.png')}
                        style={{width:26,height:26}}/>
                    </View>

                    <View style={{
                        flexDirection:'row',
                        alignItems:'center',
                        paddingHorizontal:40
                    }}>
                        <Text style={{
                            fontSize:24,
                            fontFamily:'Bold',
                            color:'#fff'
                        }}>
                             BOM
                        </Text>
                        <Text style={{fontSize:20,color:'#a2a2db',paddingHorizontal:15}}>
                            - - - - - - - - - -
                        </Text>
                        <Text  style={{
                            fontSize:24,
                            fontFamily:'Bold',
                            color:'#fff'
                        }}>
                            DOH
                        </Text>
                    </View>
                    <View
                    style={{
                        flexDirection:'row',
                        paddingHorizontal:2,
                    }}>
                        <Text style={{
                            fontFamily:'Regular',
                            color:'#a2a2db',
                        }}>
                             Bombay
                        </Text>
                        <Text  style={{
                            fontFamily:'Regular',
                            color:'#a2a2db',
                            marginLeft:135
                           
                        }}>
                            Doha
                        </Text>
                    </View>

                    <Text style={{
                        paddingHorizontal:40,
                        color:'#a2a2db',
                        fontFamily:'Regular'
                    }}>
                    20 June, 2021
                    </Text>

                    <View style={{
                        flexDirection:'row',
                        alignItems:'center',
                        paddingHorizontal:50,
                        marginTop:120
                    }}>
                        <Image source={require('../assets/images/dots.png')}
                        style={{width:18, height:16}}/>
                        <Image source={require('../assets/images/filter.png')}
                        style={{width:20, height:18,marginLeft:228}}/>
                        
                    </View>
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{
                        marginVertical: 5,
                    }}
                    >
                    <ListCard
                        onPress={() => {
                        this.setModalVisible(true);
                        }}
                    />
                    <ListCard
                        onPress={() => {
                        this.setModalVisible(true);
                        }}
                    />
                    <ListCard
                        onPress={() => {
                        this.setModalVisible(true);
                        }}
                    />

                    <View>
                        <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal is closed");
                        }}
                        >
                        <ModalCard
                            onPress={() => {
                            this.setModalVisible(!modalVisible);
                            }}
                        />
                        </Modal>
                    </View>
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
})