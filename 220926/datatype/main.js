let num1 = '2';
let num2 = 2;
let isOk = true;
let error;
let isBlank = null;

console.log(typeof(num1),typeof(num2),typeof(isOk),typeof(error),typeof(isBlank));

/*

<자료형의 구분>
* 원시형 자료 (primitive type)
  - 특정 값이 메모리에 저장 (값만 저장)

  1. string (문자열) 문자 값을 가지는 자료
  2. number (숫자) 숫자 값을 가지는 자료
  3. boolean (참거짓) true, false
  4. undefined 변수를 만들고 할당하지 않음

* 참조형 자료 (reference type)
  - 값의 참조 주소값만 메모리에 저장되는 것 (관련 내장 함수까지 같이 참조)

  5. null(object) 값이 비어있지만 명시적으로 비워둠
  6. array (배열) 여러 개의 값들을 그룹으로 저장 (입력, 탐색 시 순서값으로 동작. 순서가 매우 중요)
  7. object (객체) 여러 개의 값들을 그룹으로 저장 (값마다 고유의 key를 부여)

* 형 변환
  let num1 = '2';
  let num2 = 3;
  let result = num1 + num2; // '23'; 
  - 연산되는 숫자 num2를 강제로 문자열로 형변환시켜 두개의 문자를 서로 이어준 것

* 논리 연산자
  ! : not
  && : and
  || : or
  not => and => or
*/