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

// let products = 
//   {
//     apple:
//     {
//       price: 500,
//       description: '맛있는 사과',
//       amount: 10,
//     },
//     banana:
//     {
//       price: 5000,
//       description: '맛있는 바나나',
//       amount: 1,
//     },
//     orange: {
//       price: 2500,
//       description: '맛있는 오렌지',
//       amount: 3,
//     },
//     avocado:{
//       price: 3000,
//       description: '맛있는 아보카도',
//       amount: 9,
//     },
//     peach: {
//       price: 1500,
//       description: '맛있는 복숭아',
//       amount: 2,
//     },
//     kiwi: {
//       price: 1000,
//       description: '맛있는 키위',
//       amount: 4,
//     }
// };
let productNamesArr = [
  '사과',
  '바나나',
  '오렌지',
  '아보카도',
  '복숭아',
  '키위',
];
 
let productNamesObj = {
  banana: '바나나',
  apple: '사과',
  avocado: '아보카도',
  orange: '오렌지',
  kiwi: '키위',
  peach: '복숭아',
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


/* 

// Q.products의 id를 차례대로 콘솔 찍기
//   productNameObj를 사용해서 products에 "name" field를 추가하기

let productName = Object.keys(productNamesObj);

console.log(productName)

// productName.forEach(function(ele,idx){
//   products[ele].name = ele;
// })

productName.forEach(function(ele,idx){
  products.forEach(function(ele2,idx2){
    products[idx2].id === ele && (products[idx2].name = ele);
  })
})
console.log(products);
*/


// for(var idx in products) {
//   productName[idx]
// }
// console.log(productNamesObj['apple'])
// products.forEach((products, idx) => {
//   console.log(productName[idx])
//   if (products.id === productName[idx]) {
//     products.name = productNamesObj[Object.keys(productNamesObj)[idx]]
//   }
//   console.log(products)
//   //그런데 순서바뀌니까 안됨 forEach라 그런가.
//   // 이거 현성님이 말했던 그 속성 선택자로 해야하는것같은데
//   // 객체라서 이게 되나 모르겠네~
// })

/*
Q. 상품의 id만 뽑아서 새로운 배열로 만들기
   새로 만든 배열과 기존 products를 둘 다 console.log

let newProduct = products.map(arr => {
  return  arr.id;
})
console.log(products)
console.log(newProduct)
*/

/*
Q. productNameArr에 '파인애플', '오렌지'가 포함되어있는지 확인하기
//한번에 3개를 검색할 수는 없는걸까여
console.log(productNamesArr.includes('오렌지'))
console.log(productNamesArr.includes('파인애플'))
*/

/*
Q. productNameArr에서 '아보카도'가 몇번째인지 찾기
console.log(productNamesArr.indexOf('아보카도'));
*/


/*
Q. amount가 5 이하인 애들만 거르기

function findAmount ( ele, idx) {
  if ( ele.amount > 5) {
    return true;
  }
}

//filter는 반복문을 돌리지 않아도 알아서 배열안에서 찾습니다..
//for, forEach 헛질완룡..

console.log(products.filter(findAmount));
*/


/*
Q.  상품을 가격이 높은 순/낮은 순으로 재배열하기

products.sort((a, b)=> {
  return b.price - a.price;
})
console.log(products)
*/


/* 
let result = products.reduce((acc, cur, i) => {
  cur = products[i].price * products[i].amount;
  return acc + cur
}, 0);

console.log(result);
//Q. 왜왱징 ? 4000[object Object] ?????
// 아 현재값에 저렇게 넣어줘야했구나아
*/

/* 
Q. 다음 상품을 추가한 뒤 products를 콘솔로 찍기 :
let pineapple  = {
    id : "pineapple",
    price : 8000,
    description : "새로운 파인애플",
    amount : 11
}

// products.push(pineapple);
products.concat(pineapple);
console.log(products);
console.log(products.concat(pineapple));

push() : 기존배열 리턴 => 기존배열 + 새로운 값 되어 기존배열에 원소를 추가하여 배열의 총 길이를 리턴
concat() : 새로운 배열을 리턴 => 기존 배열을 복사하여 원소를 추가하여 새 배열을 리턴 
          -> concat은, 서로 다른 두 배열을 합칠때 많이 사용
*/


/*
Q. 상품이 총 몇 개인지 확인
console.log(products.length)
 */


// 질문!
// Q. 상품의 description만 뽑아서 콘솔로 찍되, '맛있는' 을 '달콤한' 으로 바꿔서 찍기
// let a = [];
// products.forEach(products=>{
  // console.log(products.description)
  // return a.push(products.description.replace('맛있는', '달콤한'));
  //난 6개가 다 나왔으면 좋겠는데 왜 맨날 1개만 나오는걸까여
// })
// console.log(a)


let result = products.map((arr, idx) => {
  arr.description2 = arr.description.replace('맛있는', '넘나리 달콤한');
  return arr;
}) 
// products의 desc까지 영향받는게 문제
console.log(result) //왜 안바뀔까아ㅏㅏㅏㅏㅏ
console.log(products) //왜 안바뀔까아ㅏㅏㅏㅏㅏ


/*
Q. productNamesArr를 string형태로 콘솔 찍기
console.log(productNamesArr.join('-'));
*/


/*
질문!
Q. 위(13)에서 만든 string에서 '오렌지'와 '복숭아' 사이에 있는 문자열만 따로 빼기
let aa = productNamesArr.join('-');
var aaaa = aa.substring(11,15)
console.log(aaaa)

*/
/*
Q. 위(13)에서 만든 string을 다시 배열로 바꿔 콘솔 찍기
let aa = productNamesArr.join('-');
var aaaa = aa.split('-')
console.log(aaaa)
*/






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