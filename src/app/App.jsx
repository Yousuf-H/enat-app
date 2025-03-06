import { useRoutes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
// ROOT THEME PROVIDER
import { EnatTheme } from "./components";
// ALL CONTEXTS
import SettingsProvider from "./contexts/SettingsContext";
import { AuthProvider } from "./contexts/JWTAuthContext";
// ROUTES
import routes from "./routes";

export default function App() {
  const content = useRoutes(routes);

  return (
    <SettingsProvider>
      <AuthProvider>
        <EnatTheme>
          <CssBaseline />
          {content}
        </EnatTheme>
      </AuthProvider>
    </SettingsProvider>
  );
}
