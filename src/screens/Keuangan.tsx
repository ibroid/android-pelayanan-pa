import * as React from "react";
import { View, Text, Badge, Box, Divider, HStack, Pressable, Spacer, Center, Hidden, Image, Stack, VStack, ScrollView } from "native-base";

import IonIcon from "react-native-vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";
import { Alert } from "react-native";
import useHttp from "../hooks/useHttp";
import { ITranasksiResponse } from "../interfaces/ResponseInterface";
import ScreenLoading from "../components/ScreenLoading";
import Rupiah from "../utility/Rupiah";
import { localDate } from "../utility/Dates";
import { countPemasukan, countPengeluaran, countSisa } from "../utility/Transaksi";

export default function Keuangan({ props }: any) {
	const [transaksi, setTransaksi] = React.useState<ITranasksiResponse[]>([]);
	const [keterangan, setKeterangan] = React.useState<String | null>()
	const [uraian, setUraian] = React.useState<String | null>()

	const [totalPengeluaran, setTotalPengeluaran] = React.useState<number>(0)
	const [totalPemasukan, setTotalPemasukan] = React.useState<number>(0)
	const [sisa, setSisa] = React.useState<number>(0)
	const { data, loading, error, errorMessage } = useHttp<ITranasksiResponse[]>('user/transaksi');

	useFocusEffect(React.useCallback(() => {
		if (data) {

			setTransaksi(data)
			setTotalPemasukan(countPemasukan(data))
			setTotalPengeluaran(countPengeluaran(data))
			setSisa(countSisa(data));
		}
		if (error && errorMessage) {
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
								Riwayat Keuangan
							</Text>
							<VStack space="2">
								<Center>
									<Box >
										<Text fontSize="3xl" fontWeight="bold" color="coolGray.50">
											{Rupiah(String(totalPemasukan))}
										</Text>
										<Text fontSize="3xl" fontWeight="bold" color="#EEAD48">
											{Rupiah(String(totalPengeluaran))}
										</Text>
										<Text fontSize="3xl" fontWeight="bold" color="#AADF52">
											{Rupiah(String(sisa))}
										</Text>
									</Box>
								</Center>
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
							{loading ? <ScreenLoading /> : (
								data?.map((row, i) => {
									return <Box key={++i} alignItems="center">
										<Pressable >
											{({
												isHovered,
												isPressed
											}) => {
												return <Box width={350} bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
													transform: [{
														scale: isPressed ? 0.96 : 1
													}]
												}} p="3" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">
													<HStack alignItems="center">
														<Badge colorScheme={row.jenis_transaksi !== 1 ? 'danger' : 'success'} _text={{
															color: "white"
														}} variant="solid" rounded="4">
															{row.jenis_transaksi !== 1 ? 'Transaksi Keluar' : 'Transaksi Masuk'}
														</Badge>
														<Spacer />
														<Text fontSize={10} color="coolGray.800">
															{localDate(row.tanggal_transaksi)}
														</Text>
													</HStack>
													<Text color="coolGray.800" mt="1" fontWeight="medium" fontSize="xl">
														{Rupiah(row.jumlah)}
													</Text>
													<Text fontSize="sm" color="coolGray.700">
														{row.uraian}
													</Text>
												</Box>;
											}}
										</Pressable>
									</Box>
								})
							)}
						</VStack>
					</ScrollView>
				</Stack>
			</Center>
		</>
	)
}