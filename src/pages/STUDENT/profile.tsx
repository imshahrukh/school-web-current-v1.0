import { FC, useEffect } from "react";
import PageContainor from "../../components/page-containor";
import { STUDENT } from "../../constants/role";
import { getUser } from "../../utils/localStorageFunctions";

const Profile: FC = () => {
  const { user, user_information } = getUser();
  console.log(user_information);
  return (
    <>
      <PageContainor role={STUDENT}>
        <>
          <div className="w-full flex border-t-2 border-b-2 border-gray-200">
            <div className="w-2/4 ">
              <div className="mt-4 text-lg font-bold">ID</div>
              <div className="py-2">{user_information._id}</div>
            </div>
            <div className="w-2/4 pl-4 border-l-2 border-gray-200">
              <div className="mt-4 text-lg font-bold">Name</div>
              <div className="py-2">{user_information.stdName}</div>
            </div>
          </div>
          <div className="w-full flex border-b-2 border-gray-200">
            <div className="w-2/4 ">
              <div className="mt-4 text-lg font-bold">Batch</div>

              <div className="py-2">{user_information.stdBatch}</div>
            </div>
            <div className="w-2/4 pl-4 border-l-2 border-gray-200">
              <div className="mt-4 text-lg font-bold">Gender</div>
              <div className="py-2">{user_information.gender}</div>
            </div>
          </div>

          <div className="w-full flex border-b-2 border-gray-200">
            <div className="w-2/4 ">
              <div className="mt-4 text-lg font-bold">Conatact</div>

              <div className="py-2">{user_information.stdPhoneNumber}</div>
            </div>
            <div className="w-2/4 pl-4 border-l-2 border-gray-200">
              <div className="mt-4 text-lg font-bold">Email</div>
              <div className="py-2">{user.email}</div>
            </div>
          </div>
          <div className="w-full flex border-b-2 border-gray-200">
            <div className="w-2/4 ">
              <div className="mt-4 text-lg font-bold">Address</div>

              <div className="py-2">{user_information.stdAddress}</div>
            </div>
            <div className="w-2/4 pl-4 border-l-2 border-gray-200">
              <div className="mt-4 text-lg font-bold">Password</div>
              <div className="py-2">{user.password}</div>
            </div>
          </div>
        </>
      </PageContainor>
    </>
  );
};

export default Profile;
