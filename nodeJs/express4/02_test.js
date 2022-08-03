const ws = new Map();
ws.set('one', 1);
ws.set('two', 2);
console.log(ws);

ws.forEach((a, b) => {
    console.log(a +'/' +b)
})
ws.forEach((a) => {
    console.log(a)
})
