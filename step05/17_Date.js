/* 
	Date 객체
		날짜와 시간을 만들어둔 객체
		- UTC(국제표준시) = GMT(그리니치 평균시) ? 경도 0의 시간
		- KST ? 한국표준시 (UTC+9)

		https://poiemaweb.com/js-date
		https://www.w3schools.com/js/js_date_formats.asp
*/

let today = new Date(); 
// 이때 생성된 시점 기준으로 객체가 만들어짐
// 이 코드가 작동한 시스템의 시간을 공유
console.log(today, typeof today);   // 2022-06-23T05:34:48.546Z object

console.log(today.getTime());   // 1655962631556
// Date 객체는 내부적으로는 어떤 수치를 하나 가지게 되는데,
// 이 수치는 1970.01.01 00:00:00:000z 부터 현재까지의 밀리세컨드

let d1 = new Date(1000);
console.log(d1);    // 1970-01-01T00:00:01.000Z

//static fuction
let now = Date.now();   // getTime
console.log(now, typeof now)    //1655963584298 number

let past = Date.UTC(81, 0, 7)  // 그 시간의 millsec
// year(1900+), month(0~11), date(1~30)
console.log(past)   //356313600000
console.log(new Date(past)) // 1981-01-07T00:00:00.000Z

/* 
	YYYY-MM-DD
	DD/MM/YYYY
	parsing되는 string format은 몇가지가 있는데 이정도가 generally
*/

let init = Date.parse('2022-06-07 09:00 GMT+0900');
console.log(init)   // 1654560000000

// 현재 시간을 기간으로 60일 전
// 단위는 ms(== 1/1000초)
let prev60 = new Date(Date.now() - (1000*60*60*24*60));
//1000*60(1분)*60(1시간)*24(1일)*60(60일)
console.log(prev60);	//2022-04-24T06:08:10.836Z