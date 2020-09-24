import React from 'react';
import styled from 'styled-components';

const style = {
  background: 'red',
  color: '#fff',
  border: '1px solid blue'
}

const divStyled = styled.div`
  background: pink;
  color: #000;
  border: 1px solid yellow;
`;
const Part1 = () => {
  
  return (
    <>
      <div style={style}> style 객체로 만들어 적용</div>
      {/* <divStyled>styled component 이용</divStyled> */}
    </>
  )
}

export default Part1;