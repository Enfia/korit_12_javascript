/*
  중요함
*/

let arr1 = [4,5,6];
let arr2 = [1,2,3];
let arr3 = [...arr2, ...arr1]; // 자료형이 배열이 아님 각각의 요소임 / spread 연산자가 도입됨
console.log(arr3); // 결과값 : [ 1, 2, 3, 4, 5, 6 ]

let cd = 'CD';
let alphabets = ['A', 'B', ...cd];
let alphabets2;
console.log(alphabets);

for (let i = 0; i<alphabets.length; i++){
  console.log(alphabets[i].toLowerCase());
}

for(let x of alphabets){
  console.log(x.toLowerCase());
}