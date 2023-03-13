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


// burger menu
if (document.body.clientWidth < 992) {

	const $burgerMenu = selector =>  {
		const menu = document.querySelector(selector)
		const btn = menu.querySelector('.burger-menu__btn');
		const links = menu.querySelectorAll('.nav-list > li a');
		const overlay = menu.querySelector('.burger-menu__overlay');

		btn.addEventListener('click', e => {
			$toggleMenu()
			e.preventDefault()
		})

		links.forEach(i => {
			i.addEventListener('click', e => {
				e.preventDefault()
				$toggleMenu()
			})
		})

		overlay.addEventListener('click', () => {
			$toggleMenu()
		})

		const $toggleMenu = () => {
			if (!menu.classList.contains('burger-menu_active')) {
				menu.classList.add('burger-menu_active')
				btn.classList.add('burger-menu__btn_active')
				document.body.classList.add('body_fixed')
			} else {
				menu.classList.remove('burger-menu_active')
				btn.classList.remove('burger-menu__btn_active')
				document.body.classList.remove('body_fixed')
			}
		}
	}
	$burgerMenu('.burger-menu')
}
