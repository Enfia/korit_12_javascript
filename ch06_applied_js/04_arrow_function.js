// 함수 선언식
function hello1(name){
  return `Hello ${name}`;
}

// 함수 표현식
const hello2 = function (name){
  return `오하요 ${name}`;
}

// 화살표 함수 방식(람다식 할 때도 다양한 방법으로 함)
const hello3 = (name) => {return `안녕하세요 ${name}`};

// 매개변수가 하나일 때는 소괄호 생략 가능
const hello4 = name => {return `또 안녕하세요 ${name}`};

// 실행문이 하나일 때는 중괄호 생략 가능
const hello5 = name => `또또 안녕하세요 ${name}`;

// 매개변수가 아예 없으면 비어있는 소괄호 사용
const helloEveryone = (name='여러분') => `안녕하세요 ${name}`;
