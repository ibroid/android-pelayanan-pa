import * as React from "react";
import { View, Text, Badge, Box, Flex, HStack, Pressable, Spacer, Center, Hidden, Image, Stack, VStack, ScrollView } from "native-base";

import useHttp from "../hooks/useHttp";
import { ISidangResponse } from "../interfaces/ResponseInterface";
import { useFocusEffect } from "@react-navigation/native";
import { Alert } from "react-native";
import Splash from "./Splash";
import { dateDiff, localDate } from "../utility/Dates";

export default function JadwalSidang({ props }: any) {
	const { data, loading, error, errorMessage } = useHttp<ISidangResponse[]>('user/jadwal_sidang');

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
								Jadwal Sidang
							</Text>
							<VStack space="2">
								<Text fontSize="xl" fontWeight="bold" color="coolGray.50">
									Berikut jadwal sidang anda
								</Text>
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
							space="3"
							borderTopRightRadius={{ base: "2xl", md: "xl" }}
							borderBottomRightRadius={{ base: "0", md: "xl" }}
							borderTopLeftRadius={{ base: "2xl", md: "0" }}
						>
							{loading ? <Splash /> : (data?.map((row, i) => {
								return <Box key={++i} alignItems="center">
									<Pressable >
										{({
											isHovered,
											isFocused,
											isPressed
										}) => {
											return <Box width={350} bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
												transform: [{
													scale: isPressed ? 0.96 : 1
												}]
											}} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">
												<HStack alignItems="center">
													<Badge colorScheme={dateDiff(new Date(), row.tanggal_sidang) <= 0 ? "success" : "danger"} _text={{
														color: "white"
													}} variant="solid" rounded="4">
														{dateDiff(new Date(), row.tanggal_sidang) <= 0 ? 'Yang Akan Datang' : 'Berlalu'}
													</Badge>
													<Spacer />
													<Text fontSize={10} color="coolGray.800">
														{localDate(row.tanggal_sidang)}
													</Text>
												</HStack>
												<Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
													{row.agenda}
												</Text>
												<Text mt="2" fontSize="sm" color="coolGray.700">
													Ruangan : Ruang Sidang {row.ruangan}
												</Text>
												<Text fontSize="sm" color="coolGray.700">
													Alasan Tunda : {row.alasan_ditunda == 0 ? 'Tidak Ditunda' : row.alasan_ditunda}
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