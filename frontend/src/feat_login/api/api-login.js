import { call } from "../../api/ApiService";

export function signin(userDTO) {
    return call("/api/parent/login", "POST", userDTO)
        .then((response) => {
            if (response.token) {
                localStorage.setItem("ACCESS_TOKEN", response.token);
                window.location.href = "/addchild";
            }
        });
}

export function signout() {
    localStorage.setItem("ACCESS_TOKEN", null);
    window.location.href = "/login";
}

export function signup(userDTO) {
    return call("/api/parent/signup", "POST", userDTO);
}
export function addchild(userDTO) {
    return call("/api/child", "POST", userDTO)
        .then((response) => {
            console.log("Response from server:", response); // 서버 응답 확인
            if (response && response.data && response.data.length > 0 && response.data[0].childId) {
                const childId = response.data[0].childId; // 응답 데이터에서 childId 추출
                localStorage.setItem("childId", childId); // 로컬 스토리지에 childId 저장
            }
            return response;
        })
        .catch((error) => {
            console.error("Error adding child:", error);
            throw error; // 오류 다시 던지기
        });
}


export function selectchild() {
    return call("/api/child/list", "GET")
        .then((response) => {
            console.log("Child list:", response); // 자녀 목록 확인
            return response;
        })
        .catch((error) => {
            console.error("Error fetching child list:", error);
            throw error;
        });
}
