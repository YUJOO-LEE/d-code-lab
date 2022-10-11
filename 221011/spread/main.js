/*

전개 연산자
spread operator

*/

const arr = [1,2,3];
const arr2 = arr;

arr[0] = 0;

console.log(arr, arr2);

const arr3 = [...arr];
// 전개 연산자 사용 얕은 복사

arr3[0] = 100;

console.log(arr, arr2, arr3);

const arr4 = [...arr, 4];
// 복사해서 값 1개 추가
console.log(arr4);

const arr5 = [...arr, ...arr4];
console.log(arr5);