// 첫글자를 대문자로 만들기

let txt = 'grape';
let txtArr = Array.from(txt.toLocaleLowerCase());   // 배열로 만들면서, 전부다 소문자로 저장
txtArr[0] = txtArr[0].toLocaleUpperCase();  // 배열의 첫번째 요소를 대문자로 바꾸고
let cvt = txtArr.join('');  // 배열을 string으로 
console.log(cvt);