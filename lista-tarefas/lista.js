// Função para adicionar uma nova tarefa
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim(); // Remove espaços em branco antes e depois do texto

    if (taskText === "") {
        alert("Por favor, insira uma tarefa.");
        return;
    }

    // Criar um novo item de lista
    let listItem = document.createElement("li");
    listItem.classList = 'task-item';

    // Adicionar texto da tarefa
    listItem.textContent = taskText;

    // Adicionar botão de conclusão
    let completeButton = document.createElement("button");
    completeButton.classList = 'button-complete';
    completeButton.textContent = "Concluir";

    completeButton.onclick = function () {
        toggleTaskComplete(listItem);
    };
    listItem.appendChild(completeButton);

    // Adicionar botão de exclusão
    let deleteButton = document.createElement("button");
    deleteButton.classList = 'button-delete';
    deleteButton.textContent = "Excluir";
    deleteButton.onclick = function () {
        deleteTask(listItem);
    };
    listItem.appendChild(deleteButton);

    // Adicionar novo item de lista à lista de tarefas
    document.getElementById("taskList").appendChild(listItem);

    // Limpar campo de entrada após adicionar a tarefa
    input.value = "";
}

// Função para marcar uma tarefa como concluída ou não concluída
function toggleTaskComplete(task) {
    task.classList.toggle("completed");
}

// Função para excluir uma tarefa
function deleteTask(task) {
    task.remove();
}