const input = document.getElementById('noteInput')
const button = document.getElementById('addBtn')
const list = document.getElementById('notesList')

let notes = JSON.parse(localStorage.getItem('notes')) || []

function save() {
	localStorage.setItem('notes', JSON.stringify(notes))
}

function render() {
	list.innerHTML = ''

	notes.forEach(note => {
		const li = document.createElement('li')

		const span = document.createElement('span')
		span.textContent = note.text

		const actions = document.createElement('div')
		actions.className = 'actions'

		const editBtn = document.createElement('button')
		editBtn.textContent = 'редагувати'
		editBtn.onclick = () => {
			const newText = prompt('Нова нотатка:', note.text)
			if (newText && newText.trim() !== '') {
				note.text = newText.trim()
				save()
				render()
			}
		}

		const delBtn = document.createElement('button')
		delBtn.textContent = 'видалити'
		delBtn.onclick = () => {
			notes = notes.filter(n => n.id !== note.id)
			save()
			render()
		}

		actions.append(editBtn, delBtn)
		li.append(span, actions)
		list.appendChild(li)
	})
}

button.addEventListener('click', () => {
	const text = input.value.trim()
	if (!text) return

	notes.push({
		id: Date.now(),
		text: text,
	})

	input.value = ''
	save()
	render()
})

render()
