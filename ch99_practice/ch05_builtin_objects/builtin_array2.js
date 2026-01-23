// 🧩 문제 5 (map – 구조 변환)
// 📌 문제

// 아래 데이터를 fullName 형태로 바꾼 새로운 배열을 만드시오.

// let users = [
//   { fName: '영', lName: '김' },
//   { fName: '일', lName: '김' },
//   { fName: '이', lName: '김' },
// ];


// ✔️ 결과 예시

// [
//   { fullName: '김영' },
//   { fullName: '김일' },
//   { fullName: '김이' }
// ]


// ✔️ 조건

// map() 사용


let users = [
  { fName: '영', lName: '김' },
  { fName: '일', lName: '김' },
  { fName: '이', lName: '김' },
];

let result = users.map(function(user){
  return {
    fullName: user.lName + user.fName
  }
})

console.log(result);