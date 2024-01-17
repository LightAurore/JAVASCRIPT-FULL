$('#result-zone').hide();
loadPeopleData();

$('#navigation').on('click', 'a', (event) => {
    // Annulation du comportement du lien
    event.preventDefault();

    // Récuperation du "href" du lien
    const selectedLink = $(event.target).attr('href');

    // Affichager et cacher la zone en fonction du lien
    $('#result-zone').hide();
    $('#encode-zone').hide();

    switch(selectedLink) {
        case 'page-form':
            $('#encode-zone').show();
            break;
            case 'page-data':
            $('#result-zone').show();
            break;
    }
});


$('#form-add-person').on('submit', (event) => {
    // Annulation du comportement du submit
    event.preventDefault();

    // Récuperation des données via jQuery
    const firstname = $('#input-firstname').val();
    const lastname = $('#input-lastname').val();

    //? Alternative pour la récuperation de données (format: QueryString)
    // const demo = $('#form-add-person').serialize()
    // console.log(demo);

    // Envoyer une objet Data vers l'API
    const data = { 
        firstname, 
        lastname
    };

    // Utilisation de jQuery Ajax
    $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/people',
        data,
        dataType: 'json',
        success: () => {
            console.log('Données envoyées');
            showMessageInfoOnForm('Données envoyées');
            $('#people-list').append(`<p>${data.firstname} ${data.lastname}</p>`);
        },
        error: () => {
            console.log('Données non envoyées');
            showMessageInfoOnForm('Erreur lors de l\'envoi des données');
        }
    })

    /*
    // - Alternative
    const request = $.post('http://localhost:3000/people', data, 'json');
    request.done(() => {
        console.log('Données envoyées');
    });
    request.fail(() => {
        console.log('Données non envoyées');
    });
    */
});

function showMessageInfoOnForm(message) {
    $('#msg-info').text(message);
    $('#msg-info').fadeIn().delay(1000).fadeOut();
}

function loadPeopleData() {

    $('#people-list')
        .empty()
        .append('<div class="lds-ring"><div></div><div></div><div></div><div></div></div>');


    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/people',
        success: (peopleData) => {
            $('#people-list').empty();
            $.each(peopleData, (index, value) => {
                $('#people-list').append(`<p>${value.firstname} ${value.lastname}</p>`);
            })
        },
        error: () => {
            $('#people-list')
                .empty()
                .append('<p>Erreur lors du chargement des données</p>');

        }
    })
}

$('#people-reload').on('click', loadPeopleData);