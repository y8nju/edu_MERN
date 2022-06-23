console.log(new Date());	// 2022-06-23T06:10:15.720Z
console.log(new Date(1000*60*60*24*365*50));	// 2019-12-20T00:00:00.000Z
console.log(new Date('2022-06-23'))	// 2022-06-23T00:00:00.000Z
console.log(new Date(2022, 5, 22))	//2022-06-21T15:00:00.000Z

let today = new Date();
console.log(today.toLocaleString());	// 2022. 6. 23. 오후 3:16:40 
console.log(today.toUTCString());	// Thu, 23 Jun 2022 06:16:40 GMT 

console.log(today.toDateString());	// Thu Jun 23 2022 
console.log(today.toLocaleDateString());	// 2022. 6. 23. 
console.log(today.toTimeString())	// 15:16:40 GMT+0900 (대한민국 표준시) 
console.log(today.toTimeString().split(/\s+/)[0]);	// 15:16:40

// get
console.log(today.getDate());	// 일 
console.log(today.getDay());	//요일 (0:일 ~ 6: 토)
console.log(today.getDay(), weeks[today.getDay()]);
console.log(today.getFullYear());	// 년도
console.log(today.getHours());	// 시간(0~23)
console.log(today.getTime())	// 현재 ms 값
console.log(today.getTimezoneOffset())	//

//set
console.log(today.setHours(2));
console.log(today.toTimeString());

