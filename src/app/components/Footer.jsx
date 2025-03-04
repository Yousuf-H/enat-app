import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { ThemeProvider, styled, useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

import { Paragraph, Span } from "./Typography";
import useSettings from "app/hooks/useSettings";
import { topBarHeight } from "app/utils/constant";

// STYLED COMPONENTS
const AppFooter = styled(Toolbar)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  minHeight: topBarHeight,
  padding: "0 1rem",
  "@media (max-width: 499px)": {
    flexDirection: "column",
    textAlign: "center",
    padding: "1rem 0",
    "& .footer-links": {
      marginTop: "8px"
    }
  }
}));

const FooterContent = styled("div")(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  maxWidth: "1170px",
  margin: "0 auto",
  flexWrap: "wrap"
}));

const FooterLinks = styled("div")(() => ({
  display: "flex",
  gap: "16px",
  "& a": {
    color: "inherit",
    textDecoration: "none",
    fontWeight: 500,
    "&:hover": {
      textDecoration: "underline"
    }
  },
  "@media (max-width: 499px)": {
    justifyContent: "center",
    width: "100%"
  }
}));

export default function Footer() {
  const theme = useTheme();
  const { settings } = useSettings();

  const footerTheme = settings.themes[settings.footer.theme] || theme;

  return (
    <ThemeProvider theme={footerTheme}>
      <AppBar color="primary" position="static" sx={{ zIndex: 96 }}>
        <AppFooter>
          <FooterContent>
            <Paragraph m={0} fontSize="14px">
              © {new Date().getFullYear()} Enat App. All rights reserved.
            </Paragraph>

            <Span m="auto" />

            <FooterLinks className="footer-links">
              <Link to="/about">About</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/contact-support">Contact Support</Link>
            </FooterLinks>
          </FooterContent>
        </AppFooter>
      </AppBar>
    </ThemeProvider>
  );
}
