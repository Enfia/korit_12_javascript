// function add(a, b){
//   let sum = a + b;
//   return sum;
// }

// console.log(add(3,4));

let scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function calcSum(scores){
  let sum = 0;
  for (let i = 0; i < scores.length; i++){
    sum += scores[i];
  }
  return sum;
}

function calcAvg(scores){
  let avg = calcSum(scores)/scores.length;
  return avg;
}

function printScore(scores){
  console.log('총합은 '+ calcSum(scores) +' 입니다.');
  console.log('평균은 '+ calcAvg(scores) +' 입니다.');
}

printScore(scores);