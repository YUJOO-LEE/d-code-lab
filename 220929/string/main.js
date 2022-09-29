let txt = 'Hello World World';

let result = txt.length;  // 띄어쓰기도 문자로 포함
result = txt.indexOf('Wo'); // 지정한 문자열이 시작되는 인덱스
result = txt.indexOf('Wo', 8);  // 지정한 인덱스부터 검색
result = txt.lastIndexOf('Wo');  // 마지막 인덱스부터 (뒤부터) 검색

console.log(result);




let txt2 = 'banana, apple, melon';

let result2 = txt2.slice(8, 13);  // 9부터 13인덱스까지 반환
result2 = txt2.substring(8, 13);  // 9부터 13인덱스까지 반환
result2 = txt2.substr(8, 5);  // 9부터 5개 문자 반환
result2 = txt2.replace('World', 'Everyone');
// 처음 만나는 한번만 대체해줌
result2 = txt2.toUpperCase(); // 대문자로 변경
result2 = txt2.toLowerCase(); // 소문자로 변경

console.log(result2);




let txt3 = '안녕하세요';
let userName = 'YUJOO';
let result3 = txt3.concat('! ', userName, '님');
// 여러개의 문자열 합치기 = 결과물 : 문자열

console.log(result3);




let fruits = 'banana,apple,melon';
let result4 = fruits.split(',');
// ','을 기준으로 나눔 = 결과물 : 배열

console.log(result4);

