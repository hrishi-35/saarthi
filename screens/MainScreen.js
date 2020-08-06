import React from 'react';
import { 
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Button,
	StyleSheet,
	ScrollView } from 'react-native';
import { SwipeableModal } from 'react-native-swipeable-modal';


export default class MainScreen extends React.Component{

	state={
		data:[],
		showModal: false,
		comment:[],

	}

	closeModal = () => this.setState({ showModal: false });

	componentDidMount(){
		 
		fetch('https://codejudge-artifacts.s3.amazonaws.com/images/q-110/data.json')
		.then((response) => response.json())
  		.then((data) => {
    	
    	this.setState({data:data})
    	console.log('are',this.state.data);
  		})
    	.catch((error) => {
     	console.error('err',error);
    	})
   
	}

	render(){
		return(
			<View style={{flex:1,backgroundColor:'#DCDCDC'}}>
			<Text style={{fontSize:16,alignSelf:'center',padding:4,margin:4,fontWeight:'bold'}}>POSTS</Text>
			<FlatList 
					data = {this.state.data}
					nestedScrollEnabled
					 
					keyExtractor = {post => this.state.data.posts}
					renderItem = {({item,index})=>{
					return (
					<View style={{flex:1,margin:8,backgroundColor:'#FFF', borderRadius:16,padding:8}}>
					
					<Text style={{alignSelf:'center',margin:4,padding:6,fontSize:18,textAlign:'justify'}}>{item.post}</Text>
					<View
  					style={{
    				borderBottomColor: '#D3D3D3',
    				borderBottomWidth: 1,
 				 	}}
					/>
					<TouchableOpacity onPress={()=>{
						this.setState({comment : item.comments})
						this.setState({showModal:true})

					}}>
					<Text style={{alignSelf:'flex-end',margin:4,padding:4}}>{item.comments.length} Comments </Text>
					</TouchableOpacity>
					</View>
					)
					}}
				/>
			
      		{this.state.showModal && <SwipeableModal
          	closeModal={this.closeModal}
          	style={{
            backgroundColor: '#FFF',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:40
          }}
        >
        
        		<Text style={{margin:4}}> Comments </Text>
    				<FlatList 
					
					data = {this.state.comment}
					nestedScrollEnabled
					 
					keyExtractor = {post => this.state.data.posts}
					renderItem = {({item,index})=>{
					return (
					<View style={{flex:1,margin:10,backgroundColor:'#DCDCDC', borderRadius:16,padding:4}}>
					
					<Text style={{alignSelf:'center',margin:4,padding:6,fontSize:14,textAlign:'justify'}}>{item}</Text>
					
				
					</View>
					)
					}}
				/>
			
        </SwipeableModal>}
      
			</View>
			)
	}
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
});