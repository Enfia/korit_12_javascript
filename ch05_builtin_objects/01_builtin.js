let person = new Object();
person.fName = '영';
person.lName = '김';

person.getFullName = function(){
  return this.lName + this.fName;
}
console.log(person.getFullName());

let strExample = '안녕하세요, 제 이름은 김일입니다. My name is Kim1. My age is 20 years old.';
let indexNum = strExample.indexOf('My');
console.log(indexNum); // 결과값은 20

// 실무 사용 사례
// 전화번호 입력 받을 때 - 없어야 하면 걸러내야 하기 때문에 010-1234-5678이라는
// String 값에 indexOf('-')를 확인하여 리턴이 -1이면 다음단계로
// 아니면 -을 제거하는 함수가 실행

let lastIndexNum = strExample.lastIndexOf('My');
console.log(lastIndexNum); // 결과값은 37

// lastIndexOf()는 매개변수로 들어간 문자열이 둘 이상 반복 되는 경우에 마지막에 발견된 인덱스를 리턴함

let strFruits = 'Apple, Banana, Kiwi';
let banana = strFruits.slice(7,13);
console.log(banana);
let slicedFruits = strFruits.slice(7);
console.log(slicedFruits);

// 파이썬에 -인덱스가 존재함 JS에는 없음 하지만 slice에 매개변수로 -인덱스를 넣을 수 있음