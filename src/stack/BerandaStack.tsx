import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Beranda from "../screens/Beranda";
import Umum from "../screens/Umum";
import Perkara from "../screens/Perkara";
import JadwalSidang from "../screens/JadwalSidang";
import Keuangan from "../screens/Keuangan";
import AktaCerai from "../screens/AktaCerai";
import Survey from "../screens/Survey";
import PengisianSurvey from "../screens/PengisianSurvey";

const Stack = createNativeStackNavigator();

export default function BerandaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Beranda" component={Beranda} />
            <Stack.Screen name="Umum" component={Umum} />
            <Stack.Screen name="Perkara" component={Perkara} />
            <Stack.Screen name="Jadwal Sidang" component={JadwalSidang} />
            <Stack.Screen name="Keuangan" component={Keuangan} />
            <Stack.Screen name="Akta Cerai" component={AktaCerai} />
            <Stack.Screen name="Survey" component={Survey} />
            <Stack.Screen name="Pengisian Survey" component={PengisianSurvey} />
        </Stack.Navigator>
    )

}