import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { FC, useEffect, useState } from "react";
import CustomButton from "../../../components/custom-buttom";
import InputFeild from "../../../components/input-feild";
import PageContainor from "../../../components/page-containor";
import { storage } from "../../../config/firebase";
import { ADMIN } from "../../../constants/role";
import { addNewScholership } from "./scholership";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddScholership: FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  let [file, setFile] = useState<any>(null);
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const notify = (text: string) => toast(text);

  useEffect(() => {
    if (image !== "") {
    }
  }, [image]);
  const addAnnouncment = () => {
    setImage("");
    setUploading(true);
    uploadFile();
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
            const data = await addNewScholership(ann_object);
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
        <div className="text-center">Scholership</div>
        <div className="flex">
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
          <div className="flex flex-col items-center justify-center w-full space-y-2">
            <CustomButton
              title="Add"
              type="Add"
              action={addAnnouncment}
            ></CustomButton>
            <CustomButton
              title="Update"
              type="Update"
              action={() => {
                console.log("testing Delete ...");
              }}
            ></CustomButton>
          </div>
        )}
      </div>
    </PageContainor>
  );
};

export default AddScholership;
