import { Center, Text, Pressable, View, Box } from "native-base";
import * as React from "react";
import { Image, StyleSheet } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { useNavigation } from '@react-navigation/native';

export default function Beranda({ props }: any) {
	const navigation = useNavigation();
	const styles = StyleSheet.create({
		gridView: {
			marginTop: 10,
			flex: 1,
		},
		itemContainer: {
			justifyContent: 'flex-end',
			borderRadius: 5,
			padding: 10,
			height: 150,
		},
		itemName: {
			fontSize: 16,
			color: '#fff',
			fontWeight: '600',
		},
		itemCode: {
			fontWeight: '600',
			fontSize: 12,
			color: '#fff',
		},
	});

	const [items, setItems] = React.useState([
		{
			name: 'Umum',
			code: '#ADB146',
			icon: require('../assets/images/icons/megaphone-128x128-454905.png'),
			move: "Umum"
		},
		{
			name: 'Perkara',
			code: '#FC6E50',
			icon: require('../assets/images/icons/wish-128x128-454920.png'),
			move: "Perkara"
		},
		{
			name: 'Jadwal Sidang',
			code: '#F76D50',
			icon: require('../assets/images/icons/invoice-128x128-454903.png'),
			move: "Jadwal Sidang"
		},
		{
			name: 'Keuangan',
			code: '#38B1DB',
			icon: require('../assets/images/icons/dollar-128x128-454895.png'),
			move: "Keuangan"
		},
		{
			name: 'Akta Cerai',
			code: '#ADB146',
			icon: require('../assets/images/icons/receipt-128x128-454913.png'),
			move: "Akta Cerai"
		},
		{
			name: 'Survey',
			code: '#FC6E50',
			icon: require('../assets/images/icons/checklist-128x128-454891.png'),
			move: "Survey"
		}
	]);

	return (
		<FlatGrid
			itemDimension={130}
			data={items}
			style={styles.gridView}
			// staticDimension={300}
			// fixed
			spacing={10}
			renderItem={({ item }: any) => (
				<Pressable onPress={() => navigation.navigate(item.move)}>
					{({
						isPressed
					}) => {
						return <Box
							maxW="96"
							borderWidth="1"
							borderColor="coolGray.300"
							shadow="3"
							p="5"
							rounded="8"
							style={[styles.itemContainer, {
								backgroundColor: item.code,
								transform: [{
									scale: isPressed ? 0.96 : 1
								}]
							}]}>
							<View style={{ flex: 1 }}>
								<Center>
									<Image resizeMode={'cover'} source={item.icon}></Image>
								</Center>
							</View>
							<Text style={styles.itemName}>{item.name}</Text>
						</Box>
					}}
				</Pressable>
			)}
		/>
	);
}