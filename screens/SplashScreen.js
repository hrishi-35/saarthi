import React from 'react';
import { View , Image } from 'react-native';

SplashScreen = ({navigation}) => {

	setInterval(()=>{navigation.navigate('Main')}, 3000);

	return(

		<View style={{flex:1,backgroundColor:'#FFF',justifyContent:'center'}}>
		<Image source={require('../assets/fb.png')}
		 style={{height:100,width:100,resizeMode:'contain',alignSelf:'center'}}/>
		</View>
		
		 )
		
}

export default SplashScreen;
