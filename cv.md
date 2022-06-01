# Maxim Shipovskiy

### Contact information
__Phone:__ [+79272510235](tel:+79272510235) \
__Telegram:__ [@proaxi](tg://resolve?domain=proaxi/) \
__Website:__ [shpvsk.ru](https://shpvsk.ru/)

---
### About myself
I'm in my 30s and want to be a full stack programmer \
I'm currently a freelancer

---
### Skills
* HTML
* CSS, SASS
* JS
* PHP
* GIT
* GULP
* WEBPACK
* WordPress
* Figma & Photoshop

---
### Code examples
```
const video = document.querySelectorAll('video')

observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		entry.intersectionRatio > 0 ? entry.target.play() : entry.target.pause()
	})
})

video.forEach(i => {
	observer.observe(i)
})
```
