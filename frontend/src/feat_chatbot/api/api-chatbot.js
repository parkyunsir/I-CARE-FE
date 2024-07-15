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

export const deleteChat = () => {
  call(`/api/chatbot?childId=${childId}`, "DELETE", null)
    .then((response) => { });
}

export const getTopicList = () => {
  return call(`/api/chatbot/topic`, "GET", null)
    .then((response) => {
      if(response) {
        return response;
      }
    })
}