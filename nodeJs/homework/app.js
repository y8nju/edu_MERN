const movies = [
	{id: 'mv01', name: '', img: '/static/images/85999_320.jpg'},
	{id: 'mv01', name: '', img: '/static/images/85999_320.jpg'},
	{id: 'mv01', name: '', img: '/static/images/85999_320.jpg'},
	{id: 'mv01', name: '', img: '/static/images/85999_320.jpg'}
]

/* 
	list.ejs 랜더링 할 때 이 배열을 넘겨주고 난 후
	for(let i = 0; i < movies.length; i++) {
		<label><%= movies[i].name %></label>
		<a href ="seat?code=<%movies[i].id %>">
			<img src "<%= movies[i].img %>"> 
		</a>
	}
*/