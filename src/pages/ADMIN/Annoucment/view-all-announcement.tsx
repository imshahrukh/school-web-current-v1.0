import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import PageContainor from "../../../components/page-containor";
import { ADMIN, STUDENT } from "../../../constants/role";
import { getAllAnnouncement } from "./announcment";
import NewAnnounment from "./new-announcement";

const AllAnnouncment: FC = () => {
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
      const _ann = await getAllAnnouncement();
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
      <PageContainor role={STUDENT}>
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
              <div key={key}>
                <div className="w-full py-2 border-2 border-gray-300 rounded flex justify-between items-center px-4">
                  <div className="text-gray-600">Announcment - 01</div>
                  <button
                    onClick={() => {
                      setViewAllAnnouncment(true);
                      filterAnn(el._id);
                    }}
                    className="bg-blue-500 text-white w-max rounded px-12 py-4"
                  >
                    View
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </PageContainor>
    </>
  );
};

export default AllAnnouncment;
