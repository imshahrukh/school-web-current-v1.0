import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { FC, useEffect, useState } from "react";
import CustomButton from "../../../components/custom-buttom";
import InputFeild from "../../../components/input-feild";
import PageContainor from "../../../components/page-containor";
import { storage } from "../../../config/firebase";
import { ADMIN } from "../../../constants/role";
import { addNewAnnouncement, updateNewAnnouncement } from "./announcment";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import { useLocation } from "react-router-dom";
interface INewAnnouncment {
  status?: string;
  object?: any;
}
const Announcemnt: FC<INewAnnouncment> = () => {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [file, setFile] = useState<any>(null);
  let [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [operation, setOperation] = useState("");
  let [object, setObject] = useState<any>();
  const [uploading, setUploading] = useState(false);
  const notify = (text: string) => toast(text);
  const location = useLocation();

  useEffect(() => {
    if (location.state !== null) {
      const { operation, object }: any = location.state;
      setOperation(operation);
      setObject(object);
      if (operation === "UPDATE") {
        setTitle(object?.title);
        setDescription(object?.description);
        setImage(object?.image);
      }
    }
  }, []);
  useEffect(() => {
    if (image !== "") {
    }
  }, [image]);
  const addAnnouncment = () => {
    setImage("");
    setUploading(true);
    if (operation === "UPDATE") {
      uploadUpdatedFile();
    } else {
      uploadFile();
    }
  };

  const uploadFile = () => {
    if (!file) return;
    const storageRef = ref(storage, `/file/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapShot) => {
        const prog = Math.round(
          (snapShot.bytesTransferred / snapShot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => {
        console.log(err);
        setUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImage(url);
          setUploading(false);
          // add to store latter when we apply redux here
          const ann_object = {
            title,
            description,
            url: url,
          };

          const uploadAnn = async () => {
            const data = await addNewAnnouncement(ann_object);
            if (data) {
              notify("File Upload....");
              setTitle("");
              setDescription("");
              setFile("");
            } else {
              notify("Fail to upload file");
            }
          };
          uploadAnn();

          // save to database
        });
      }
    );
  };

  const uploadUpdatedFile = () => {
    console.log("hi");
    if (!file) {
      const updateObject = {
        title,
        description,
        url: object?.url,
      };
      console.log(updateObject);
      const uploadAnn = async () => {
        const data = await updateNewAnnouncement(object._id, updateObject);
        if (data) {
          setTitle("");
          setDescription("");
          setFile("");
          setUploading(false);
        } else {
          notify("Fail to upload file");
        }
      };
      uploadAnn();
      return;
      // call the method
    }
    const storageRef = ref(storage, `/file/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapShot) => {
        const prog = Math.round(
          (snapShot.bytesTransferred / snapShot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => {
        console.log(err);
        setUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImage(url);
          setUploading(false);
          // add to store latter when we apply redux here
          const ann_object = {
            title,
            description,
            url: url,
          };

          const uploadAnn = async () => {
            const data = await updateNewAnnouncement(object, ann_object);
            if (data) {
              notify("File Upload....");
              setTitle("");
              setDescription("");
              setFile("");
            } else {
              notify("Fail to upload file");
            }
          };
          uploadAnn();

          // save to database
        });
      }
    );
  };
  return (
    <PageContainor role={ADMIN}>
      <div className="space-y-4">
        <ToastContainer />

        <InputFeild
          input={title}
          setInput={setTitle}
          label="Title"
          placeholder="Enter the Title"
        ></InputFeild>

        <div className="flex">
          <div className="mr-20 flex justify-center pt-4">Data</div>
          <div className="w-full h-14 border-2 border-gray-400 rounded flex items-center px-3">
            {moment().format("L")}
          </div>
        </div>
        <div className="flex">
          <div className="w-32 flex felx-start">Lable</div>

          <textarea
            placeholder="Enter title"
            rows={5}
            value={description}
            onChange={(e: any) => {
              setDescription(e.target.value);
            }}
            className=" text-gray-800  border-2 border-gray-400 outline-none  px-4 w-full rounded"
          ></textarea>
        </div>
        {uploading ? (
          <div className="text-center">Uploading File and Data</div>
        ) : (
          <div className="flex justify-between items-center">
            <div className="">
              <div className="w-32">Upload Image</div>
              <input
                onChange={(e: any) => {
                  setFile(e.target.files[0]);
                }}
                type="file"
                placeholder="Enter title"
                className="bg-blue-500  text-white outline-none rounded"
              ></input>
            </div>
            {uploading ? <>Uploading file</> : <></>}
            <div className="items-center w-[510px] flex justify-end">
              {operation === "UPDATE" ? (
                <>
                  <CustomButton
                    title="Upload"
                    type="Update"
                    action={addAnnouncment}
                  ></CustomButton>
                </>
              ) : (
                <>
                  <CustomButton
                    title="Add"
                    type="Add"
                    action={addAnnouncment}
                  ></CustomButton>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </PageContainor>
  );
};

export default Announcemnt;
