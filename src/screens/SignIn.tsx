import React, { useState, useContext } from "react";
import {
	Button,
	HStack,
	VStack,
	Text,
	Link,
	Image,
	useColorModeValue,
	IconButton,
	Icon,
	Center,
	Hidden,
	StatusBar,
	Stack,
	Box,
} from "native-base";
import Entypo from "react-native-vector-icons/Entypo";
import FloatingLabelInput from "../components/FloatingLabelInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AuthContext } from "../context/AuthContext";
import QueryString from "qs";
import HttpRequest from "../utility/HttpRequest";
import { AxiosError, AxiosResponse } from "axios";
import { Alert } from "react-native";
import { ILoginResponse } from "../interfaces/ResponseInterface";

export function SignInForm({ props }: any) {
	// add next router here
	const { authContext } = useContext(AuthContext);

	const [loading, setLoading] = useState<boolean>(false)
	const [errMessage, setErrMessage] = useState<string>('')
	const [formValue, setFormValue] = useState<{
		telepon: string;
		password: string;
	}>({
		telepon: '',
		password: ''
	})

	const [showPass, setShowPass] = React.useState<boolean>(false);

	const submitLogin = () => {
		if (!formValue.telepon || !formValue.password) {
			return setErrMessage('Mohon Untuk Mengisi Form')
		}
		const body = QueryString.stringify({
			phone: formValue.telepon,
			password: formValue.password
		})
		setErrMessage('')
		setLoading(true)

		HttpRequest.setHeaderXForm()
		HttpRequest.request.post('auth/login/', body)
			.then((res: AxiosResponse<ILoginResponse>) => {
				Alert.alert('Notifikasi', res.data.message, [
					{
						text: 'Ok !',
						onPress: () => authContext.signIn(res.data.token)
					}
				])
			})
			.catch((err: AxiosError<{ status: string, message: string }>) => {
				Alert.alert(err.response?.data.status || err.message, err.response?.data.message || '')
				// console.log(err.response?.data)
			})
			.finally(() => {
				setLoading(false)
			})

	}

	return (
		<KeyboardAwareScrollView
			contentContainerStyle={{
				flexGrow: 1,
			}}
			style={{ flex: 1 }}
		>
			<VStack
				flex="1"
				px="6"
				py="9"
				_light={{ bg: "white" }}
				_dark={{ bg: "coolGray.800" }}
				space="3"
				justifyContent="space-between"
				borderTopRightRadius={{ base: "2xl", md: "xl" }}
				borderBottomRightRadius={{ base: "0", md: "xl" }}
				borderTopLeftRadius={{ base: "2xl", md: "0" }}
			>
				<VStack space="7">
					<VStack>
						<VStack space="2">
							<VStack space={{ base: "5", md: "4" }}>
								<Text textAlign={'center'} color={'red.500'} bold>{errMessage}</Text>
								<FloatingLabelInput
									isRequired
									label="Nomor Telepon"
									labelColor="#9ca3af"
									labelBGColor={useColorModeValue("#fff", "#1f2937")}
									borderRadius="4"
									defaultValue={formValue?.telepon}
									onChangeText={(txt: string) => setFormValue(ress => {
										return { ...ress, telepon: txt }
									})}
									_text={{
										fontSize: "sm",
										fontWeight: "medium",
									}}
									_dark={{
										borderColor: "coolGray.700",
									}}
									_light={{
										borderColor: "coolGray.300",
									}}
								/>
								<FloatingLabelInput
									isRequired
									type={showPass ? "" : "password"}
									label="Password"
									borderRadius="4"
									labelColor="#9ca3af"
									labelBGColor={useColorModeValue("#fff", "#1f2937")}
									defaultValue={formValue?.password}
									onChangeText={(txt: string) => setFormValue(ress => {
										return { ...ress, password: txt }
									})}
									InputRightElement={
										<IconButton
											variant="unstyled"
											icon={
												<Icon
													size="4"
													color="coolGray.400"
													as={Entypo}
													name={showPass ? "eye-with-line" : "eye"}
												/>
											}
											onPress={() => {
												setShowPass(true);
											}}
										/>
									}
									_text={{
										fontSize: "sm",
										fontWeight: "medium",
									}}
									_dark={{
										borderColor: "coolGray.700",
									}}
									_light={{
										borderColor: "coolGray.300",
									}}
								/>
							</VStack>
							<Link
								ml="auto"
								_text={{
									fontSize: "xs",
									fontWeight: "bold",
									textDecoration: "none",
								}}
								_light={{
									_text: {
										color: "primary.900",
									},
								}}
								_dark={{
									_text: {
										color: "primary.500",
									},
								}}
							>
							</Link>
							<Button
								isLoading={loading}
								isLoadingText="Mohon Tunggu"
								mt="5"
								size="md"
								borderRadius="4"
								_text={{
									fontWeight: "medium",
								}}
								_light={{
									bg: "primary.900",
								}}
								_dark={{
									bg: "primary.700",
								}}
								onPress={() => {
									submitLogin();
								}}
							>
								MASUK
							</Button>

						</VStack>

					</VStack>
				</VStack>
				<HStack
					mb="4"
					space="1"
					safeAreaBottom
					alignItems="center"
					justifyContent="center"
					mt={{ base: "auto", md: "8" }}
				>
					<Text
						_light={{ color: "coolGray.800" }}
						_dark={{ color: "coolGray.400" }}
					>
						Belum punya akun ?
					</Text>
					{/* Opening Link Tag navigateTo:"SignUp" */}
					<Link
						_text={{
							fontWeight: "bold",
							textDecoration: "none",
						}}
						_light={{
							_text: {
								color: "primary.900",
							},
						}}
						_dark={{
							_text: {
								color: "primary.500",
							},
						}}
						onPress={() => {
							props.navigation.navigate("Daftar");
						}}
					>
						Daftar Disini
					</Link>
					{/* Closing Link Tag */}
				</HStack>
			</VStack>
		</KeyboardAwareScrollView>
	);
}
export default function SignIn(props: any) {
	return (
		<>
			<StatusBar
				translucent
				backgroundColor="transparent"
				barStyle="light-content"
			/>
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
							<HStack space="2" alignItems="center">
								<Text color="coolGray.50" fontSize="lg">
									Pengadilan Agama Cianjur
								</Text>
							</HStack>
							<VStack space="2">
								<Text fontSize="3xl" fontWeight="bold" color="coolGray.50">
									Selamat Datang,
								</Text>
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
									Silahkan masuk untuk melanjutkan
								</Text>
							</VStack>
						</VStack>
					</Hidden>
					<SignInForm props={props} />
				</Stack>
			</Center>
		</>
	);
}
