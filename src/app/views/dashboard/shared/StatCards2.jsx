import Fab from "@mui/material/Fab";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import { lighten, styled, useTheme } from "@mui/material/styles";
import ExpandLess from "@mui/icons-material/ExpandLess";
import SchoolIcon from "@mui/icons-material/School";
import QuizIcon from "@mui/icons-material/Quiz";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import BookIcon from "@mui/icons-material/Book";

// STYLED COMPONENTS
const ContentBox = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center"
}));

const FabIcon = styled(Fab)(() => ({
  width: "44px !important",
  height: "44px !important",
  boxShadow: "none !important"
}));

const H3 = styled("h3")(() => ({
  margin: 0,
  fontWeight: "500",
  marginLeft: "12px"
}));

const H1 = styled("h1")(({ theme }) => ({
  margin: 0,
  flexGrow: 1,
  color: theme.palette.text.secondary
}));

const Span = styled("span")(() => ({
  fontSize: "13px",
  marginLeft: "4px"
}));

const IconBox = styled("div")(() => ({
  width: 16,
  height: 16,
  color: "#fff",
  display: "flex",
  overflow: "hidden",
  borderRadius: "300px ",
  justifyContent: "center",
  "& .icon": { fontSize: "14px" }
}));

export default function EnatStatCards() {
  const { palette } = useTheme();
  const bgPrimary = lighten(palette.primary.main, 0.85);
  const bgSecondary = lighten(palette.secondary.main, 0.85);
  const bgSuccess = lighten(palette.success.main, 0.85);
  const bgWarning = lighten(palette.warning.main, 0.85);

  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      {/* LESSONS COMPLETED */}
      <Grid size={{ md: 6, xs: 12 }}>
        <Card elevation={3} sx={{ p: 2 }}>
          <ContentBox>
            <FabIcon size="medium" sx={{ background: bgPrimary }}>
              <SchoolIcon color="primary" />
            </FabIcon>
            <H3>Lessons Completed</H3>
          </ContentBox>

          <ContentBox sx={{ pt: 2 }}>
            <H1>12</H1>
            <IconBox sx={{ backgroundColor: "primary.main" }}>
              <ExpandLess className="icon" />
            </IconBox>
            <Span color="primary.main">(+5 this week)</Span>
          </ContentBox>
        </Card>
      </Grid>

      {/* QUIZ ACCURACY */}
      <Grid size={{ md: 6, xs: 12 }}>
        <Card elevation={3} sx={{ p: 2 }}>
          <ContentBox>
            <FabIcon size="medium" sx={{ background: bgSecondary }}>
              <QuizIcon color="secondary" />
            </FabIcon>
            <H3>Quiz Accuracy</H3>
          </ContentBox>

          <ContentBox sx={{ pt: 2 }}>
            <H1>85%</H1>
            <IconBox sx={{ backgroundColor: "secondary.main" }}>
              <ExpandLess className="icon" />
            </IconBox>
            <Span color="secondary.main">(+3% this month)</Span>
          </ContentBox>
        </Card>
      </Grid>

      {/* LEARNING STREAK */}
      <Grid size={{ md: 6, xs: 12 }}>
        <Card elevation={3} sx={{ p: 2 }}>
          <ContentBox>
            <FabIcon size="medium" sx={{ background: bgWarning }}>
              <LocalFireDepartmentIcon color="warning" />
            </FabIcon>
            <H3>Current Streak</H3>
          </ContentBox>

          <ContentBox sx={{ pt: 2 }}>
            <H1>7 days</H1>
            <IconBox sx={{ backgroundColor: "warning.main" }}>
              <ExpandLess className="icon" />
            </IconBox>
            <Span color="warning.main">(+2 days this week)</Span>
          </ContentBox>
        </Card>
      </Grid>

      {/* WORDS LEARNED */}
      <Grid size={{ md: 6, xs: 12 }}>
        <Card elevation={3} sx={{ p: 2 }}>
          <ContentBox>
            <FabIcon size="medium" sx={{ background: bgSuccess }}>
              <BookIcon color="success" />
            </FabIcon>
            <H3>Words Learned</H3>
          </ContentBox>

          <ContentBox sx={{ pt: 2 }}>
            <H1>150</H1>
            <IconBox sx={{ backgroundColor: "success.main" }}>
              <ExpandLess className="icon" />
            </IconBox>
            <Span color="success.main">(+25 this month)</Span>
          </ContentBox>
        </Card>
      </Grid>
    </Grid>
  );
}
