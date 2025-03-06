import { Fragment } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import MoreVert from "@mui/icons-material/MoreVert";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SchoolIcon from "@mui/icons-material/School";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Span } from "app/components/Typography";

// STYLED COMPONENTS
const ItemName = styled(Span)(({ theme }) => ({
  marginLeft: 16,
  fontWeight: "500",
  [theme.breakpoints.down("sm")]: { marginLeft: 4 }
}));

const StyledFabPrimary = styled(Fab)(({ theme }) => ({
  marginLeft: 0,
  boxShadow: "none",
  color: "white !important",
  background: `${theme.palette.primary.main} !important`,
  [theme.breakpoints.down("sm")]: { display: "none" }
}));

const StyledFabSuccess = styled(Fab)(({ theme }) => ({
  marginLeft: 0,
  boxShadow: "none",
  color: "white !important",
  background: `${theme.palette.success.main} !important`,
  [theme.breakpoints.down("sm")]: { display: "none" }
}));

const StyledFabWarning = styled(Fab)(({ theme }) => ({
  marginLeft: 0,
  boxShadow: "none",
  color: "white !important",
  background: `${theme.palette.warning.main} !important`,
  [theme.breakpoints.down("sm")]: { display: "none" }
}));

const StyledFabError = styled(Fab)(({ theme }) => ({
  marginLeft: 0,
  boxShadow: "none",
  color: "white !important",
  background: `${theme.palette.error.main} !important`,
  [theme.breakpoints.down("sm")]: { display: "none" }
}));

const StyledAvatar = styled(Avatar)(() => ({
  width: "32px !important",
  height: "32px !important"
}));

export default function EnatRowCards() {
  const items = [
    { id: 1, name: "Lesson in Progress", icon: <SchoolIcon />, color: "primary" },
    { id: 2, name: "Current Streak: 5 days", icon: <LocalFireDepartmentIcon />, color: "success" },
    { id: 3, name: "Pending Quiz", icon: <QueryBuilderIcon />, color: "warning" },
    { id: 4, name: "Achievement Unlocked!", icon: <EmojiEventsIcon />, color: "error" }
  ];

  return items.map((item) => (
    <Fragment key={item.id}>
      <Card sx={{ py: 1, px: 2 }} className="learning-card">
        <Grid container alignItems="center">
          <Grid size={{ md: 5, xs: 7 }}>
            <Box display="flex" alignItems="center">
              {item.color === "primary" && (
                <StyledFabPrimary size="small">{item.icon}</StyledFabPrimary>
              )}
              {item.color === "success" && (
                <StyledFabSuccess size="small">{item.icon}</StyledFabSuccess>
              )}
              {item.color === "warning" && (
                <StyledFabWarning size="small">{item.icon}</StyledFabWarning>
              )}
              {item.color === "error" && <StyledFabError size="small">{item.icon}</StyledFabError>}

              <ItemName>{item.name}</ItemName>
            </Box>
          </Grid>

          <Grid size={{ md: 3, xs: 4 }}>
            <Box color="text.secondary">Today</Box>
          </Grid>

          <Grid size={3} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box display="flex" position="relative" marginLeft="-0.875rem !important">
              <StyledAvatar src="/assets/images/face-1.jpg" />
              <StyledAvatar src="/assets/images/face-2.jpg" />
              <StyledAvatar src="/assets/images/face-3.jpg" />
              <StyledAvatar sx={{ fontSize: "14px" }}>+2</StyledAvatar>
            </Box>
          </Grid>

          <Grid size={1}>
            <Box display="flex" justifyContent="flex-end">
              <IconButton>
                <MoreVert />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Card>

      <Box py={1} />
    </Fragment>
  ));
}
