import { call } from "../../api/ApiService";

export function signin(userDTO) {
    return call("/api/parent/login", "POST", userDTO)
        .then((response) => {
            return response;
        });
}

export function signout() {
    localStorage.setItem("ACCESS_TOKEN", null);
    window.location.href = "/login";
}

export function signup(userDTO) {
    return call("/api/parent/signup", "POST", userDTO);
}