import * as React from "react";
import { View, Text, Box, Center, Hidden, HStack, Pressable, Stack, VStack, Spacer, Flex, ScrollView, Badge, Checkbox, Divider, Radio, Button } from "native-base";
import { useFocusEffect } from "@react-navigation/native";
import useHttp from "../hooks/useHttp";
import { IKirimSurveyResponse, IKuesionerResponse } from "../interfaces/ResponseInterface";
import { Alert, FlatList } from "react-native";
import ScreenLoading from "../components/ScreenLoading";
import HttpRequest from "../utility/HttpRequest";
import { AuthContext } from "../context/AuthContext";
import QueryString from "qs";
import { AxiosResponse } from "axios";

export default function PengisianSurvey({ route, navigation }: any) {

	const { state } = React.useContext(AuthContext);
	const [loadingButton, setLoadingButton] = React.useState<boolean>(false);

	type Jawaban = {
		kuesioner_id: number;
		nilai: number
	}

	type SelectedValue = {
		id: number,
		selected: boolean
		nilai: number
	}

	type SelectedKuesioner = {
		id: number,
		jawaban: SelectedValue[]
	}

	const [saran, setSaran] = React.useState<string>('_')
	const { data, loading, error, errorMessage } = useHttp<IKuesionerResponse[]>('survey/' + route.params.type)
	const [penilaian, setPenilaian] = React.useState<Jawaban[]>([]);

	useFocusEffect(
		React.useCallback(() => {
			if (error && errorMessage) {
				Alert.alert("Terjadi Kesalahan", "Mohon maaf saat ini layanan cek biaya tidak bisa diakses. Error : " + errorMessage.message, [
					{
						"text": "Kembali",
						"onPress": () => navigation.goBack()
					}
				])
			}
		}, [loading])
	);

	const KirimSurvey = () => {
		if (penilaian.length < 9) {
			return Alert.alert('Notifikasi', 'Mohon untuk mengisi semua survey')
		}

		HttpRequest.setAuthorizationToken(state.userToken);
		HttpRequest.setHeaderXForm();
		HttpRequest.request.post('survey/save', QueryString.stringify({
			survey: route.params.type,
			jawaban: penilaian,
			saran: saran
		}))
			.then((response: AxiosResponse<IKirimSurveyResponse>) => {
				console.log(response.data)
				Alert.alert(response.data.status, response.data.message, [
					{
						"text": "Ok",
						"onPress": () => navigation.goBack()
					}
				])
			})
			.catch(error => {
				console.log(error)
				Alert.alert(error.message || error.response.data.status, error.response.data.message)
			})
			.finally(() => setLoadingButton(true))
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
							<Text color="coolGray.50" fontSize="lg">
								Pengisian Survey Indeks Kepuasan Masyarakat
							</Text>
						</VStack>
					</Hidden>
					<View style={{ flex: 1, flexGrow: 1 }}>
						<VStack
							flex="1"
							px="2"
							py="3"
							_light={{ bg: "white" }}
							_dark={{ bg: "coolGray.800" }}
							space="3"
							justifyContent="space-between"
							borderTopRightRadius={{ base: "2xl", md: "xl" }}
							borderBottomRightRadius={{ base: "0", md: "xl" }}
							borderTopLeftRadius={{ base: "2xl", md: "0" }}
						>
							{loading
								? <ScreenLoading />
								: <FlatList
									data={data}
									renderItem={({ item }) => (
										<Box m={2} alignItems="center" >
											<Pressable>
												{({
													isHovered,
													isPressed
												}) => {
													return <Box width={350} bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
														transform: [{
															scale: isPressed ? 0.96 : 1
														}]
													}} p="3" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">
														<Text color="coolGray.800" fontWeight="medium" fontSize="md">
															{item.pertanyaan}
														</Text>
														<Divider />
														<Radio.Group onChange={value => setPenilaian(ress => {
															ress.push({ nilai: parseInt(value), kuesioner_id: item.id });
															return [...ress];
														})} name="myRadioGroup" accessibilityLabel="Pick your favorite number">
															{item.jawaban.map((row, i) => {
																return <Radio key={++i} value={String(row.bobot)} my={1}>
																	{row.jawaban}
																</Radio>
															})}
														</Radio.Group>
													</Box>;
												}}
											</Pressable>
										</Box>
									)}
									ListEmptyComponent={<ScreenLoading />}
									ListFooterComponent={<Button
										isLoading={loadingButton}
										onPress={KirimSurvey}
										width={350}
										alignSelf={'center'}>Kirim Survey</Button>}
								/>}
						</VStack>
					</View>
				</Stack>
			</Center>
		</>
	)
}