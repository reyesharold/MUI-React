type Student = {
  id: string;
  name: string;
  course: string;
  year: string;
  subjects: Subject[];
};

type Subject = {
  studentId: string;
  studentName: string;
  subjectId: string;
  subjectName: string;
};
