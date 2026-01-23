// 🧩 문제 4 (filter – 실무 핵심)
// 📌 문제

// 점수가 80점 이상인 사람만 추출하시오.

// let students = [
//   { name: '김영', score: 78 },
//   { name: '김일', score: 92 },
//   { name: '김이', score: 81 },
//   { name: '김삼', score: 65 },
// ];


// ✔️ 조건

// filter() 사용

// 새로운 배열로 반환

let students = [
  { name: '김영', score: 78 },
  { name: '김일', score: 92 },
  { name: '김이', score: 81 },
  { name: '김삼', score: 65 },
];

let result = students.filter(function(student){
  return student.score >= 80;
})

console.log(result);