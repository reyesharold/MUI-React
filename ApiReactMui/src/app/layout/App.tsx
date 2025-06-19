import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import StudentDashboard from "../../features/Students/Dashboard/StudentDashboard";

function App() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    axios
      .get<Student[]>("https://localhost:5000/api/v1/Student")
      .then((response) => setStudents(response.data));
  }, []);

  return (
    <>
      <Box sx={{ bgcolor: "#eeeeee" }}>
        <CssBaseline />
        <NavBar />
        <Container maxWidth="xl">
          <StudentDashboard students={students} />
        </Container>
      </Box>
    </>
  );
}

export default App;
