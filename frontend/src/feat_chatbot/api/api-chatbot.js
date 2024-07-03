import { call } from "../../api/ApiService";

const childId = localStorage.getItem("childId");

export const postRequest = (chat) => {
  return call(`/api/chatbot?childId=${childId}`, "POST", chat)
    .then((response) => {
      if(response) {
        return response;
      }
    });
}

export const postChat = () => {
  return call(`/api/chatbot/feedback?childId=${childId}`, "POST", null)
    .then((response) => {
      if(response) {
        return response;
      }
    });
}

export const deleteChat = () => {
  call(`/api/chatbot?childId=${childId}`, "DELETE", null)
    .then((response) => { });
}