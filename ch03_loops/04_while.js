let number = [];
let boolean2 = true;
let indexNumber = 0;

while(boolean2){
  number.push(indexNumber+1);
  console.log(number[indexNumber++]);
  if(indexNumber == 5){
    boolean2 = false;
  }
}

console.log(number);