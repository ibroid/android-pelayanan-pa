import { View, Text, Box, Center, Hidden, HStack, Image, Stack, VStack, Heading, ScrollView } from "native-base";
import * as React from "react";
import { SignInForm } from "./SignIn";

export default function Umum() {
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
						<ScrollView>
							<VStack px="4" mt="4" mb="5" space="2">
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
									</Text>
								</VStack>
								<Heading color={'#fff'}>Kata Pengantar Ketua Pengadilan</Heading>
								<Text style={{ textAlign: 'justify' }} color={'#fff'}>
									Assalamu'alaikum, Wr. Wb.
									Puji syukur kehadirat Allah SWT, atas rahmat dan hidayah-Nya, sehingga Pengadilan Agama Cianjur telah dapat membuka secara resmi website Pengadilan Agama Cianjur dengan alamat website www.pa-cianjur.go.id
									Kehadiran website Pengadilan Agama Cianjur ini adalah salah satu wujud komitmen kami dalam rangka menunjang keterbukaan informasi bagi masyarakat luas khususnya dan para pencari keadilan diwilayah hukum Pengadilan Agama Cianjur. Keterbukaan informasi menjadi salah satu standarisasi yang harus diaplikasikan oleh semua lembaga. Mudahnya masyarakat mendapatkan informasi menjadi syarat reformasi birokrasi yang harus diterapkan.
									Mahkamah Agung mengeluarkan Surat Keputusan Nomor : 144/KMA/SKIVIII/2007 tentang keterbukaan informasi di Pengadilan, dengan terbitnya undang-undang Nomor 14 Tahun 2008 tentang keterbukaan informasi publik, seiring dengan Komitmen kami Mahkamah Agung telah mengeluarkan SK KMA Nomor : 1-144/KMA/SK/I/2011 tentang pedoman pelayanan informasi di Pengadilan di perkuat dengan SK KMA Nomor : 026/KMA/SK/II/2012 tentang standar pelayanan peradilan.
									Disamping sebagai bagian dari transparansi peradilan, website ini juga menjadi salah satu bentuk peningkatan kualitas IT bagi aparat peradilan. Website ini diharapkan dapat menjadikan bahan atau masukkan bagi publik untuk memberikan masukkan dan sebagai umpan balik (feedback) untuk sebuah proses perbaikan yang berkelanjutan.
									Kami senantiasa selalu berusaha menyajikan informasi seobjektif mungkin, akan tetapi kami sadari masih terdapat kekurangan, oleh karena itu, kami mengharapkan koreksi, saran dari semua pihak demi peningkatan kinerja dan kesempurnaan website ini.
									Demikian, website resmi Pengadilan Agama Cianjur ini dengan harapan semoga dapat membantu pengunjung sehingga bermanfaat bagi kita semua.
								</Text>
								<Text color={'#fff'}>
									Wassalam
								</Text>
								<Text color={'#fff'}>
									Ketua Pengadilan Agama Jakarta
								</Text>
								<Heading color={'#fff'}>Visi</Heading>
								<Text color={'#fff'}>
									Mewujudkan Pengadilan Agama Cianjur Yang Agung
								</Text>
								<Heading color={'#fff'}>Misi</Heading>
								<Text color={'#fff'}>
									1. Mewujudkan Peradilan Agama Cianjur Yang Agung.
								</Text>
								<Text color={'#fff'}>
									2. Meningkatkan kualitas SDM aparatur dalam rangka peningkatan pelayanan pada masyarakat.
								</Text>
								<Text color={'#fff'}>
									3. Melaksanakan pengawasan dan pembinaan yang efektif dan efisien.
								</Text>
								<Text color={'#fff'}>
									4. Melaksanakan tertib administrasi dan manajemen peradilan yang efektif dan efisien.
								</Text>
								<Text color={'#fff'}>
									5. Mengupayakan tersedia nya sarana dan prasarana peradilan sesuai dengan ketentuan yang berlaku.
								</Text>
								<Heading color={'#fff'}>Wilayah Yurisdiksi</Heading>
								<Text style={{ textAlign: 'justify' }} color={'#fff'}>
									Kabupaten Cianjur adalah sebuah kabupaten di Provinsi Jawa Barat, Indonesia. Ibukotanya terletak di kecamatan Cianjur. Kabupaten ini berbatasan dengan Kabupaten Bogor Kabupaten Karawang dan Kabupaten Purwakarta di Utara , Kabupaten Bandung, Kabupaten Bandung Barat, dan Kabupaten Garut di timur, Samudra Hindia di selatan, serta Kabupaten Sukabumi di barat. Kabupaten Cianjur mempunyai luas wilayah 3.342 Km2  dan jumlah penduduk 2.149.121 jiwa (2007). Berdasarkan data Permendagri No. 39 Tahun 2015 tentang Kode dan Data Wilayah Administrasi Pemerintahan yang ditetapkan tanggal 2 Februari 2015 oleh Menteri Dalam Negeri, dapat diketahui bahwa Kabupaten Cianjur merupakan salah satu dari 18 Kabupaten dan 9 Kota di Provinsi Jawa Barat. Di kabupaten ini terdapat sebanyak 32 kecamatan, 353 desa dan 6 kelurahan.
								</Text>
								<Image resizeMode="stretch" height={500} alt="Peta Cianjur" source={require('../assets/images/PETA_CIANJUR.jpg')} />
								<Heading color={'#fff'}>Alamat</Heading>
								<Text color={'#fff'}>
									Jl. Raya Bandung No. 45, Cianjur, 43281
								</Text>
								<Text color={'#fff'}>
									Telp : (0263) 261090
								</Text>
								<Text color={'#fff'}>
									Fax : (0263) 2295555
								</Text>
								<Image alt="Google Map PA Cianjur" height={250} resizeMode="stretch" source={require('../assets/images/gmap.png')} />
								<Heading color={'#fff'}>Email</Heading>
								<Text color={'#fff'}>
									pa.cianjur_ptabdg@yahoo.co.id
								</Text>
								<Text color={'#fff'}>
									tabayun.pacianjur@gmail.com (Delegasi)
								</Text>
								<Heading color={'#fff'}>Website</Heading>
								<Text color={'#fff'}>
									https://pa-cianjur.go.id/
								</Text>
							</VStack>
						</ScrollView>
					</Hidden>
				</Stack>
			</Center>
		</>
	)
}