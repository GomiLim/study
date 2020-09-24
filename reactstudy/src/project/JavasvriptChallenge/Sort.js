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
 
// amount 순으로

products.sort((a, b) => {
  return a.amount - b.amount;
})
// console.log(products)

// description (한글) 순으로
products.sort((a, b) => {
  return b.description.slice(4) > a.description.slice(4) ? -1 : 0;
})
// console.log(products)


// 알파벳 순으로
products.sort((a,b)=> {
  var a = a.id.toString().toLowerCase(); 
  var b = b.id.toString().toLowerCase(); 
  return ( a < b ) ? -1 : ( a == b ) ? 0 : 1; 
})
// console.log(products)

const Sort = () => {

  return (
    <div>
      sort ()
    </div>
  )

}

export default Sort;