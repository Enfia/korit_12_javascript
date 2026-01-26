function say (message){
  if (message != undefined) {
    console.log(message);
  } else {
    console.log('매개변수가 넘어오지 않았습니다.');
  }
}

say();

/**
  say() 안에 매개변수 값이 있는지 없는지를 체크하는 로직이 필수임
*/

function say2(message='매개변수가 넘어오지 않았습니다2.'){
  console.log(message);
}

say2();
say2('매개변수에 값을 넣었습니다.');
// 알면 줄여 쓸 수 있음