import { call } from "../../api/ApiService";

const childId = localStorage.getItem("childId");

export const postChat = () => {
  return call(`/api/chatbot/feedback?childId=${childId}`, "POST", null)
    .then((response) => {
      if(response) {
        return response;
      }
    });
}

export const getFeedbackList = () => {
  return call(`/api/chatbot/feedback/list?childId=${childId}`, "GET", null)
    .then((response) => {
      if(response) {
        return response;
      }
    })
}