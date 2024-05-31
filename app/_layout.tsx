import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import stores from "../Redux/stores";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1565c0",
      dark: "#0e4686",
      light: "#4383cc"
    },
    secondary: {
      main: "#40c4ff",
      dark: "#2c89b2",
      light: "#66cfff"
    },
    background: {
      default: "#ffffff"
    },
    error: {
      main: "#b00020"
    }
  }
});

export default function RootLayout() {
  return (
    <Provider store={stores}>
      <ThemeProvider theme={theme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(Home)" />
          <Stack.Screen name="Test" />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}
