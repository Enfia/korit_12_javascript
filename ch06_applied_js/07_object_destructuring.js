/*
  중요함
*/

function getPerson(){
  return {
    fName:'영',
    lName:'김',
    age: 20,
    email:'kim0@test.com',
    city: '부산광역시',
    contry: '대한민국'
  };
}

// let kimCity = getPerson().city; // 이런 방법도 있음
// let kimEmail = getPerson().email;

console.log(`해당 지원자는 ${getPerson().city}에 살고 있고 email은 ${getPerson().email}입니다.`);

let {email, city} = getPerson();

console.log(`해당 지원자는 ${city}에 살고 있고 email은 ${email}입니다.`);

function displayFullName({fName, lName}){
  console.log(`${lName}${fName}`);
}
displayFullName(getPerson()); // 호출시 매개변수와 정의시 매개변수의 차이점이 중요함 React할때 계속 씀 