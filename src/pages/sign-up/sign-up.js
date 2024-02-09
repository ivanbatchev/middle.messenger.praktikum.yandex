window.addEventListener('DOMContentLoaded', () => {
	const signUpForm = document.querySelector('.sign-up-form');
	if (signUpForm) {
		signUpForm.addEventListener('submit', (e) => {
			e.preventDefault();
		});
	}
});
