document.addEventListener('DOMContentLoaded', () => {
	const advs = document.querySelectorAll('.promo__adv img'),
		genre = document.querySelector('.promo__genre'),
		wrapper = document.querySelector('.promo__bg'),
		seriesList = document.querySelector('.promo__interactive-list'),
		addForm = document.querySelector('form.add'),
		input = addForm.querySelector('.adding__input'),
		checkbox = addForm.querySelector('[type="checkbox"]')

	const seriesDB = {
		series: [
			'OMAR',
			'THE FINAL LEGACY',
			'ERTUGRUL',
			'MAGNIFICENT CENTURY',
			'GREAT SELJUKS: GUARDIANS...',
		],
	}

	addForm.addEventListener('submit', e => {
		e.preventDefault()
		let newValue = input.value
		const favourite = checkbox.checked

		if (newValue) {
			if (newValue.length > 18) {
				newValue = `${newValue.slice(0, 18)}...`
			}

			if (favourite) {
				console.log('Sevimli serial qo`shildi')
			}

			seriesDB.series.push(newValue)
			sort(seriesDB.series)
			setList()
			e.target.reset()
		}
	})

	advs.forEach(item => {
		item.remove()
	})
	genre.textContent = 'COMEDY'

	wrapper.style.backgroundImage = 'url(./img/1.jpg)'

	function sort(arr) {
		arr.sort()
	}

	function setList() {
		seriesList.innerHTML = ''
		sort(seriesDB.series)

		seriesDB.series.forEach((item, index) => {
			seriesList.innerHTML += `
		<li class="promo__interactive-item">
		${index + 1} ${item}
		<div class="delete"></div>
		</li>
		`
		})

		document.querySelectorAll('.delete').forEach((trash, btn) => {
			trash.addEventListener('click', () => {
				trash.parentElement.remove()
				seriesDB.series.splice(0, 1)
				setList()
			})
		})
	}

	sort(seriesDB.series)
	setList()
})
