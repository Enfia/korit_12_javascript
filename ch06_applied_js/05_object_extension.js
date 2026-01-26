let fName = 'Jone';
let lName = 'Doe';

let person = {
  firstName : fName,
  lastName : lName,
};

console.log(fName);
console.log(person.firstName);
console.log(person['firstName']);

/*
  변수에 할당된 값을 key로 치환해서 사용하는 것이 불가능
  object literal syntax extensiuon을 사용하면 변수에 
  활당된 문자열의 값을 사용할 수 있음 대괄호([])를 사용함
*/
let type = 'student';
let score = {
  [type]: 'Jane',
  score:95
}

console.log(score.score);
console.log(score); // 결과값 : { student: 'Jane', score: 95 }
console.log(score.student);
/*
  key를 동적으로 생성 가능함
*/