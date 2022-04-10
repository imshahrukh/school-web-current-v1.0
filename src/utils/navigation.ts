import { ADMIN, STUDENT, TEACHER } from "../constants/role";

export const landMeToPage = (navigation: any, role: string) => {
  if (role === ADMIN) {
    navigation("/admin/addannouncment");
  } else if (role === STUDENT) {
    navigation("/student/profile");
  } else if (role === TEACHER) {
    navigation("/teacher/attendance");
  } else {
    console.log("no route found");
  }
};
