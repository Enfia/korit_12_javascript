// join
let names = ['김영', '김일', '김이'];
console.log(names.join(' / '));

// pop
let scores = [100, 90, 80];
let lastScore = scores.pop(); // 마지막 요소를 삭제하고 그 값을 리턴함
console.log(scores);
console.log(lastScore);

// push
scores.push(70);
console.log(scores);

// shift
let firstScore = scores.shift();
console.log(scores);  // 첫 번째 요소를 삭제하고 그 값을 리턴함
console.log(firstScore);

let newIndex = scores.unshift(4.5); // 0번지에 새 요소 추가하고 새로운 length를 리턴함
console.log(scores);
console.log(newIndex);

// 배열 요소 변경
scores[2] = 'A+';
console.log(scores);

// splice
scores.splice(1, 0, 'B+', '100점', 4.0); // 1번지에 삭제하지 않고 0은 삭제하지 않겠음그리고 B+, 100점, 4.0이 추가됨
console.log(scores); // 결과값 [ 4.5, 'B+', '100점', 4, 90, 'A+' ]

// concat
let veges = ['토마토', '수박', '샐러리'];
let meats = ['닭고기', '소고기', '양고기'];
let fruits = ['사과', '딸기', '망고'];
let newFoods = veges.concat(meats, fruits);
console.log(newFoods);

// filter
let words = ['spray', 'limit', 'elite', 'extraordinary', 'dstruction', 'persent'];

// 배열명.filter(function(매개변수)){ return 매개변수.length > 6}
let result = words.filter(function(word){
  return word.length > 6;
})
console.log(result); // 결과값 [ 'extraordinary', 'dstruction', 'persent' ]

let persons = [
  {
    name: '김영',
    point: 78,
    city: '서울'
  }, 
  {
    name: '김일',
    point: 98,
    city: '서울'
  }, 
  {
    name: '김이',
    point: 76,
    city: '제주'
  }, 
  {
    name: '김삼',
    point: 81,
    city: '부산'
  }
];

// 배열명.filter(function(매개변수)){ return 매개변수.key 값 > 80} 
let personResult = persons.filter(function(person){
  return person.point > 80
})
console.log(personResult);

// map fliter와 map은 새 배열을 만듦
let userList = [
  {
    fName: '영',
    lName: '김',
    email: 'a@test.com'
  },
  {
    fName: '일',
    lName: '김',
    email: 'b@test.com'
  },
  {
    fName: '이',
    lName: '김',
    email: 'c@test.com'
  },
  {
    fName: '삼',
    lName: '김',
    email: 'd@test.com'
  },
  {
    fName: '사',
    lName: '김',
    email: 'e@test.com'
  }
];

let modifiedUserList = userList.map(function(user){
  return {
    fullName: user.lName + user.fName,
    lName: user.lName,
    fName: user.fName,
    email: user.email
  };
})

console.log(modifiedUserList);
console.log(userList);