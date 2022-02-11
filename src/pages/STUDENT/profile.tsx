import { FC } from "react";

const Profile: FC = () => {
  return (
    <>
      <div className="w-full flex border-t-2 border-b-2 border-gray-200">
        <div className="w-2/4 ">
          <div className="mt-4 text-lg font-bold">ID</div>
          <div className="py-2">Shahrukh</div>
        </div>
        <div className="w-2/4 pl-4 border-l-2 border-gray-200">
          <div className="mt-4 text-lg font-bold">Name</div>
          <div className="py-2">Shahrukh</div>
        </div>
      </div>
      <div className="w-full flex border-b-2 border-gray-200">
        <div className="w-2/4 ">
          <div className="mt-4 text-lg font-bold">Department</div>

          <div className="py-2">Shahrukh</div>
        </div>
        <div className="w-2/4 pl-4 border-l-2 border-gray-200">
          <div className="mt-4 text-lg font-bold">Designation</div>
          <div className="py-2">Shahrukh</div>
        </div>
      </div>

      <div className="w-full flex border-b-2 border-gray-200">
        <div className="w-2/4 ">
          <div className="mt-4 text-lg font-bold">Conatact</div>

          <div className="py-2">Shahrukh</div>
        </div>
        <div className="w-2/4 pl-4 border-l-2 border-gray-200">
          <div className="mt-4 text-lg font-bold">Email</div>
          <div className="py-2">Shahrukh</div>
        </div>
      </div>
      <div className="w-full flex border-b-2 border-gray-200">
        <div className="w-2/4 ">
          <div className="mt-4 text-lg font-bold">Address</div>

          <div className="py-2">Shahrukh</div>
        </div>
        <div className="w-2/4 pl-4 border-l-2 border-gray-200">
          <div className="mt-4 text-lg font-bold">Email</div>
          <div className="py-2">Shahrukh</div>
        </div>
      </div>
    </>
  );
};

export default Profile;
