import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type Props = { student: Student };
export default function StudentDetails({ student }: Props) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardMedia
        component="img"
        // src={`/images/categoryImages/${student.course}`}
        src={`/images/categoryImages/culture.jpg`}
      />
      <CardContent>
        <Typography variant="h5">{student.name}</Typography>
        <Typography variant="subtitle1" fontWeight="light">
          {student.id}
        </Typography>
        <Typography variant="body1">{student.course}</Typography>
      </CardContent>
      <CardActions>
        <Button color="primary">Edit</Button>
        <Button color="inherit">Cancel</Button>
      </CardActions>
    </Card>
  );
}
