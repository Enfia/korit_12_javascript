// DOM 요소 가져오기 (HTML과 JS 연결)

// 상품 이름 입력창
const itemNameInput = document.getElementById('item-name-input');

// 상품 가격 입력창
const itemPriceInput = document.getElementById('item-price-input');

// 쇼핑 목록이 들어갈 ul
const shoppingList = document.getElementById('shopping-list');

// 추가 버튼
const addItemBtn = document.getElementById('add-item-btn');

// localStorage에 저장된 shoppingItems를 불러옴
// 없으면(null) 빈 배열 [] 사용
let shoppingItems = JSON.parse(localStorage.getItem('shoppingItems')) || [];


// 쇼핑리스트를 렌더하는 함수
function renderShoppingList() {

  // 기존에 있던 리스트 전부 삭제
  shoppingList.innerHTML = '';

  // shoppingItems 배열을 하나씩 반복
  shoppingItems.forEach((item, index) => {

    // li 요소 생성
    const li = document.createElement('li');
    li.className = 'shopping-item';

    // 구매 완료된 상품이면 CSS 클래스 추가
    if (item.purchased) {
      li.classList.add('purchased');
    }

    // 체크박스 생성함
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.purchased; // 구매 여부 반영

    // 상품명 span 생성
    const nameSpan = document.createElement('span');
    nameSpan.className = 'shopping-name';
    nameSpan.textContent = item.name;

    // 가격 span 생성
    const priceSpan = document.createElement('span');
    priceSpan.className = 'shopping-price';
    priceSpan.textContent = `${item.price}원`;

    // 삭제 버튼 생성
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.innerHTML = '&times;'; // × 표시

    // li 안에 요소들 추가
    li.append(checkbox, nameSpan, priceSpan, removeBtn);

    // ul 안에 li 추가
    shoppingList.appendChild(li);


    // 구매 완료 체크 이벤트
    checkbox.addEventListener('change', () => {
      // 해당 아이템의 구매 여부 변경
      shoppingItems[index].purchased = checkbox.checked;

      // 체크 상태에 따라 CSS 클래스 토글
      li.classList.toggle('purchased', checkbox.checked);

      // 변경사항 저장
      saveShoppingList();
    });

    // 삭제 버튼 이벤트
    removeBtn.addEventListener('click', () => {
      // 해당 index의 아이템 삭제
      shoppingItems.splice(index, 1);

      // 다시 렌더링
      renderShoppingList();

      // 변경사항 저장
      saveShoppingList();
    });
  });
}


// ==============================
// localStorage에 저장하는 함수
// ==============================
function saveShoppingList() {
  localStorage.setItem(
    'shoppingItems',
    JSON.stringify(shoppingItems)
  );
}


// ==============================
// 아이템 추가 함수
// ==============================
function addShoppingItem() {

  // 입력값 가져오기 (앞뒤 공백 제거)
  const name = itemNameInput.value.trim();
  const price = itemPriceInput.value.trim();

  // 상품명이 비어 있으면 경고
  if (name === '') {
    alert('제품 이름을 입력하세요');
    return;
  }

  // 가격이 비어 있으면 경고
  if (price === '') {
    alert('가격을 입력하세요');
    return;
  }

  // 배열에 새 상품 객체 추가
  shoppingItems.push({
    name: name,          // 상품명
    price: Number(price),// 가격 (숫자로 변환)
    purchased: false     // 처음엔 미구매 상태
  });

  // 입력창 초기화
  itemNameInput.value = '';
  itemPriceInput.value = '';

  // 화면 갱신 + 저장
  renderShoppingList();
  saveShoppingList();
}


// ==============================
// 이벤트 등록
// ==============================

// 버튼 클릭 시 아이템 추가
addItemBtn.addEventListener('click', addShoppingItem);

// 상품명 입력창에서 Enter
itemNameInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') addShoppingItem();
});

// 가격 입력창에서 Enter
itemPriceInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') addShoppingItem();
});


// ==============================
// 페이지 로드 시 최초 렌더링
// ==============================
window.onload = renderShoppingList;
