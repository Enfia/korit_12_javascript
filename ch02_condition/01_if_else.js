let age = 12;
let busFare = 0;

if (age < 7){
  busFare = 0;
} else if(age >= 7 && age < 13){
  busFare = 450;
} else if (age >= 13 && age < 19){
  busFare = 720;
} else if(age >= 19 && age < 70){
  busFare = 1200;
} else if(age >= 70){
  busFare = 0;
}

console.log(busFare + '원');

let height = 172;
let weight = 68;
let grade = '';
let bmi = (weight / (height/100)**2).toFixed(1);


if (bmi < 18.5){
  grade = '낮음';
} else if (bmi >= 18.5 && bmi <= 22.9){
  grade = '보통';
} else if (bmi >= 23 && bmi <= 24.9){
  grade = '약간 높음';
} else if (bmi >= 25 && bmi <= 29.9){
  grade = '높음';
} else if (bmi >= 30 && bmi <= 34.9){
  grade = '매우높음';
} else if (bmi >= 35){
  grade = '가장높음';
} else{
  grade = '에러';
}

console.log('당신의 bmi 지수는 ' + bmi+ '이고 ' + grade + '입니다.');