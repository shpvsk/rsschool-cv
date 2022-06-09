'use strict'

const navLinks = document.querySelectorAll('.nav-list__link')

// function scroll
function scroll(e) {
	e.preventDefault()
	const id = e.target.getAttribute('href')
	const targetBlock = document.querySelector(id)

	window.scrollTo({
		top: targetBlock.offsetTop,
		behavior: 'smooth',
	})

	// Highlight active section
	targetBlock.classList.add('active-section')
	// Рide selection
	setTimeout(() => {
		targetBlock.classList.remove('active-section')
	}, 1500);

}


navLinks.forEach(link => {
	link.addEventListener('click', scroll)
})

