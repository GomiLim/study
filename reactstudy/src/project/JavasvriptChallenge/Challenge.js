import React from 'react';

let products = [
  {
    id: 'apple',
    price: 500,
    description: '맛있는 사과',
    amount: 10,
  },
  {
    id: 'banana',
    price: 5000,
    description: '맛있는 바나나',
    amount: 1,
  },
  {
    id: 'orange',
    price: 2500,
    description: '맛있는 오렌지',
    amount: 3,
  },
  {
    id: 'avocado',
    price: 3000,
    description: '맛있는 아보카도',
    amount: 9,
  },
  {
    id: 'peach',
    price: 1500,
    description: '맛있는 복숭아',
    amount: 2,
  },
  {
    id: 'kiwi',
    price: 1000,
    description: '맛있는 키위',
    amount: 4,
  },
];
 
let productNamesArr = [
  '사과',
  '바나나',
  '오렌지',
  '아보카도',
  '복숭아',
  '키위',
];
 
let productNamesObj = {
  apple: '사과',
  banana: '바나나',
  orange: '오렌지',
  avocado: '아보카도',
  peach: '복숭아',
  kiwi: '키위',
};
 /* 
 for문 써보기

 for( let i=0; i < products.length; i++) {
   if (products[i].id === 'orange') {
     break;
   }
   console.log(products[i].id);
 }
 
 products.forEach(products => {
   console.log(products.id);
 })
 
 products.map((arr, idx)=> {
   console.log(arr.id)
 })
*/

/* 
Q. 
 1 : products에서 id가 apple인 상품 찾기
 2 : products에서 id가 orange인 상품은 몇번째인지 찾기

function findApple(ele, idx) {
  if(ele.id === this) {
    console.log(idx)
    return true;
  }
}

products.filter(findApple,'orange') //배열로 반환
console.log(products.filter(findApple,'orange')) //배열로 반환);
console.log(products.find(findApple, 'orange')) //객체로 반환
console.log(products.findIndex(findApple, 'orange')) //객체로 반환
*/

let productName = Object.keys(productNamesObj);

products.forEach((products, idx) => {
  console.log(productName[idx])
  if (products.id === productName[idx]) {
    products.name = productNamesObj[Object.keys(productNamesObj)[idx]]
  }
  console.log(products)
  //그런데 순서바뀌니까 안됨 forEach라 그런가.
  // 이거 현성님이 말했던 그 속성 선택자로 해야하는것같은데
  // 객체라서 이게 되나 모르겠네~
})

const Challenge = () => {

  return (
    <div>
      Challenge
      <p id='part1'>part1</p>
      <p className='className'></p>
      <p className='className'></p>
      <p className='className'></p>
      <p className='className'></p>
      <p className='className'></p>
      <p className='className'></p>
    </div>
  )

}

export default Challenge;