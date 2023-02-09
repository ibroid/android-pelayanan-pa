import * as React from "react";
import { View, Text, Box, Center, Hidden, HStack, Image, Stack, VStack, Badge, Flex, Pressable, Spacer } from "native-base";
import { useFocusEffect } from "@react-navigation/native";
import useHttp from "../hooks/useHttp";
import { IAktaCeraiResponse } from "../interfaces/ResponseInterface";
import { Alert } from "react-native";

export default function AktaCerai({ props }: any) {

	const { data, loading, error, errorMessage } = useHttp<IAktaCeraiResponse>('user/akta_cerai');

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
				_light={{ bg: "primary.900" }}
				flex="1"
			>
				<Stack
					flexDirection={{ base: "column", md: "row" }}
					w="100%"
					maxW={{ md: "1016px" }}
					flex={{ base: "1", md: "none" }}
				>
					<Hidden from="md">
						<VStack px="4" mt="4" mb="5" space="9">
							<VStack space="2">
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
									Berikut Status Akta Cerai Anda
								</Text>
							</VStack>
						</VStack>
					</Hidden>
					<Box alignItems="center">
						<Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="#fff" p="5">
							<Box>
								<Image height={300} resizeMode={'cover'} alt={'Ilustrasi Akta Cerai'} source={require('../assets/images/undraw_At_work_re_qotl.png')}></Image>
								<Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
									{data && data.tgl_akta_cerai ? 'Akta Sudah Terbit' : 'Akta Belum Terbit'}
								</Text>
								<Text fontSize="sm" color="coolGray.700">
									1. Pengambilan akta cerai tidak boleh di wakilkan kecuali oleh kuasa hukum
								</Text>
								<Text fontSize="sm" color="coolGray.700">
									2. Membayar PNBP sekitar 10 sampai 50 ribu (relatif) saat pengambilan akta cerai
								</Text>
								<Text fontSize="sm" color="coolGray.700">
									3. Membawa Fotokopi KTP dan bukti pengembalian sisa panjar
								</Text>
							</Box>
						</Pressable>
					</Box>

				</Stack>
			</Center>
		</>
	)
}