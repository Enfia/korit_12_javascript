function sum1(x1 , x2){
  let y = x1 + x2;
  return y;
}

console.log(sum1(5, 7));

function sum2 (x1 , x2, x3, x4){
  let y = x1 + x2 + x3 + x4;
  return y;
}

console.log(sum2(5, 7, 1, 3));

/*
  일반적인 함수 정의는 매개변수를 몇 개 선언할지 미리 지정해둠
  이를 해결하기 위한 것이 Rest Parameter임
*/

function sum3 (...args){ // 매개변수를 이렇게 설정하면 매개변수 개수에 맞춰서 할당이 가능하고 배열로 저장됨
  let total = 0;
  for(let x of args){
    total += x;
  }
  return total;
}

console.log(sum3(1,2,3,4,5,6,7,8,9,10));