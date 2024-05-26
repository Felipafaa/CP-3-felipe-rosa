function darloadTarefas() {
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    let tarefaLista = document.getElementById('Lista')
    tarefaLista.innerHTML = ''

    tarefas.forEach((tarefa, index) => {
        let li = document.createElement('li')
        li.className = 'tarefa'
        li.innerHTML = `${tarefa} <img src="/img/lixopng.png" class="delete-icon" onclick="deleteTarefa(${index})">`
        tarefaLista.appendChild(li)
    })


}






function addTarefa() {
    let tarefaInput = document.getElementById('nova-tarefa')
    let tarefaValor = tarefaInput.value
    if (tarefaValor.trim() !== "") {
        let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
        tarefas.push(tarefaValor)
        localStorage.setItem('tarefas', JSON.stringify(tarefas))
        tarefaInput.value = ''
        darloadTarefas()
    }


}




function deleteTarefa(index) {
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    tarefas.splice(index, 1)
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
    darloadTarefas()
}




window.onload = darloadTarefas;