import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import Avatar from "@mui/material/Avatar";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import IconButton from "@mui/material/IconButton";
import { styled, useTheme } from "@mui/material/styles";
import { Paragraph } from "app/components/Typography";
import StarIcon from "@mui/icons-material/Star";

// STYLED COMPONENTS
const CardHeader = styled(Box)(() => ({
  display: "flex",
  paddingLeft: "24px",
  paddingRight: "24px",
  marginBottom: "12px",
  alignItems: "center",
  justifyContent: "space-between"
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  textTransform: "capitalize"
}));

const LeaderboardTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: "pre",
  "& td": { borderBottom: "none" },
  "& td:first-of-type": { paddingLeft: "16px !important" }
}));

export default function Leaderboard() {
  const goldColor = "#FFD700";

  return (
    <Card elevation={3} sx={{ pt: "20px", mb: 3 }}>
      <CardHeader>
        <Title>Leaderboard</Title>
      </CardHeader>

      <Box overflow="auto">
        <LeaderboardTable>
          <TableHead>
            <TableRow>
              <TableCell colSpan={1} sx={{ px: 3 }}>
                Rank
              </TableCell>
              <TableCell colSpan={2} sx={{ px: 0 }}>
                User
              </TableCell>
              <TableCell colSpan={2} sx={{ px: 0 }}>
                Words Learned
              </TableCell>
              <TableCell colSpan={2} sx={{ px: 0 }}>
                Quizzes Completed
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {leaderboardData.map((user, index) => (
              <TableRow key={index} hover>
                <TableCell colSpan={1} sx={{ px: 0, textAlign: "center" }}>
                  {index === 0 ? <StarIcon sx={{ color: goldColor }} /> : index + 1}
                </TableCell>

                <TableCell colSpan={2} sx={{ px: 0, textTransform: "capitalize" }}>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Avatar src={user.avatar} />
                    <Paragraph>{user.name}</Paragraph>
                  </Box>
                </TableCell>

                <TableCell align="left" colSpan={2} sx={{ px: 0 }}>
                  {user.wordsLearned}
                </TableCell>

                <TableCell sx={{ px: 0 }} align="left" colSpan={2}>
                  {user.quizzesCompleted}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </LeaderboardTable>
      </Box>
    </Card>
  );
}

const leaderboardData = [
  {
    avatar: "/assets/images/users/user-1.jpg",
    name: "Daniel",
    wordsLearned: 150,
    quizzesCompleted: 10
  },
  {
    avatar: "/assets/images/users/user-2.jpg",
    name: "Sarah",
    wordsLearned: 130,
    quizzesCompleted: 9
  },
  {
    avatar: "/assets/images/users/user-3.jpg",
    name: "Michael",
    wordsLearned: 120,
    quizzesCompleted: 8
  },
  {
    avatar: "/assets/images/users/user-4.jpg",
    name: "Amina",
    wordsLearned: 100,
    quizzesCompleted: 7
  },
  {
    avatar: "/assets/images/users/user-5.jpg",
    name: "Lucas",
    wordsLearned: 90,
    quizzesCompleted: 6
  }
];
