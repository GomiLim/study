import React from 'react';

function BlackDog () {
  this.name = '흰둥쓰'
  return {
    name : '검둥이',
    bark : function () {
      console.log(this.name + ': 멍멍');
    }
  }
}

const Black = new BlackDog();
Black.bark();

function WhitekDog () {
  this.name = '흰둥쓰'
  return {
    name : '검둥이',
    bark : () => {
      console.log(this.name + ': 멍멍');
    }
  }
}

const whitek = new WhitekDog();

whitek.bark();

function YellowDog () {
  var name = '누렁이';
  return {
    name : '검둥이',
    bark : function () {
      console.log(this.name + ': 멍멍'); //검둥이
      console.log(name + ': 멍멍'); //누렁이
    }
  }
}
YellowDog().bark()

// const YellowDog = () => {
//   var name = '누렁이';
//   return {
//     name : '검둥이',
//     bark : function () {
//       console.log(this.name + ': 멍멍'); //검둥이
//       console.log(name + ': 멍멍'); //누렁이
//     }
//   }
// }

// YellowDog().bark()

const ArrowFunction = () => {
  return (
    <div>
      ArrowFunction
    </div>
  )
}

export default ArrowFunction;
