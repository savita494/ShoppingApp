import React from 'react';
import {StyleSheet,Text,View,SrollView,Image} from 'react-native';
import '../../assets/shoping.jpg';

export default function Header({navigation}) {


    const onPressContact =()=>{
        navigation.navigate("contact")
    };
    const onPressPolicy =()=>{
        navigation.navigate("Privacy Policy")
    };

        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/shoping.jpg')}
                />
               
                <Text onPress={onPressPolicy} style={styles.header1}>Privacy Policy</Text>
                <Text onPress={onPressContact} style={styles.header2}>Contact</Text>
            
            </View>
        );
    }
;



const styles = StyleSheet.create({
    container: {
        height:150,
        marginTop:20,
        flexDirection:'row',
        paddingTop:70,
        paddingLeft:300,
        backgroundColor:'#ffff',
        borderBottomColor:'#ccc',
        alignItems:"center"
    
    },
    logo: {
        height:80,
        width:80,
        
    },
    header1: {
        flexDirection:'row',
        padding:30,
        fontStyle:'italic',
        fontWeight:'bold',
        marginLeft:700,
        color:'black',

        },
    header2: {
        flexDirection:'row',
        padding:30,
        fontStyle:'italic',
        fontWeight:'bold',
        color:'Black',
        
    }
})