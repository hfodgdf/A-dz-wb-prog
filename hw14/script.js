let tasks = JSON.parse(localStorage.getItem('tasks')) || []

function saveTasks() {
	localStorage.setItem('tasks', JSON.stringify(tasks))
}

function renderTasks() {
	const list = document.getElementById('taskList')
	list.innerHTML = ''

	tasks.forEach((task, index) => {
		const li = document.createElement('li')

		const span = document.createElement('span')
		span.textContent = task

		const delBtn = document.createElement('button')
		delBtn.textContent = 'X'
		delBtn.onclick = () => {
			tasks.splice(index, 1)
			saveTasks()
			renderTasks()
		}

		const editBtn = document.createElement('button')
		editBtn.textContent = 'Edit'
		editBtn.onclick = () => {
			const newTask = prompt('Нове завдання:', task)
			if (newTask && newTask.trim() !== '') {
				tasks[index] = newTask
				saveTasks()
				renderTasks()
			}
		}

		li.appendChild(span)
		li.appendChild(editBtn)
		li.appendChild(delBtn)
		list.appendChild(li)
	})
}

function addTask() {
	const input = document.getElementById('taskInput')
	if (input.value.trim() === '') return

	tasks.push(input.value)
	input.value = ''
	saveTasks()
	renderTasks()
}

renderTasks()
