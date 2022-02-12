"use strict";

const users = [
	{
		firstName: "Test",
		lastName: "Testovich",
		age: 28,
		photoSrc:
			"https://u.today/sites/default/files/styles/1200x900/public/2021-02/6342_1.jpg",
	},
	{
		firstName: "Test2",
		lastName: "Testovich",
		age: 28,
		photoSrc:
			"https://u.today/sites/default/files/styles/1200x900/public/2021-02/6342_1.jpg",
	},
	{
		firstName: "Test3",
		lastName: "Testovich",
		age: 28,
		photoSrc:
			"https://u.today/sites/default/files/styles/1200x900/public/2021-02/6342_1.jpg",
	},
];

const usersListEl = document.querySelector(".users-list");

const userListItems = users.map((u) => createuserlistItem(u));

usersListEl.append(...userListItems);

function createuserlistItem({ firstName, lastName, age, photoSrc }) {
	const userlistItem = document.createElement("li");
	userlistItem.classList.add("user-list-item");
	userlistItem.append(
		createUserImg(photoSrc, `${firstName} ${lastName}`),
		createUserMainInfo(`${firstName} ${lastname} ${age}`),
		createUserRemoveBtn()
	);
	return userlistItem;
}

function createUserImg(src, alt) {
	const userImgEl = document.createElement("img");
	userImgEl.src = src;
	userImgEl.alt = alt;
	return userImgEl;
}
function createUserMainInfo(textContent) {
	const userMainInfo = document.createElement("p");
	userMainInfo.textContent = textContent;
	return userMainInfo;
}
function createUserRemoveBtn() {
	const userRemoveBtn = document.createElement("button");
	userRemoveBtn.classList.add("remove-user-btn");
	userRemoveBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
	userRemoveBtn.addEventListener("click", (e) => {
		e.currentTarget.closest(".user-list-item").remove();
	});
	return userRemoveBtn;
}
// const userImgEl = document.createElement("img");
// userImgEl.src = user.photoSrc;
// userImgEl.alt = `${user.firstName} ${user.lastName}`;
// const userMainInfo = document.createElement("p");
// userMainInfo.textContent = `${user.firstName} ${user.lastName} ${user.age}`;
// const userRemoveBtn = document.createElement("button");
// userRemoveBtn.classList.add("remove-user-btn");
// userRemoveBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
// userRemoveBtn.addEventListener("click", (e) => {
// 	e.currentTarget.closest(".user-list-item").remove();
// });
// userlistItem.append(userImgEl, userMainInfo, userRemoveBtn);
// usersListEl.append(userlistItem);
// const userlistItem = document.createElement("li");
// userlistItem.classList.add("user-list-item");
// userlistItem.append(
// 	createUserImg(user.photoSrc, `${user.firstName} ${user.lastName}`),
// 	createUserMainInfo(`${user.firstName} ${user.lastname} ${user.age}`),
// 	createUserRemoveBtn()
// );
