// * splice
// 데이터를 추가하거나 삭제할 때 모두 사용 가능 (원본 변화 o)

const data = ['감혜빈', '공병구', '정상춘', '최윤주', '최현'];
console.log(data)	// [ '감혜빈', '공병구', '정상춘', '최윤주', '최현' ]

// delete data[3];
// console.log(data)	// [ '감혜빈', '공병구', '정상춘', <1 empty item>, '최현' ]

// 매개변수 2개 이상은 들어가야함 (조작할 index, 지울 갯수, + 추가 할 데이터)
data.splice(3, 1)
console.log(data)	// [ '감혜빈', '공병구', '정상춘', '최현' ]
data.splice(3, 0, '유유유', '이혜주')
console.log(data)	// [ '감혜빈', '공병구', '정상춘', '유유유', '이혜주', '최현' ]

let rst = data.splice(2, 1);	// 작업의 결과물은 지워진 값들을 배열로
console.log(rst);	// [ '정상춘', '유유유', '이혜주' ]

console.log(data)	// [ '감혜빈', '공병구', '유유유', '이혜주', '최현' ]

// * slice
// 자르다, 일부를 잘라내서 새로운 배열을 반환(원본 변화 x), 둘 다 index로 사용됨
let rstt = data.slice(2, 4);
console.log(rstt);	// [ '유유유', '이혜주' ]
console.log(data);	// [ '감혜빈', '공병구', '유유유', '이혜주', '최현' ]