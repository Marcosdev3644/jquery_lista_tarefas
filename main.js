$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        const adicionarTarefa = $('#adicionar-tarefa').val();
        const novaTarefa = $('<li></li>').text(adicionarTarefa);

        $('ul').append(novaTarefa);
        $(novaTarefa).fadeIn();
        $('#adicionar-tarefa').val(' ');
    })
})