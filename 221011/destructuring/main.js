const arr = ['red', 'green', 'blue'];

// const red = arr[0];
// const green = arr[1];
// const blue = arr[2];


const [red, green, blue] = arr;
// 변수명 임의 지정 가능
console.log(red, green, blue);

/*

구조분해(비구조화) 할당
Destructuring assignment

변수 명을 배열처럼 받고 배열 값을 담기만 함

*/

const student = {
  name: 'David',
  age: 20,
  address: 'seoul'
}

const {age, ...rest} = student;
// 변수명 통일
console.log(age, rest);