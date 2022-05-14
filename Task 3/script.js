/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const outputEl = document.getElementById('output');

async function Fetch() {
	try {
		const response = await fetch(ENDPOINT);
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
	}
};

const displayUser = (users) => {
	users.forEach((user) => {
		const divEl = document.createElement('div');
        divEl.setAttribute("class", "card");

		const loginEl = document.createElement('h4');
		const avatarEl = document.createElement('img');  

		loginEl.textContent = user.login;
		avatarEl.src = user.avatar_url;

        divEl.append(avatarEl, loginEl);
		outputEl.append(divEl);
	});
};

document.getElementById('btn').addEventListener('click', async () => {
	outputEl.textContent = '';
	const user = await Fetch();
	displayUser(user);
});