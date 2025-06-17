import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    axios
      .get<Student[]>("https://localhost:5000/api/v1/Student")
      .then((response) => setStudents(response.data));
  }, []);

  return (
    <>
      <Typography variant="h3">Students</Typography>
      <List>
        {students.map((student) => (
          <ListItem key={student.id}>
            <ListItemText>{student.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default App;
