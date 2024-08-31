import { call } from "../../api/ApiService";

export const getIconList = (content) => {
  return call(`/api/diary/icon/select?content=${content}`, "GET", null)
    .then((response) => {
      if(response) {
        return response;
      }
    });
}
/*
export const getIconFont = (iconId) => {
  return call(`/api/diary/icon?iconId=${iconId}`, "GET", null)
    .then((response) => {
      if(response) {
        return response.font;
      }
    });
}*/