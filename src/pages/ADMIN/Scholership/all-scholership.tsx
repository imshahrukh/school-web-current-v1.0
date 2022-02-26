import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import PageContainor from "../../../components/page-containor";
import { ADMIN, STUDENT } from "../../../constants/role";
import { getAllScholership } from "./scholership";
import NewAnnounment from "./../Annoucment/new-announcement";

const AllScholership: FC = () => {
  const [viewAllAnnouncment, setViewAllAnnouncment] = useState(false);
  const [loading, setLoading] = useState(true);
  let [singleAnn, setSingleAnn] = useState({
    title: "",
    url: "",
    description: "",
  });
  const [allAnn, setAllAnn] = useState([]);

  // search the anncoume
  const filterAnn = (id: string) => {
    const sA = allAnn.filter((el: any) => el._id === id);
    console.log(sA);
    setSingleAnn(sA[0]);
  };
  // call the the annouc
  useEffect(() => {
    const getAllAnn = async () => {
      const _ann = await getAllScholership();
      if (_ann) {
        setLoading(false);
        setAllAnn(_ann);
      } else {
        setLoading(true);
      }
    };
    getAllAnn();
  }, []);

  return (
    <>
      <PageContainor role={ADMIN}>
        <div className="">
          {loading ? (
            <>lOading data....</>
          ) : viewAllAnnouncment ? (
            <NewAnnounment
              setViewAllAnnouncment={setViewAllAnnouncment}
              announcemnt={singleAnn}
            ></NewAnnounment>
          ) : (
            allAnn &&
            allAnn.map((el: any, key) => (
              <div key={key} className="my-2">
                <div className="w-full py-2 border-2 border-gray-300 rounded flex justify-between items-center px-4">
                  <div className="text-gray-600">{el.title}</div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        setViewAllAnnouncment(true);
                        filterAnn(el._id);
                      }}
                      className="bg-blue-500 text-white w-max rounded px-12 py-4"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => {
                        setViewAllAnnouncment(true);
                        filterAnn(el._id);
                      }}
                      className="bg-blue-500 text-white w-max rounded px-12 py-4"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </PageContainor>
    </>
  );
};

export default AllScholership;
