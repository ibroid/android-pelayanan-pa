import { View, Text, Badge, Box, Flex, HStack, Pressable, Spacer, Center, Hidden, Image, Stack, VStack, ScrollView } from "native-base";
import * as React from "react";
import IonIcon from "react-native-vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";
import ScreenLoading from "../components/ScreenLoading";
import useHttp from "../hooks/useHttp";
import { IDataUmumResponse } from "../interfaces/ResponseInterface";
import { localDate } from "../utility/Dates";
import { Alert } from "react-native";


export default function Perkara({ props }: any) {

	const { data, loading, error, errorMessage } = useHttp<IDataUmumResponse>('user/umum');

	useFocusEffect(React.useCallback(() => {

		if (error && errorMessage) {
			// console.log(errorMessage)
			Alert.alert("Terjadi Kesalahan", "Mohon maaf saat ini layanan cek biaya tidak bisa diakses. Error : " + errorMessage.message, [
				{
					"text": "Kembali",
					"onPress": () => props.navigation.goBack()
				}
			])
		}

	}, [loading]))

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
							<Text color="coolGray.50" fontSize="lg">
								Riwayat Perkara
							</Text>
							<VStack space="2">
								<Text fontSize="3xl" fontWeight="bold" color="coolGray.50">
									{data?.nomor_perkara}
								</Text>
								<HStack space={2}>
									<IonIcon name={'md-calendar'} size={20} color="#67E8F9" />

									<Text
										fontSize="md"
										fontWeight="normal"
										_dark={{
											color: "coolGray.400",
										}}
										_light={{
											color: "primary.300",
										}}
									>
										Tanggal Daftar : {localDate(data?.tanggal_pendaftaran)}
									</Text>
								</HStack>
								<HStack space={2}>
									<IonIcon name={'information-circle'} size={20} color="#67E8F9" />

									<Text
										fontSize="md"
										fontWeight="normal"
										_dark={{
											color: "coolGray.400",
										}}
										_light={{
											color: "primary.300",
										}}
									>
										Jenis Perkara : {data?.jenis_perkara_nama}
									</Text>
								</HStack>
								<HStack space={2}>
									<IonIcon name={'md-calendar-outline'} size={20} color="#67E8F9" />

									<Text
										fontSize="md"
										fontWeight="normal"
										_dark={{
											color: "coolGray.400",
										}}
										_light={{
											color: "primary.300",
										}}
									>
										Tanggal Menikah : {data?.data_pernikahan?.tgl_nikah}
									</Text>
								</HStack>
								<HStack space={2}>
									<IonIcon name={'ios-document'} size={20} color="#67E8F9" />

									<Text
										fontSize="md"
										fontWeight="normal"
										_dark={{
											color: "coolGray.400",
										}}
										_light={{
											color: "primary.300",
										}}
									>
										Nomor Akta Nikah : {data?.data_pernikahan?.no_kutipan_akta_nikah}
									</Text>
								</HStack>
								<HStack space={2}>
									<IonIcon name={'md-home'} size={20} color="#67E8F9" />

									<Text
										fontSize="md"
										fontWeight="normal"
										_dark={{
											color: "coolGray.400",
										}}
										_light={{
											color: "primary.300",
										}}
									>
										KUA Pernikahan : {data?.data_pernikahan?.kua_tempat_nikah}
									</Text>
								</HStack>
							</VStack>
						</VStack>
					</Hidden>
					<ScrollView
						contentContainerStyle={{
							flexGrow: 1,
						}}
						style={{ flex: 1 }}
					>
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
							{loading ? <ScreenLoading />
								: (data?.tahapan_proses.map((row, i) => {
									return <Box key={i} alignItems="center">
										<Pressable >
											{({
												isHovered,
												isPressed
											}) => {
												return <Box width={350} bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
													transform: [{
														scale: isPressed ? 0.96 : 1
													}]
												}} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">
													<HStack alignItems="center">
														<Badge colorScheme="darkBlue" _text={{
															color: "white"
														}} variant="solid" rounded="4">
															{++i}
														</Badge>
														<Spacer />
														<Text fontSize={10} color="coolGray.800">
															{localDate(row.tanggal)}
														</Text>
													</HStack>
													<Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
														{row.proses_nama}
													</Text>
													<Text mt="2" fontSize="sm" color="coolGray.700">
														{row.tahapan_nama} | Keterangan : {row.keterangan}
													</Text>
												</Box>;
											}}
										</Pressable>
									</Box>
								}))
							}


						</VStack>
					</ScrollView>
				</Stack>
			</Center>
		</>
	)
}