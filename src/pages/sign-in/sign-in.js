window.addEventListener('DOMContentLoaded', () => {
	const signInForm = document.querySelector('.sign-in-form');
	if (signInForm) {
		signInForm.addEventListener('submit', (e) => {
			e.preventDefault();
		});
	}
});
