import { call } from "../../api/ApiService";

const childId = localStorage.getItem("childId");

export const getQuestionList = () => {
  return call(`/api/question/list`, "GET", null)
    .then((response) => {
      if(response) {
        return response;
      }
    });
}

export const postQuestion = (question) => {
  return call(`/api/question?childId=${childId}`, "POST", question)
    .then((response) => {
      if(response) {
        return response;
      }
    });
}

export const getQuestion = () => {
  return call(`/api/question?childId=${childId}`,"GET",null)
    .then((response) => {
      if (response) {
        return response;
      }
    });
}

export const getQuestionByOutput = (output) => {
  return call(`/api/question/search?childId=${childId}&output=${output}`, "GET", null)
    .then((response) => {
      if (response) {
        return response;
      }
    })
}