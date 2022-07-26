
userInfoLink();

function preview(evt) {
	document.querySelector(".previewWrap").innerHTML ="";
	if (evt.target.files) {
		for (let i = 0; i < evt.target.files.length; i++) {
			let reader = new FileReader();
			reader.readAsDataURL(evt.target.files[i]);
			reader.onload = function(rst){
				const img = document.createElement("img");
				img.src = rst.target.result;
				document.querySelector(".previewWrap").appendChild(img);
			}
		}
	}
}
function userInfoLink() {
	let userInfoLink = document.querySelector('.headerRight');
	let html = `
		<div class="userInfoLink row" onclick="location.href='/user'">
			<div>
				<p class="userId">@<%= user.id %></p>
			</div>
			<img src="<%=user.image %>" alt="user profile image" class="userProfileImg" onerror="this.src='/images/user/userProfile.png'">
			</div>`
	userInfoLink.innerHTML = html;
}