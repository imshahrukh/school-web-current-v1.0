import axios from "axios";
import { URL } from "../../../constants/url";

export const addNewAnnouncement = async (ann_object: any) => {
  const url = URL + "announcemment";
  const new_announcement = await axios.post(url, ann_object);
  if (new_announcement.data.data.announcment) {
    console.log(new_announcement.data.data.announcment);
    return new_announcement.data.data.announcment;
  } else {
    return null;
  }
};

export const getAllAnnouncement = async () => {
  const url = URL + "announcemment";
  const new_announcement = await axios.get(url);
  if (new_announcement.data.data.announcment) {
    return new_announcement.data.data.announcment;
  } else {
    return null;
  }
};
