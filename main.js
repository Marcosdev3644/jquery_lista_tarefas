$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        
        const adicionarTarefa = $('#adicionar-tarefa').val();
        const novaTarefa = $('<li></li>').text(adicionarTarefa);

        $('tarefas-container').click(function() {
            $('ul').addClass("#ul-tarefas");
        })

        $('ul').append(novaTarefa);
        $(novaTarefa).fadeIn();
        $('#adicionar-tarefa').val(' ');
    })
})