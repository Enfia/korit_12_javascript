function getScores(){
  return [70, 80, 90];
}

let score = getScores();
let x = score[0];
let y = score[1];
let z = score[2];

let [a,b,c] = getScores();
console.log(a); // 결과값 : 70
console.log(b); // 결과값 : 80
console.log(c); // 결과값 : 90

let [ q, w,e,r] = [1,2,3];
console.log(q); // 결과값 : 1
console.log(w); // 결과값 : 2
console.log(e); // 결과값 : 3
console.log(r); // 결과값 : undefined