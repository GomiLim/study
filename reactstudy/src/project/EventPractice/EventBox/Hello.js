import React from 'react';

const Hello = (props) => {
  const { name, children } = props; 
  return (
    <div>
      안녕하세여 제 이름은 { name }입니다.
      {children}
    </div>
  )
}

//기본값 설정
Hello.defaultProps = {
  name: '멍뭉이'
}

export default Hello;
