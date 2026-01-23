let brands = ['애플', '구글', '메타', '아마존', '삼성'];
for (const brand in brands){
  console.log(brand); // 인덱스 넘버가 나옴
  console.log(brands[brand]);
}
for(const brand of brands){
  console.log(brand); // 값이 나옴
}

let language = 'JavaScript'
for (const indexNumber in language){
  console.log(indexNumber);
  console.log(language[indexNumber]);
}
for(const letter of language){
  console.log(letter);
}