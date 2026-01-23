// 🧩 문제 6 (JSON – 진짜 자주 나옴)
// 📌 문제

// 다음 JSON 문자열을 JS 객체로 변환한 뒤
// 두 번째 사람의 이름을 콘솔에 출력하시오.

// let text = '{"employees":[{"fName":"영","lName":"김"},{"fName":"일","lName":"김"}]}';


// ✔️ 사용 메서드

// JSON.parse()

let text = '{"employees":[{"fName":"영","lName":"김"},{"fName":"일","lName":"김"}]}';

let jsObj = JSON.parse(text);
console.log(jsObj);
let result2 = jsObj.employees[1].lName + jsObj.employees[1].fName;

console.log(result2);