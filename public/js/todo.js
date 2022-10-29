//We need to add an event listener on the window
window.addEventListener('load', () => {
    //create object for the values
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const nameInput = document.querySelector('#name');
    const newTodoForm = document.querySelector('#new-todo-form');
    const todoList = document.querySelector('#todo-list');



    //create local storage for username input *accept input or string*
    const username = localStorage.getItem('username') || '';
    //name input should output under the username
    nameInput.value = username;

    if (username === ''){
        alert('Please enter your name')
    }
    
    //Name input should log the value of username on every change of event
    nameInput.addEventListener('change', e => {
     localStorage.setItem('username', e.target.value) ;
     
    })

    // form will not submit until completion
    newTodoForm.addEventListener('submit', e => {
        

        //create a container to log the value of the input data and input buttons also log date added
        const todo = {
            content: e.target.elements.content.value,
            category: e.target.elements.category.value,
            done: false,
            createdAt: new Date().getTime()
        }
    
        //push todo input values to todos array. you must setItem & stringify todos 
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));

        e.target.reset();

        DisplayTodos();
    })
    DisplayTodos();
})


//write a function to display your set task

function DisplayTodos () {
    //selecting to do list div
    const todoList = document.querySelector('#todo-list');

    //to do listen should equal an empty string
    todoList.innerHTML = '';

    //looping through each set task creating a new section thorugh classlist to visibly log task
    todos.forEach(todo => {
        //new div created
        const todoItem = document.createElement('div');
        // set task class for styling
        todoItem.classList.add('todo-item');
        //to do list label
        const label = document.createElement('label');

        const input = document.createElement('input');
        const span = document.createElement('span');
        //div for task content
        const content = document.createElement('div');
        //div to hold actions edit & delete button
        const actions = document.createElement('div');
        // actions buttons
        const edit = document.createElement('button');
        const deleteButton = document.createElement('button');

        //creating a check box for clearance of task
        input.type = ' checkbox';
        // checked should equal false or true based on done property of todo
        input.checked = todo.done;
        // input bubble class for styling
        span.classList.add('bubble');

        
        if (todo.category == 'personal'){
            span.classList.add('personal');
        } else {
            span.classList.add('business');
        }

        //adding classList for styling
        content.classList.add('todo-content');
        actions.classList.add('actions');
        edit.classList.add('edit');
        deleteButton.classList.add('delete');

        //innerHTML of the set task should be the value of content property of todo
        content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;

        //inner html of actions buttons
        edit.innerHTML = 'Edit ';
        deleteButton.innerHTML = 'Delete';


        label.appendChild(input);
        label.appendChild(span);
        actions.appendChild(edit);
        actions.appendChild(deleteButton);
        todoItem.appendChild(label);
        todoItem.appendChild(content);
        todoItem.appendChild(actions);

        todoList.appendChild(todoItem);


        if (todo.done) {
            todoItem.classList.add('done');
        }

        input.addEventListener('change', (e) => {
            todo.done = e.target.checked;
            localStorage.setItem('todos', JSON.stringify(todos));

            if (todo.done) {
                todoItem.classList.add('done');
            } else {
                todoItem.classList.remove('done');
            }
            //redisplay todos because any change we want to rsave to our local storage
            DisplayTodos()
        })



        //todo: explain this code here also above
        //takes edit action button 
        edit.addEventListener('click', (e) => {
			const input = content.querySelector('input');
			input.removeAttribute('readonly');
			input.focus();
			input.addEventListener('blur', (e) => {
				input.setAttribute('readonly', true);
				todo.content = e.target.value;
				localStorage.setItem('todos', JSON.stringify(todos));
				DisplayTodos()

			})
		})

		deleteButton.addEventListener('click', (e) => {
			todos = todos.filter(t => t != todo);
			localStorage.setItem('todos', JSON.stringify(todos));
			DisplayTodos()
		})

                                                                                    
    });
}
