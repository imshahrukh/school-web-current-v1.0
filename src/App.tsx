import React, { useState } from "react";
import "./App.css";
import ItemsContainor from "./components/Object-Containor/Items-containor";
import SideBar from "./components/side-bar";
import TopBar from "./components/top-bar";
import Announcemnt from "./pages/ADMIN/Annoucment/announcement";
import AllAnnouncment from "./pages/ADMIN/Annoucment/view-all-announcement";
import TimeTable from "./pages/ADMIN/time-table";
import ViewStudentPerDepartment from "./pages/ADMIN/view-students-per-department";
import Singin from "./pages/auth/signin";
import StudentForm from "./pages/FORM/create-student-form";
import Profile from "./pages/STUDENT/profile";

function App() {
  const [showNavBar, setShowNavBar] = useState(false);
  return (
    // <div>
    //   <Singin />
    // </div>
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
      <SideBar showNavBar={showNavBar} setShowNavBar={setShowNavBar}></SideBar>
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <TopBar showNavBar={showNavBar} setShowNavBar={setShowNavBar}></TopBar>
        <ItemsContainor>
          {/* <Profile /> */}
          {/* <StudentForm /> */}
          <Announcemnt></Announcemnt>
          {/* <ViewStudentPerDepartment></ViewStudentPerDepartment> */}
          {/* <TimeTable></TimeTable> */}
          <AllAnnouncment></AllAnnouncment>
        </ItemsContainor>
      </div>
    </div>
  );
}

export default App;
