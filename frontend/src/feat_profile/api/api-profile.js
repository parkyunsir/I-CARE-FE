import { call } from "../../api/ApiService";

const childId = localStorage.getItem("childId");

export const postProfile = () => {
  return call(`/api/profile?childId=${childId}`, "POST", null)
    .then(response => {
      if(response) {
        return response;
      }
    });
}

export const getProfileList = () => {
  return call(`/api/profile/list?childId=${childId}`, "GET", null)
    .then(response => {
      if(response) {
        return response;
      }
    })
}

export const getProfileImage = (profileId) => {
  return call(`/api/profile/image?childId=${childId}&profileId=${profileId}`, "GET", null)
    .then(response => {
      if(response) {
        return response;
      }
    })
}

export const getProfile = (profileId) => {
  return call(`/api/profile?childId=${childId}&profileId=${profileId}`, "GET", null)
    .then(response => {
      if(response) {
        return response;
      }
    })
}

export const getProfileState = () => {
  return call(`/api/child?childId=${childId}`, "GET", null)
    .then(response => {
      if(response) {
        return response.profileState;
      }
    })
}