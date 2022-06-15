let obj = new Object();
console.log(obj.prototype);	// undefined

console.log('===========================')

function Time(hour, minute) {
	this.hour = hour;
	this.minute = minute;
	this.init = function() {
		this.hour = 0;
		this.minute = 0;
	}
}

// console.log(Time.prototype);	// {}
Time.prototype.type = 'HH:hh';
//prototype은 계속 추가해서 사용할 때 
Time.prototype.elapse = function(min) {
	this.minute += min;
	while(this.minute >= 60) {
		this.minute -= 60;
		this.hour++;
	}
}

// static function
// 만들어진 객체를 통해서 사용하는 것은 불가
Time.isNight = function(hour) {
	if(hour>= 22 && hour <= 4){
		return true;
	} else {
		return false;
	}
};

console.log(Time.isNight(3));	// false
// console.log(t1.isNight(3));	//TypeError: t1.isNight is not a function


// console.log(Time.prototype);	// { type: 'HH:hh' }

console.log('===========================')

let t1 = new Time(3, 17);

let t2 = new Time(14, 1);

console.log('===========================')

console.log(t1.elapse === t2.elapse);	// true
// prototype으로 만들어진 경우 true
console.log(t1.init === t2.init);	// false
// 내부에서 만들어진 경우 false
// 원형 객체로 만드는 경우, 메모리를 덜 차지하게 된다

console.log('===========================')

console.log(t1);	// Time { hour: 3, minute: 17 }
console.log(t1.type)	// HH:hh
console.log(t2);	// Time { hour: 14, minute: 1 }

console.log(t1.type + '/' + t1.hour)	//HH:hh/3
console.log(t2.type + '/' + t2.hour)	//HH:hh/14

console.log('===========================')

t1.elapse(110);
console.log(t1);	// Time { hour: 3, minute: 47 }


/* 
t1.hour += 2;
t1.type = 'KK:mm'

console.log(t1.type + '/' + t1.hour)	//KK:mm/5
console.log(t2.type + '/' + t2.hour)	//HH:hh/14
 */