let brands = ['애플', '구글', '메타', '아마존', '삼성'];
console.log(brands);
console.log(brands[0]);

console.log('반복문 부분입니다.');

for(let i = 0; i < brands.length; i++){
  console.log(brands[i]);
}

let productList = [
  {
    name: '솔의눈',
    price: 700,
  },
  {
    name: '커피',
    price: 700,
  },
  {
    name: '파워에이드',
    price: 1200,
  },
  {
    name: '오렌지주스',
    price: 1000,
  },
  {
    name: '보리차',
    price: 1200,
  },
  {
    name: '콜라',
    price: 800,
  },
];
console.log('반복문2 부분입니다.');
for(let i = 0; i <productList.length; i++){
  console.log(productList[i].name);
}

let inputCoin = 800;
let outputList = [];

for(let i = 0; i<productList.length; i++){
  if(productList[i].price <= inputCoin){
    outputList.push(productList[i].name)
  }
}
console.log('구매 가능한 음료 목록은 '+outputList+'입니다.');