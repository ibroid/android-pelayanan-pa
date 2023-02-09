import * as React from 'react';

import MainStack from './src/stack/MainStack';
import { AuthProvider } from "./src/context/AuthContext"
import { NativeBaseProvider, extendTheme, theme as nbTheme } from 'native-base';

const theme = extendTheme({
  colors: {
    primary: nbTheme.colors.cyan,
  },
});

export default function App() {

  return (
    <NativeBaseProvider theme={theme}>
      <AuthProvider>
        <MainStack />
      </AuthProvider>
    </NativeBaseProvider>
  );
}