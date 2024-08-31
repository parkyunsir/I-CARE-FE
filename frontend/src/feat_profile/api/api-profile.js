import { call } from "../../api/ApiService";

const childId = localStorage.getItem("childId");

export const postProfile = () => {
  const childId = localStorage.getItem("childId");
  return call(`/api/profile?childId=${childId}`, "POST", null)
    .then(response => {
      if(response) {
        return response;
      }
    });
}

export const getProfileList = () => {
  const childId = localStorage.getItem("childId");
  return call(`/api/profile/list?childId=${childId}`, "GET", null)
    .then(response => {
      if(response) {
        return response;
      }
    })
}

export const getProfileImage = (profileId) => {
  const childId = localStorage.getItem("childId");
  return call(`/api/profile/image?childId=${childId}&profileId=${profileId}`, "GET", null)
    .then(response => {
      if(response) {
        return response;
      }
    })
}

export const getProfile = (profileId) => {
  const childId = localStorage.getItem("childId");
  return call(`/api/profile?childId=${childId}&profileId=${profileId}`, "GET", null)
    .then(response => {
      if(response) {
        return response;
      }
    })
}

export const getProfileState = () => {
  const childId = localStorage.getItem("childId");
  return call(`/api/child?childId=${childId}`, "GET", null)
    .then(response => {
      if(response) {
        return response.profileState;
      }
    })
}