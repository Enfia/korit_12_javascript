// 🧩 문제 3 (반복문 + 배열)
// 📌 문제

// 다음 배열에서 짝수만 새로운 배열로 추출하시오.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];


// ✔️ 조건

// for-of 사용

// 결과 예시 → [2, 4, 6, 8]

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let result = []
for (let number of numbers){
  if(number%2 ==0){
    result.push(number);
  }
}

console.log(result);