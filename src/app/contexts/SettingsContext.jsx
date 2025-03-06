import { createContext, useState } from "react";
import merge from "lodash/merge";
// CUSTOM COMPONENT
import { EnatLayoutSettings } from "app/components/EnatLayout/settings";

export const SettingsContext = createContext({
  settings: EnatLayoutSettings,
  updateSettings: () => {}
});

export default function SettingsProvider({ settings, children }) {
  const [currentSettings, setCurrentSettings] = useState(settings || EnatLayoutSettings);

  const handleUpdateSettings = (update = {}) => {
    const merged = merge({}, currentSettings, update);
    setCurrentSettings(merged);
  };

  return (
    <SettingsContext.Provider
      value={{ settings: currentSettings, updateSettings: handleUpdateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}
