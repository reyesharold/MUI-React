import Box from "@mui/material/Box";
import StudentCard from "./StudentCard";

type Props = { students: Student[] };

export default function StudentList({ students }: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {students.map((student) => (
        <StudentCard key={student.id} student={student}></StudentCard>
      ))}
    </Box>
  );
}
