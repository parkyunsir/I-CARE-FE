import { call } from "../../api/ApiService";

const childId = localStorage.getItem("childId");

export const getDiaryList = (startDate, endDate) => {
  return call(`/api/diary/list?childId=${childId}&start=${startDate}&end=${endDate}`, "GET", null)
    .then((response) => {
      if(response) {
        return response;
      }
    });
}

export const postDiary = (diary) => {
  return call(`/api/diary?childId=${childId}`, "POST", diary)
    .then((response) => {
      if(response) {
        return response;
      }
    });
}

export const putDiary = (diary) => {
  return call(`/api/diary?childId=${childId}`, "PUT", diary)
    .then((response) => {
      if(response) {
        return response;
      }
    });
}

export const deleteDiary = (diary) => {
  return call(`/api/diary?childId=${childId}`, "DELETE", diary)
    .then((response) => {
      if(response) {
        return response;
      }
    })
}