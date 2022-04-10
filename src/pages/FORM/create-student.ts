import axios from "axios";
import { URL } from "../../constants/url";

interface IStudent {
  stdName: string;
  stdFatherName: string;
  number: string;
  email: string;
  program: string;
  year: string;
  address: string;
  password: string;
  gender: string;
  semester: string;
  memberID: string;
  section: string;
  batch: string;
  stdID: string;
}

export const addNewStudent = async (studentObject: IStudent) => {
  const { email, password } = studentObject;
  const newMember = await axios.post(URL + "member", {
    role: "STUDENT",
    email,
    password,
  });
  console.log(newMember.data.data.member);

  if (newMember.data.data) {
    studentObject.memberID = newMember.data.data.member._id;
    console.log({
      stdName: studentObject.stdName,
      stdFather: studentObject.stdFatherName,
      stdPhoneNumber: studentObject.number,
      stdBatch: studentObject.batch,
      stdSection: studentObject.section,
      stdProgram: studentObject.program,
      stdDesignation: "Student",
      gender: studentObject.gender,
      stdAddress: studentObject.address,
      memberID: studentObject.memberID,
      stdSemester: "1",
      stdID: studentObject.stdID,
    });

    const newStudent = await axios.post(URL + "student", {
      stdName: studentObject.stdName,
      stdFather: studentObject.stdFatherName,
      stdPhoneNumber: studentObject.number,
      stdBatch: studentObject.batch,
      stdSection: studentObject.section,
      stdProgram: studentObject.program,
      stdDesignation: "Student",
      gender: studentObject.gender,
      stdAddress: studentObject.address,
      memberID: studentObject.memberID,
      stdSemester: "1",
      stdID: studentObject.stdID,
    });
    if (newStudent.data.data) {
      console.log(newStudent.data.data.student);
      return newStudent.data.data.student;
    } else {
      return null;
    }
  } else {
    return null;
  }
};
