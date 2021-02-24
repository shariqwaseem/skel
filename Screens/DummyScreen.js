import React ,{useState, useEffect} from "react";
import { View, Text } from "react-native";
import {useSelector} from 'react-redux'
import {Button} from 'react-native-elements'
const DummyScreen = (props) => {
	const appName = useSelector(state=>{
		return state.Misc.name
	})
	useEffect(()=>{
		console.log('state', appName)
	},[])
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
		<Text>Dummy screen</Text>
		</View>
	);
};

export default DummyScreen;
