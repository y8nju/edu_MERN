// getTime을 응용해서
const times = [];
times.push(new Date());
times.push(new Date('1981-04-07'));
times.push(new Date('1996-10-09'));
times.push(new Date('1993-11-24'));

// times.sort(function(a, b) {
//     if(a.getTime() < b.getTime()) {
//         return -1;
//     }else if(a.getTime() === b.getTime()) {
//         return 0;
//     } else {
//         return 1;
//     }
// });

// times.sort((a,b) => a.getTime()-b.getTime());

times.sort((a, b) =>  a - b);
console.log(times);