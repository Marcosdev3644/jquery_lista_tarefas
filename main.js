$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        const adicionarTarefa = $('#adicionar-tarefa').val();
        const novaTarefa = $('<li></li>');
        $(`<li = "${adicionarTarefa}" />`).appendTo(novaTarefa);
        

        $(novaTarefa).appendTo('ul');
        $(novaTarefa).fadeIn();
        $('#adicionar-tarefa').val(' ');
    })
})