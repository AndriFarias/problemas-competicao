class Agenda {
    constructor() {
        this.eventos = [];
    }

    adicionarEvento(hora, data, titulo, local) {
        let evento = {
            title: titulo,
            start: data + 'T' + hora,
            description: local
        };
        this.eventos.push(evento);
    }

    listarEventos() {
        return this.eventos;
    }

    alertarEventoProximo(evento) {
        let dataDoEvento = new Date(evento.start);
        let agora = new Date();

        let tempoRestante = dataDoEvento.getTime() - agora.getTime();
        let tempoLembrete = tempoRestante - 15 * 60 * 1000;

        if (tempoRestante < 0) {
            let toastEl = document.getElementById('meuToast');
            let toast = new bootstrap.Toast(toastEl);
            toastEl.querySelector('.toast-body').textContent = "O evento " + evento.title + " já passou";
            toast.show();
        } else {
            setTimeout(()=> {
                let toastEl = document.getElementById('meuToast');
                let toast = new bootstrap.Toast(toastEl);
                toastEl.querySelector('.toast-body').textContent = "O evento " + evento.title + " começará em alguns minutos!";
                toast.show();
            }, tempoLembrete);
            
        }
    
    }
}

let minhaAgenda = new Agenda();

$(document).ready(()=> {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month',
        },
        defaultDate: new Date(),
        navLinks: true,
        editable: false,
        eventLimit: true,
        events: minhaAgenda.listarEventos()
    });
    $('#formEvento').submit((event)=>{
        event.preventDefault();
        let titulo = $('#titulo').val();
        let data = $('#data').val();
        let hora = $('#hora').val();
        let local = $('#local').val();
        minhaAgenda.adicionarEvento(hora, data, titulo, local);
        minhaAgenda.alertarEventoProximo(minhaAgenda.eventos[minhaAgenda.eventos.length - 1]); // Adicionado aqui
        $('#calendar').fullCalendar('removeEventSources');
        $('#calendar').fullCalendar('addEventSource', minhaAgenda.listarEventos());
        $('#calendar').fullCalendar('rerenderEvents');
        $('#adicionaModal').modal('hide');

        $('#titulo').val('');
        $('#data').val('');
        $('#hora').val('');
        $('#local').val('');
    })
});
