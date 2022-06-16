/*
	최대 공약수를 찾아주는 function을 정의하고 테스트해보
	findGCD 란 이름으로
	매개변수가  2개면, 최대공약수를 찾고
	매개변수가 1개면 그 숫자의 최대 약수를 찾아주는 것으로
 */
/*
유클리드 호제법 1
let getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);
let t = getGCD(8);

console.log(t);
*/

/*
유클리드 호제법 2
let findGCD = (num1, num2) => {
  if (num1 && num2 !== undefined) {
    return num2 > 0 ? findGCD(num2, num1 % num2) : num1;
  } else {
    const answer = [];
    let idx = 1;
    while (idx <= num1) {
      if (num1 % idx === 0) {
        if (idx !== 1 && idx !== num1) {
          answer.push(idx);
        }
      }
      idx += 1;
    }

    if (answer.length !== 0) {
      return answer[answer.length - 1];
    } else {
      return "not existed";
    }
  }
};
let t = findGCD(8);

console.log(t);
*/


let findGCD = (num1, num2) => {
  if (num1 && num2 !== undefined) {
    let gcd = 1;

    for (let i = 2; i <= Math.min(num1, num2); i++) {
      if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
      }
    }
    return gcd;
  } else {
    const answer = [];
    let idx = 1;
    while (idx <= num1) {
      if (num1 % idx === 0) {
        if (idx !== 1 && idx !== num1) {
          answer.push(idx);
        }
      }
      idx += 1;
    }

    if (answer.length !== 0) {
      return answer[answer.length - 1];
    } else {
      return "not existed";
    }
  }
};
let t = findGCD(3);

console.log(t);
