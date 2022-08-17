const data = ['월', '화', '수', '목', '금', '토', '일']
data.reduce((prev, curr, n) => {
    console.log(prev + '!' + curr + n)
    return curr;
}, '요일')