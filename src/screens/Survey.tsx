import { View, Text, Box, Center, Hidden, HStack, Pressable, Stack, VStack, Spacer, Flex } from "native-base";
import * as React from "react";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import useHttp from "../hooks/useHttp";
import { Alert } from "react-native";

export default function Survey() {
	const navigation = useNavigation();

	const { data, error, errorMessage, loading } = useHttp<{
		ikm: number;
		ipk: number
	}>('/survey/cek');

	const [cek, setCek] = React.useState<{ ikm: boolean, ipk: boolean }>({ ikm: false, ipk: false });

	useFocusEffect(React.useCallback(() => {

		if (error && errorMessage) {
			Alert.alert("Terjadi Kesalahan", "Mohon maaf saat ini layanan cek biaya tidak bisa diakses. Error : " + errorMessage.message, [
				{
					"text": "Kembali",
					"onPress": () => navigation.goBack()
				}
			])
		}

		if (data) {
			if (data.ikm > 0) {
				setCek(current => {
					return {
						...current,
						ikm: true
					}
				})
			}
			if (data.ipk > 0) {
				setCek(current => {
					return {
						...current,
						ipk: true
					}
				})
			}
		}

		console.log(data)

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
						<VStack px="4" mt="4" mb="5" space="2">
							<HStack space="2" alignItems="center">
								<Text color="coolGray.50" fontSize="lg">
									Bantu kami dalam mengikatkan pelayanan dengan mengisi Survey Berikut
								</Text>
							</HStack>
							<Box alignItems="center">
								<Pressable isDisabled={cek.ikm} onPress={() => navigation.navigate("Pengisian Survey", {
									type: 'ikm'
								})} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5">
									<Box width={320}>
										<Text color="coolGray.800" fontWeight="medium" fontSize="xl">
											Survey Indeks Kepuasan Masyarakat
										</Text>
										<Text mt="2" fontSize="sm" color="coolGray.700">
											Survey ini membantu untuk meningkatkan sarana prasarana dan pelayanan kepada masyarakat
										</Text>
										<Flex>
											<Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
												{cek.ikm ? 'Anda Sudah Mengisi Ini' : '9 Pertanyaan'}
											</Text>
										</Flex>
									</Box>
								</Pressable>
							</Box>
							<Box alignItems="center">
								<Pressable isDisabled={cek.ipk} onPress={() => navigation.navigate("Pengisian Survey", {
									type: 'ipk'
								})} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5">
									<Box width={320}>
										<Text color="coolGray.800" fontWeight="medium" fontSize="xl">
											Survey Indeks Persepsi Anti Korupsi
										</Text>
										<Text mt="2" fontSize="sm" color="coolGray.700">
											Survey ini membantu untuk meningkatkan persepsi anti korupsi pada instansi
										</Text>
										<Flex>
											<Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
												{cek.ipk ? 'Anda Sudah Mengisi Ini' : '9 Pertanyaan'}
											</Text>
										</Flex>
									</Box>
								</Pressable>
							</Box>
						</VStack>
					</Hidden>
				</Stack>
			</Center>
		</>
	)
}