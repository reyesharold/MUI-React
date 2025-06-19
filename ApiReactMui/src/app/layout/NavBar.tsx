import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  MenuItem,
} from "@mui/material";
import { Group } from "@mui/icons-material";

export default function NavBar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          // position="fixed"
          sx={{
            backgroundImage:
              "linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <MenuItem sx={{ display: "flex", gap: 2 }}>
                  <Group fontSize="large" />
                  <Typography variant="h4" fontWeight="bold">
                    Reactivities
                  </Typography>
                </MenuItem>
              </Box>
              <Box sx={{ display: "flex" }}>
                <MenuItem
                  sx={{
                    fontSize: "1.2rem",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Students
                </MenuItem>
                <MenuItem
                  sx={{
                    fontSize: "1.2rem",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  About
                </MenuItem>
                <MenuItem
                  sx={{
                    fontSize: "1.2rem",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Contacts
                </MenuItem>
              </Box>
              <Button size="large" variant="contained" color="warning">
                Register Student
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  );
}
