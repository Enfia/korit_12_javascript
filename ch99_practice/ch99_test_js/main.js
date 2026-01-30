// 3. 다음 코드에서 map 메서드가 예상과 다른 결과를 반환하는 이유를 설명하고, 올바르게 수정하시오.

const users = [
    { id: 1, name: "이성계" },
    { id: 2, name: "이방과" },
    { id: 3, name: "이방원" }
];

const userMap = users.map(function(user){
  return {
    userId: user.id *2
  }
})

for(const user of userMap){
  console.log(user);
}
console.log(users);           // 예상 결과: [{ id: 1, name: "이성계" }, { id: 2, name: "이방과" }, { id: 3, name: "이방원" }]


// - 요구사항

// 위 코드에서 map 메서드가 예상한 대로 동작하지 않는 이유를 설명하시오.

// users 배열을 변경하지 않으면서 새로운 배열을 생성하도록 코드를 수정하시오.