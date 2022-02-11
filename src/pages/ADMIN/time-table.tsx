import { FC, useState } from "react";
import CustomButton from "../../components/custom-buttom";
import CustomDropDown from "../../components/custom-dropdown";
const data = [
  "America",
  "India",
  "Australia",
  "Argentina",
  "Ireland",
  "Indonesia",
  "Iceland",
  "Japan",
];
const TimeTable: FC = () => {
  const [dropValue, setDropValue] = useState("");

  return (
    <div className="flex flex-col h-full">
      {/* row 1 */}
      <div className="flex flex-col md:flex-row lg:flex-row">
        <CustomDropDown
          items={data}
          placeHolder="Select Derpartment"
          dropDownValue={dropValue}
          setDropDownValue={setDropValue}
          w="80%"
          lable="Select Department"
        ></CustomDropDown>
        <CustomDropDown
          items={data}
          placeHolder="Select Program"
          dropDownValue={dropValue}
          setDropDownValue={setDropValue}
          w="80%"
          lable="Select Department"
        ></CustomDropDown>
      </div>
      {/* row 2 */}
      <div className="flex flex-col md:flex-row lg:flex-row my-6">
        <CustomDropDown
          items={data}
          placeHolder="Select Derpartment"
          dropDownValue={dropValue}
          setDropDownValue={setDropValue}
          w="80%"
          lable="Select Department"
        ></CustomDropDown>
        <CustomDropDown
          items={data}
          placeHolder="Select Program"
          dropDownValue={dropValue}
          setDropDownValue={setDropValue}
          w="80%"
          lable="Select Department"
        ></CustomDropDown>
      </div>

      {/* upload btn */}

      <div className="">
        <div className="w-[150px] my-2">Upload Time Table</div>
        <input
          type="file"
          placeholder="Enter title"
          className="bg-blue-500  text-white outline-none rounded"
        ></input>
      </div>

      {/* upload the pdf button */}
      <div className="flex flex-1 justify-center items-center">
        <CustomButton
          title="Upload"
          type="Add"
          action={() => {
            console.log("testing Delete ...");
          }}
        ></CustomButton>
      </div>
    </div>
  );
};

export default TimeTable;
