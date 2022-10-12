import { useState } from 'react';

function Btns(props) {

  let [index, setIndex] = useState(0);

  function minus(e) {
    setIndex(--index);
    const frame = e.target.closest('figure').querySelector('section');
    frame.style.transform = `rotate(${props.deg * index}deg)`;
    console.log(index);
  }

  function plus(e) {
    setIndex(++index);
    const frame = e.target.closest('figure').querySelector('section');
    frame.style.transform = `rotate(${props.deg * index}deg)`;
    console.log(index);
  }

  /*
  let x = 5, result;

  //선할당 후증가
  result = x++;
  console.log(result, x);  // 5,6

  //선증가 후할당
  result = ++x;
  console.log(result, x);  // 7,7

  //선할당 후감소
  result = x--;
  console.log(result, x);  // 7,6

  //선감소 후 할당
  result = --x;
  console.log(result, x);  // 5,5
  */

  return (
    <>
      <div className="btnPrev" onClick={minus}>
        <span>PREV</span>
      </div>
      <div className="btnNext" onClick={plus}>
        <span>NEXT</span>
      </div>
    </>
  )
}

export default Btns;