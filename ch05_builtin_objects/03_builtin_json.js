let data = {
  "employees": [
    {"fName" :"영", "lName" : "김"},
    {"fName" :"일", "lName" : "김"},
    {"fName" :"이", "lName" : "김"}
  ]
};
let result = data.employees[2].lName + data.employees[2].fName;
console.log(result);

let stringValue = JSON.stringify(data); // 객체를 string으로 바꿔줌
console.log(stringValue);

let text = '{"employees":[{"fName":"zero","lName":"kim"},{"fName":"one","lName":"kim"},{"fName":"two","lName":"kim"}]}';
let jsObj = JSON.parse(text);
console.log(jsObj);

// JS Object <-> JSON 으로 바뀌는 경우가 많음
// JSON.parse / JSON.stringify 자주 씀