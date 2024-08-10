import { call } from "../../api/ApiService";

// 전체 출력
export const showQuestion = (setItems) => {
  const childId = localStorage.getItem("childId");
  call(`/api/question?childId=${childId}`, "GET", null)
    .then((response) => {
      if (response) {
        setItems(response);
      }
    })
    .catch((error) => {
      console.error("Error fetching items", error);
    });
  };

//추가 
export const postQuestion = (item, setItems, items) => {
  const childId = localStorage.getItem("childId");
call(`/api/question?childId=${childId}`, "POST", item)
.then((response) => {
    if(response) {
    setItems([...items, response]);
    }
}) 
};

//검색
export const searchQuestion = (item, setItems, setModalOpen) => {
  const childId = localStorage.getItem("childId");
call(`/api/question/search?childId=${childId}&output=${item.output}`, "GET", null)
.then((response) => {
    if (response && response.length > 0) {
        setItems(response);
    } else {
        setModalOpen(true);
    }
})
}

//질문
export const inputQuestion = (date, setInput) => {
  const childId = localStorage.getItem("childId");
const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
const inputId = dayOfYear  % 11 + 1;
// const m = date.getMinutes();
// const inputId = m % 11 + 1;
call(`/api/question/input?childId=${childId}&inputId=${inputId}`, "GET", null)
.then((response) => {
    if(response) {
    setInput(response.input);
    }
}) 
};