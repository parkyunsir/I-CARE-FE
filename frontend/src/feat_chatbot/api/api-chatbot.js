import { call } from "../../api/ApiService";

export const postRequest = (chat) => {
  const childId = "2c949d909027bd7c019027be0a720001";
  return call(`/api/chatbot?childId=${childId}`, "POST", chat)
    .then((response) => {
      if(response) {
        return response;
      }
    });
}

export const postChat = () => {
  const childId = "2c949d909027bd7c019027be0a720001";
  return call(`/api/chatbot/feedback?childId=${childId}`, "POST", null)
    .then((response) => {
      if(response) {
        return response;
      }
    });
}

export const deleteChat = () => {
  const childId = "2c949d909027bd7c019027be0a720001";
  call(`/api/chatbot?childId=${childId}`, "DELETE", null)
    .then((response) => { });
}