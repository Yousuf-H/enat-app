import { themes } from "../EnatTheme/initThemes";
import layout1Settings from "./Layout1/Layout1Settings";

// UPDATE BELOW CODE
export const EnatLayoutSettings = {
  activeLayout: "layout1", // layout1, layout2
  activeTheme: "blue", // View all valid theme colors inside EnatTheme/themeColors.js
  perfectScrollbar: false,

  themes: themes,
  layout1Settings, // open Layout1/Layout1Settings.js

  // Footer options
  footer: {
    show: true,
    fixed: false,
    theme: "slateDark1" // View all valid theme colors inside EnatTheme/themeColors.js
  }
};
