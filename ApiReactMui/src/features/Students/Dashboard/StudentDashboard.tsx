import { Grid } from "@mui/material";
import StudentList from "./StudentList";
import StudentDetails from "../../Details/StudentDetails";
type Props = {
  students: Student[];
};
export default function StudentDashboard({ students }: Props) {
  return (
    <Grid container spacing={3}>
      <Grid size={8} sx={{ mt: 10 }}>
        <StudentList students={students}></StudentList>
      </Grid>
      <Grid size={4} sx={{ mt: 10 }}>
        {students[0] && <StudentDetails student={students[0]} />}
      </Grid>
    </Grid>
  );
}
