import { FC, useState } from "react";
import CustomButton from "../../../components/custom-buttom";
import CustomDropDown from "../../../components/custom-dropdown";
import InputFeild from "../../../components/input-feild";

const Announcemnt: FC = () => {
  const [title, setTitle] = useState("");
  return (
    <div className="space-y-4">
      <div className="flex">
        <div className="w-32">Upload Image</div>
        <input
          type="file"
          placeholder="Enter title"
          className="bg-blue-500  text-white outline-none rounded"
        ></input>
      </div>

      <InputFeild
        input={title}
        setInput={setTitle}
        label="Title"
        placeholder="Enter the Title"
      ></InputFeild>
      <div className="flex">
        <div className="w-32 flex felx-start">Lable</div>

        <textarea
          placeholder="Enter title"
          rows={5}
          className=" text-gray-800  border-2 border-gray-400 outline-none  px-4 w-full rounded"
        ></textarea>
      </div>
      <div className="flex flex-col items-center justify-center w-full space-y-2">
        <CustomButton
          title="Add"
          type="Add"
          action={() => {
            console.log("testing Add ...");
          }}
        ></CustomButton>
        <CustomButton
          title="Update"
          type="Update"
          action={() => {
            console.log("testing Delete ...");
          }}
        ></CustomButton>
      </div>
    </div>
  );
};

export default Announcemnt;
