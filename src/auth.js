export function getAuthForm() {
	     return `
	     \t<form class="mui-form" id="auth-form">
\t\t\t\t<div class="mui-textfield mui-textfield--float-label">
\t\t\t\t\t<input type="email" id="email" required>
\t\t\t\t\t<label for="email">Email </label>
\t\t\t\t</div>
\t\t\t\t<div class="mui-textfield mui-textfield--float-label">
\t\t\t\t\t<input type="password" id="password" required>
\t\t\t\t\t<label for="password">Пароль</label>
\t\t\t\t</div>
\t\t\t\t<button
\t\t\t\t\t\ttype="submit"     
\t\t\t\t\t\tclass="mui-btn mui-btn--raised mui-btn--primary">
\t\t\t\t\tВойти
\t\t\t\t</button>
\t\t\t</form>
	     `
}

export function authWithEmailAndPassword(email, password) {
	const apiKey = 'AIzaSyDB4sE39L86lmEBJgt-RpdJopyl8R6C8ek'
	 return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,{
	 	method: 'POST',
		 body: JSON.stringify({
			 email,
			 password,
			 returnSecureToken: true
		 }),
		 headers: {
	 		'Content-Type': 'application/json'
		 }
	 })
		 .then(response=>response.json())
	   .then(data => data.idToken  )
}
