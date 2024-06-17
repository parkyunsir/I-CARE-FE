import { call } from "../../api/ApiService";

export const postProfile = () => {
  const childId = "2c949d909027bd7c019027be0a720001";
  return call(`/api/profile?childId=${childId}`, "POST", null)
    .then(response => {
      if(response) {
        return response;
      }
    });
}

export const getProfileList = () => {
  const childId = "2c949d909027bd7c019027be0a720001";
  return call(`/api/profile/list?childId=${childId}`, "GET", null)
    .then(response => {
      if(response) {
        return response;
      }
    })
}

export const getProfileImage = (profileId) => {
  const childId = "2c949d909027bd7c019027be0a720001";
  return call(`/api/profile/image?childId=${childId}&profileId=${profileId}`, "GET", null)
    .then(response => {
      if(response) {
        return response;
      }
    })
}

export const getProfile = (profileId) => {
  const childId = "2c949d909027bd7c019027be0a720001";
  return call(`/api/profile?childId=${childId}&profileId=${profileId}`, "GET", null)
    .then(response => {
      if(response) {
        return response;
      }
    })
}