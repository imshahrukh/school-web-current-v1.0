import React, { FC, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ItemsContainor from "./components/Object-Containor/Items-containor";
import SideBar from "./components/side-bar";
import TopBar from "./components/top-bar";
import ADDAnnouncemnt from "./pages/ADMIN/Annoucment/announcement";
import AllAnnouncment from "./pages/ADMIN/Annoucment/view-all-announcement";
import TimeTable from "./pages/ADMIN/time-table";
import ViewStudentPerDepartment from "./pages/ADMIN/view-students-per-department";
import Singin from "./pages/auth/signin";
import StudentForm from "./pages/FORM/create-student-form";
import Profile from "./pages/STUDENT/profile";

function App() {
  return (
    // <div>
    //   <Singin />
    // </div>
    <>
      <Routes>
        <Route path="/" element={<>game</>}></Route>
        <Route path="/signin" element={<Singin />} />

        {/* Admin */}
        <Route path="/admin/addannouncment" element={<ADDAnnouncemnt />} />
        <Route path="/admin/addstudent" element={<StudentForm />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/admin/allannouncment" element={<AllAnnouncment />} />

        {/* Student */}

        <Route path="/student/profile" element={<Profile />} />
        <Route path="/student/announcement" element={<AllAnnouncment />} />
      </Routes>
    </>
  );
}

export default App;
// TODO
