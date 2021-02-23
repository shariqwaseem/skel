import React ,{useState, useEffect} from "react";
import { View, Text } from "react-native";
import {useSelector} from 'react-redux'
import {Button} from 'react-native-elements'
const DummyScreen = (props) => {
	const [loading, setLoading] = useState(false)
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
		<Button
			loading={loading}
			type="clear"
			title="okay"
			onPress={()=>{
				setLoading(true)
				setTimeout(()=>setLoading(false), 3000)
				}}
		/>
			<Text>{appName}</Text>
		</View>
	);
};

export default DummyScreen;
