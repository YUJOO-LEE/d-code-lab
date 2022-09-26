/* 
  반복문의 종류
*/

const fruits = ['apple', 'melon', 'banana'];
for (let i = 0; i < fruits.length; i++) {
  코드실행
}
for (let el of fruits) {
  코드실행
}
fruits.forEach(함수);
fruits.map(함수);

return; // 정지 후 반환
break;  // 정지 후 빠져나옴
continue; // 멈추고 다음 반복으로 진행 (특정조건만 빼고 반복할때)

/*
  배열
*/


fruits.push('grape'); // 배열의 마지막에 값 추가
fruits.pop(); // 배열의 마지막 값을 제거

fruits.unshift('grape'); // 배열의 가장 앞에 값 추가
fruits.shift(); // 배열의 가장 앞의 값을 제거

fruits.splice(1,1); // (인덱스, 삭제 갯수, 삽입 요소)
fruits.splice(1); // (인덱스부터 뒤의 모든 값 삭제)

const fruits1 = ['strawberry', 'orange'];
const fruits2 = ['apple', 'melon', 'banana'];
const newfruits = fruits1.concat(fruits2);  // 두개의 배열 합쳐서 반환

const fruits5 = ['apple', 'melon', 'banana', 'apple'];
fruits5.indexOf('apple'); // 첫번째 발견된 값 인덱스 0 반환
fruits5.indexOf('orange'); // 없으면 -1 반환
fruits5.lastIndexOf('apple'); // 마지막부터 발견된 값 인덱스 3 반환

fruits5.includes('apple');  // 배열에 포함되어 있으면 true
fruits5.includes('orange');  // 배열에 포함되어 있으면 false

fruits5.length; // 배열의 길이 4
fruits5[fruits5.length-1];  // 마지막값 = 배열의 길이 - 1