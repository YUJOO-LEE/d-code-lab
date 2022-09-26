/*

<함수>

미리function 키워드로 자주 쓰는 코드들을 묶어주는 행위
위치와 상관 없음
함수끼리 모아두기 가능

* 호출 : 미리 정의되어 있는 함수를 호출해야 실행됨
* 인수 (파라미터 = 매개변수) : 외부에서 특정 값을 함수 내부로 전달해주는 통로 이름
* 함수의 반환값 (return) : 함수 내부의 값을 함수 외부로 반환

*/

plus(3,4);

function plus(num1, num2) {
  let result = num1 + num2;
  return result;
}

function calc(num1, num2, type) {
  let typeNum1 = typeof(num1);
  let typeNum2 = typeof(num2);
  let typeType = typeof(type);

  if (typeNum1 !== 'number' || typeNum2 !== 'number' || typeType !== 'string') {
    console.log('첫번째, 두번째는 숫자, 세번째는 기호를 입력하세요.');
  } else if (typeType === '+') {
    plus(num1, num2);
  }
}