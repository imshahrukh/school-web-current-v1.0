import { Dispatch, FC, SetStateAction, useState } from "react";

interface INewAnnouncment {
  image: string;
  title: string;
  description: string;
  setViewAllAnnouncment: Dispatch<SetStateAction<boolean>>;
}

const NewAnnounment: FC<INewAnnouncment> = ({
  image,
  title,
  description,
  setViewAllAnnouncment,
}) => {
  return (
    <div className="h-full">
      <div className="flex justify-between items-center">
        <div className="my-2">{title}</div>
        <button
          onClick={() => {
            setViewAllAnnouncment(false);
          }}
          className="my-2 border-2 border-gray-300 px-4 rounded"
        >
          View All
        </button>
      </div>
      <img
        className="max-h-[416px] w-full  rounded"
        alt="announcemnt"
        src={image}
      />
      <p className="mt-4 text-bold">{description}</p>
    </div>
  );
};

const AllAnnouncment: FC = () => {
  const [viewAllAnnouncment, setViewAllAnnouncment] = useState(false);
  return (
    <div className="">
      {viewAllAnnouncment ? (
        <NewAnnounment
          title="Announcment - 1"
          setViewAllAnnouncment={setViewAllAnnouncment}
          description="  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore fuga
        pariatur itaque, recusandae dolorem velit assumenda aspernatur
        voluptates quasi placeat atque ipsam! Consequuntur nemo rem perspiciatis
        atque optio, rerum repudiandae?"
          image="https://userguiding.com/wp-content/uploads/2021/04/announcement-product-updates.jpg"
        ></NewAnnounment>
      ) : (
        <div className="w-full py-2 border-2 border-gray-300 rounded flex justify-between items-center px-4">
          <div className="text-gray-600">Announcment - 01</div>
          <button
            onClick={() => {
              setViewAllAnnouncment(true);
            }}
            className="bg-blue-500 text-white w-max rounded px-12 py-4"
          >
            View
          </button>
        </div>
      )}
    </div>
  );
};

export default AllAnnouncment;
