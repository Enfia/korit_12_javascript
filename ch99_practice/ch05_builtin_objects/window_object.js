// 🧩 문제 7 (Window 객체)
// 📌 문제

// 3초 뒤에 "안녕하세요"가 콘솔에 출력되도록 하시오.
// 단, 실행 전에 취소할 수 있는 구조로 작성하시오.

// ✔️ 사용

// setTimeout

// clearTimeout

let timerId

function setTimeOutTest(){
  timerId = setTimeout(function(){console.log('안녕하세요');}, 3000);
}

function clearTimeOutTest(){
  clearTimeout(timerId);
  console.log('취소됨');
}

setTimeOutTest();
clearTimeOutTest();
// setTimeout(clearTimeOutTest, 1000); // 1초 뒤 취소