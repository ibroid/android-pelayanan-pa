import { Text, Box, HStack, Pressable, Center, Hidden, Stack, VStack, ScrollView, Avatar, Divider, Spacer, Button, Radio } from "native-base";
import IonIcon from "react-native-vector-icons/Ionicons";
import * as React from 'react';
import { AuthContext } from "../context/AuthContext";
import HttpRequest from "../utility/HttpRequest";
import { Alert } from "react-native";
import { AxiosError, AxiosResponse } from "axios";
import { IDataUmumParaPihakResponse, IIdentityResponse } from "../interfaces/ResponseInterface";
import useHttp from "../hooks/useHttp";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import QueryString from "qs";
import ScreenLoading from "../components/ScreenLoading";
import { localDate } from "../utility/Dates";
import Helper from "../utility/Helper";

export default function Profil({ props }: any) {
	const { state, authContext } = React.useContext(AuthContext);

	const [selectedPihak, setSelected] = React.useState<string>('');
	const { data, error, errorMessage, loading } = useHttp<IIdentityResponse>('/user/pihak');

	useFocusEffect(React.useCallback(() => {
		if (error && errorMessage) {
			Alert.alert("Terjadi Kesalahan", "Mohon maaf saat ini layanan survey tidak bisa diakses. Error : " + errorMessage.message, [
				{
					"text": "Kembali",
					"onPress": () => props.navigation.goBack()
				}
			])
		}
		// console.log(data)
	}, [loading]))

	const submitPilihPihak = () => {
		const navigation = useNavigation();
		HttpRequest.setAuthorizationToken(state.userToken);
		HttpRequest.request.post('user/pihak', QueryString.stringify({ pihak_id: selectedPihak }))
			.then((res: AxiosResponse<{ message: string }>) => {
				Alert.alert('Notifikasi', res.data.message, [
					{
						text: 'Ok',
						onPress: () => navigation.navigate('Home')
					}
				])
			})
			.catch((err: AxiosError<{ status: string, message: string }>) => {
				Alert.alert(err.response?.data.status || err.message, err.response?.data.message || '')
			})
	}

	const submitLogout = () => {
		Alert.alert('Apakah anda akan Logout ?', 'Anda akan keluar dan harus Login Kembali', [
			{
				text: 'Kembali',
				// onPress: () => console.log('kembali')
			},
			{
				text: 'Logout',
				onPress: () => {
					HttpRequest.setAuthorizationToken(state.userToken);
					HttpRequest.request.post('auth/logout')
						.then((res: AxiosResponse<{ message: string }>) => {
							Alert.alert('Notifikasi', res.data.message, [
								{
									text: 'Ok',
									onPress: () => authContext.signOut()
								}
							])
						})
						.catch((err: AxiosError<{ status: string, message: string }>) => {
							Alert.alert(err.response?.data.status || err.message, err.response?.data.message || '')
						})
				}
			}
		],
			{
				cancelable: true,
			}
		)
	}

	const CropName = (name: string, jenis_kelamin: string) => {
		name = String(name).toLowerCase();
		const splitName = name.split(jenis_kelamin === 'P' ? 'binti' : 'bin');
		return <>
			<Text fontSize="md" fontWeight="bold" color="coolGray.50">{String(splitName[0]).toUpperCase()}</Text>
			<Text fontSize="md" fontWeight="bold" color="coolGray.50">{jenis_kelamin == 'P' ? 'binti' : 'bin'}{String(splitName[1]).toUpperCase()}</Text>
		</>
	}

	const ShowInfo = () => {
		Alert.alert('Aplikasi Android PA Cianjur V.1', 'Apabila anda menemukan kerusakan pada aplikasi silahkan laporkan ke itpacianjur@gmail.com', [
			{
				text: 'Kembali',
			}
		],
			{
				cancelable: true,
			}
		)
	}

	const SubmitChangePerkara = () => {
		Alert.alert('Apa anda akan mengubah perkara anda ?', 'Apabila anda salah memasukan nomor perkara pada registrasi anda bisa mengubah nomor perkara anda disini', [
			{
				text: 'Kembali',
			}
		],
			{
				cancelable: true,
			}
		)
	}


	const PilihPihak = () => {
		const { data, error, errorMessage, loading } = useHttp<IDataUmumParaPihakResponse>('/user/para_pihak');

		if (error) {
			return <Text>{'Terjadi Kesalahan. Error :' + errorMessage?.message}</Text>
		}

		return <VStack space={3}>
			<Text>Pilih Salah Satu</Text>
			<Radio.Group onChange={(value) => setSelected(value)} name="myRadioGroup" accessibilityLabel="Pick your favorite number">
				{data?.pihak_satu.map((row, i) => {
					return <Radio key={++i} value={String(row.pihak_id)} my={1}>
						{row.nama}
					</Radio>
				})}
				{data?.pihak_dua.map((row, i) => {
					return <Radio key={++i} value={String(row.pihak_id)} my={1}>
						{row.nama}
					</Radio>
				})}

			</Radio.Group>
			<Button
				onPress={submitPilihPihak}>Pilih Pihak</Button>
		</VStack>;
	}


	return (
		<>
			<Box
				safeAreaTop
				_light={{ bg: "primary.900" }}
				_dark={{ bg: "coolGray.900" }}
			/>
			<Center
				my="auto"
				_dark={{ bg: "coolGray.900" }}
				_light={{ bg: "primary.800" }}
				flex="1"
			>
				<Stack
					flexDirection={{ base: "column", md: "row" }}
					w="100%"
					maxW={{ md: "1016px" }}
					flex={{ base: "1", md: "none" }}
				>
					<Hidden from="md">
						<VStack px="4" mt="4" mb="5" space="2">
							<Center>
								<Text color="coolGray.50" fontSize="lg">
									Profil Anda
								</Text>
							</Center>

							<HStack space="2">
								<Avatar bg="purple.600" alignSelf="center" size="xl" source={require('../assets/images/icon_new_avatar.png')}>
								</Avatar>
								<VStack justifyContent={'center'}>
									{data ? CropName(data?.nama, data?.jenis_kelamin) : ''}
									<Divider />
									<Text fontSize="xl" color="coolGray.50">{data?.nomor_indentitas}</Text>
								</VStack>
							</HStack>
						</VStack>
					</Hidden>

					<VStack
						flex="1"
						px="6"
						py="6"
						_light={{ bg: "white" }}
						_dark={{ bg: "coolGray.800" }}
						justifyContent="space-between"
						space="3"
						borderTopRightRadius={{ base: "2xl", md: "xl" }}
						borderBottomRightRadius={{ base: "0", md: "xl" }}
						borderTopLeftRadius={{ base: "2xl", md: "0" }}
					>
						<HStack space={4} justifyContent={'center'}>
							<Box alignItems="center">
								<Pressable maxW="96" onPress={submitLogout}>
									{({
										isHovered,
										isFocused,
										isPressed
									}) => {
										return <Box bg={"danger.500"} style={{
											transform: [{
												scale: isPressed ? 0.96 : 1
											}]
										}} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">
											<IonIcon name={'ios-power'} size={20} color={'#fff'} />
										</Box>;
									}}
								</Pressable>
							</Box>
							<Box alignItems="center">
								<Pressable maxW="96" onPress={SubmitChangePerkara}>
									{({
										isHovered,
										isFocused,
										isPressed
									}) => {
										return <Box bg={"amber.500"} style={{
											transform: [{
												scale: isPressed ? 0.96 : 1
											}]
										}} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">
											<IonIcon name={'ios-reload-outline'} size={20} color={'#fff'} />
										</Box>;
									}}
								</Pressable>
							</Box>
							<Box alignItems="center">
								<Pressable maxW="96" onPress={ShowInfo}>
									{({
										isHovered,
										isFocused,
										isPressed
									}) => {
										return <Box bg={"dark.200"} style={{
											transform: [{
												scale: isPressed ? 0.96 : 1
											}]
										}} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">
											<IonIcon name={'md-information-circle'} size={20} color={'#fff'} />
										</Box>;
									}}
								</Pressable>
							</Box>
						</HStack>
						{loading ? <ScreenLoading /> : data && data.nama
							? <ScrollView
								contentContainerStyle={{
									flexGrow: 1,
								}}
								style={{ flex: 1 }}
							>
								<Box borderBottomWidth="1" _dark={{
									borderColor: "muted.50"
								}} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
									<HStack space={[2, 3]} justifyContent="space-between">
										<IonIcon name={'calendar'} size={20} />
										<VStack>
											<Text _dark={{
												color: "warmGray.50"
											}} color="coolGray.800" bold>
												{data.tempat_lahir + ', ' + localDate(data.tanggal_lahir)}
											</Text>
											<Text color="coolGray.600" _dark={{
												color: "warmGray.200"
											}}>
												Tempat Tanggal Lahir
											</Text>
										</VStack>
										<Spacer />
									</HStack>
								</Box>
								<Box borderBottomWidth="1" _dark={{
									borderColor: "muted.50"
								}} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
									<HStack space={[2, 3]} justifyContent="space-between">
										<IonIcon name={'calendar'} size={20} />
										<VStack>
											<Text _dark={{
												color: "warmGray.50"
											}} color="coolGray.800" bold>
												{data.alamat}
											</Text>
											<Text color="coolGray.600" _dark={{
												color: "warmGray.200"
											}}>
												Alamat
											</Text>
										</VStack>
										<Spacer />
									</HStack>
								</Box>
								<Box borderBottomWidth="1" _dark={{
									borderColor: "muted.50"
								}} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
									<HStack space={[2, 3]} justifyContent="space-between">
										<IonIcon name={'calendar'} size={20} />
										<VStack>
											<Text _dark={{
												color: "warmGray.50"
											}} color="coolGray.800" bold>
												{data.telepon}
											</Text>
											<Text color="coolGray.600" _dark={{
												color: "warmGray.200"
											}}>
												Telepon
											</Text>
										</VStack>
										<Spacer />
									</HStack>
								</Box>
								<Box borderBottomWidth="1" _dark={{
									borderColor: "muted.50"
								}} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
									<HStack space={[2, 3]} justifyContent="space-between">
										<IonIcon name={'calendar'} size={20} />
										<VStack>
											<Text _dark={{
												color: "warmGray.50"
											}} color="coolGray.800" bold>
												{data.email}
											</Text>
											<Text color="coolGray.600" _dark={{
												color: "warmGray.200"
											}}>
												Email
											</Text>
										</VStack>
										<Spacer />
									</HStack>
								</Box>
								<Box borderBottomWidth="1" _dark={{
									borderColor: "muted.50"
								}} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
									<HStack space={[2, 3]} justifyContent="space-between">
										<IonIcon name={'calendar'} size={20} />
										<VStack>
											<Text _dark={{
												color: "warmGray.50"
											}} color="coolGray.800" bold>
												{Helper.Pendidikan(data.pendidikan_id)}
											</Text>
											<Text color="coolGray.600" _dark={{
												color: "warmGray.200"
											}}>
												Pendidikan
											</Text>
										</VStack>
										<Spacer />
									</HStack>
								</Box>
								<Box borderBottomWidth="1" _dark={{
									borderColor: "muted.50"
								}} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
									<HStack space={[2, 3]} justifyContent="space-between">
										<IonIcon name={'calendar'} size={20} />
										<VStack>
											<Text _dark={{
												color: "warmGray.50"
											}} color="coolGray.800" bold>
												{data.pekerjaan}
											</Text>
											<Text color="coolGray.600" _dark={{
												color: "warmGray.200"
											}}>
												Pekerjaan
											</Text>
										</VStack>
										<Spacer />
									</HStack>
								</Box>
								<Box borderBottomWidth="1" _dark={{
									borderColor: "muted.50"
								}} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
									<HStack space={[2, 3]} justifyContent="space-between">
										<IonIcon name={'calendar'} size={20} />
										<VStack>
											<Text _dark={{
												color: "warmGray.50"
											}} color="coolGray.800" bold>
												{Helper.Agama(data.agama_id)}
											</Text>
											<Text color="coolGray.600" _dark={{
												color: "warmGray.200"
											}}>
												Agama
											</Text>
										</VStack>
										<Spacer />
									</HStack>
								</Box>
							</ScrollView>
							: <PilihPihak />
						}

					</VStack>
				</Stack>
			</Center>
		</>
	);
}