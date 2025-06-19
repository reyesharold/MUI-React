import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

type Props = {
  student: Student;
};

export default function StudentCard({ student }: Props) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5">{student.name}</Typography>
        <Typography sx={{ color: "text.secondary", mb: 1 }}>
          ID : {student.id}
        </Typography>
        <Typography variant="body2">{student.year} Year</Typography>
        <Typography variant="subtitle1">{student.course}</Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between", pb: 2 }}
      >
        <Chip label={student.course} variant="outlined" />
        <Button size="medium" variant="contained">
          View
        </Button>
      </CardActions>
    </Card>
  );
}
