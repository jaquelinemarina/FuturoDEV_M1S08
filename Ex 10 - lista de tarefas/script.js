
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (!taskText) {
        alert("Você deve escrever algo!");
        return;
        // return input.classList.add("error")
    }

    // let removeError = document.getElementById('taskInput')
    // removeError.addEventListener('keydown', function () {
    //     return input.classList.remove("error");
    // })

    // Criar um novo item de lista
    let listItem = document.createElement("li");
    listItem.classList = 'task-item';

    // Adicionar texto da tarefa
    listItem.textContent = taskText;

    // Adicionar botão de conclusão
    let completeButton = document.createElement("button");
    completeButton.classList = 'button-complete';
    completeButton.textContent = "✔";

    completeButton.onclick = function () {
        toggleTaskComplete(listItem);
    };
    listItem.appendChild(completeButton);

    // Adicionar botão de exclusão
    let deleteButton = document.createElement("button");
    deleteButton.classList = 'button-delete';
    deleteButton.textContent = "X";
    deleteButton.onclick = function () {
        deleteTask(listItem);
    };
    listItem.appendChild(deleteButton);

    // Adicionar novo item de lista à lista de tarefas
    document.getElementById("taskList").appendChild(listItem);

    // Limpar campo de entrada após adicionar a tarefa
    input.value = "";
}

// // Função para marcar uma tarefa como concluída ou não concluída
function toggleTaskComplete(li) {
    li.classList.toggle("completed");
}

// Função para excluir uma tarefa
function deleteTask(task) {
    task.remove();
}
