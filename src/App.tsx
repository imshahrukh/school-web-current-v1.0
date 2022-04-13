import React, { FC, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ItemsContainor from "./components/Object-Containor/Items-containor";
import SideBar from "./components/side-bar";
import TopBar from "./components/top-bar";
import ADDAnnouncemnt from "./pages/ADMIN/Annoucment/announcement";
import AllAnnouncment from "./pages/ADMIN/Annoucment/view-all-announcement";
import AddScholership from "./pages/ADMIN/Scholership/add-scholership";
import AllScholership from "./pages/ADMIN/Scholership/all-scholership";
// import TimeTable from "./pages/ADMIN/time-table";
// import ViewStudentPerDepartment from "./pages/ADMIN/view-students-per-department";
import Singin from "./pages/auth/signin";
import StudentForm from "./pages/FORM/create-student-form";
import TeacherForm from "./pages/FORM/create-teacher";

import Profile from "./pages/STUDENT/profile";
import TeacherProfile from "./pages/TEACHER/profile";
import { CreateAccount } from "./pages/FORM/create-account";

import DashboardTeacherAttendance from "./pages/COURSE/attendance";
import DashboardTeacherMarkAttendance from "./pages/TEACHER/mark-attendance";
import DashboardTeacherAttendanceSummery from "./pages/TEACHER/view-attendance-summery";
import ViewIndividualCourseAttendance from "./pages/COURSE/view-individual-course-attendance";
import StudentCoursesAttendance from "./pages/STUDENT/student-courses";
import UpdateAttendance from "./pages/TEACHER/updateAttendance";
import { SearchStudent } from "./pages/ADMIN/search-student";

function App() {
  return (
    // <div>
    //   <Singin />
    // </div>
    <>
      <Routes>
        <Route path="/" element={<Singin />}></Route>
        <Route path="/signin" element={<Singin />} />
        {/* Admin */}
        <Route path="/admin/addannouncment" element={<ADDAnnouncemnt />} />
        <Route path="/admin/addstudent" element={<StudentForm />} />
        <Route path="/admin/addteacher" element={<TeacherForm />} />
        <Route path="/admin/searchstudent" element={<SearchStudent />} />
        <Route path="/admin/createAccount" element={<CreateAccount />} />

        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/admin/allannouncment" element={<AllAnnouncment />} />
        <Route path="/admin/addscholership" element={<AddScholership />} />
        <Route path="/admin/allScholership" element={<AllScholership />} />
        {/* Student */}
        <Route path="/student/profile" element={<Profile />} />
        <Route path="/student/announcement" element={<AllAnnouncment />} />
        {/* Teacher */}
        <Route
          path="/teacher/attendance"
          element={<DashboardTeacherAttendance />}
        />
        <Route path="/teacher/profile" element={<TeacherProfile />} />

        <Route
          path="/teacher/markattendance"
          element={<DashboardTeacherMarkAttendance />}
        />
        <Route
          path="/attendance/updateAttendance"
          element={<UpdateAttendance />}
        />
        <Route
          path="/teacher/attendanceSummery"
          element={<DashboardTeacherAttendanceSummery />}
        />
        <Route
          path="/teacher/individualcourseattendance"
          element={<ViewIndividualCourseAttendance />}
        />
        {/* Student */}
        <Route path="/student/courses" element={<StudentCoursesAttendance />} />
        {/* ViewIndividualCourseAttendance */}
      </Routes>
    </>
  );
}

export default App;
// TODO
