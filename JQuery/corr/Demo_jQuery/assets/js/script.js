$(() => {

    //! Intro
    $('nav a').css('background-color', 'lightgreen');
    $(':header').css('color', 'hotpink');

    $('.btn:contains(\'OK\')').css('font-weight', 'bold');
    // $('.btn:contains("OK")').css('font-weight', 'bold');


    //! Modifier les elements
    $('h2:contains(\'Texte\') + article p')
        .on('mouseenter', function (event) {
            console.log(this, event.target);
            $(event.target).addClass('fred');
        })
        .on('mouseleave', function (event) {
            console.log(this, event.target);
            $(event.target).removeClass('fred');
        });

    $('nav a').attr('title', function () {
        return $(this).attr('href')
    });

    // $('#others p')
    //     .before('<button id=\'Yanis\'>Say hello</button>')
    //     .after(`
    //     <p>Liste de personnes : </p>
    //     <ul>
    //         <li>Zaza </li>
    //         <li>Balthy</li>
    //         <li>Della</li>
    //     </ul>
    //     `)
    //     .after('<hr>');

    $('#others')
        .prepend('<button id=\'Yanis\'>Say hello</button>')
        .append('<hr>')
        .append(`
            <p>Liste de personnes : </p>
            <ul>
                <li>Zaza </li>
                <li>Balthy</li>
                <li>Della</li>
            </ul>
            `);

    $('.btn-success:eq(1)').appendTo('#others')
    $('#Yanis').on('click', () => { alert('Salut !'); })


    //! Manipulation du CSS
    const colorDemo = $('a:contains(\'Demo\')').css('color');
    const colorReact = $('a:contains(\'React\')').css('color');

    console.log('Couleur du lien \'Demo\'', colorDemo);
    console.log('Couleur du lien \'React\'', colorReact);
    console.log('Couleur du Header', $('header').css('color'));

    //! Event
    $('button').on('click', () => {
        console.log('Click ! :o')
    });

    $(':header').on({
        mouseenter: () => {
            console.log('mouseenter');
        },
        mouseleave: () => {
            console.log('mouseleave');
        },
        dblclick: () => {
            console.log('dblclick');
        },
        click: () => {
            console.log('click');
        }
    })

    $('header').one('click', () => {
        alert('Ceci est le header !');
    });

    // $('#Yanis').trigger('click');




    $('#btn-timer').on('click', () => {
        const now = (new Date()).toLocaleTimeString('fr-be');
        $('#timer-zone').text(now);
    })

    $('#btn-add-elem').on('click', () => {
        $('#container-zone').append('<p>Example</p>');
    })

    $('#btn-copy-elem').on('click', () => {
        $('#container-zone').append($('#timer-zone').clone());

        // // En JS ↓
        // document
        //     .getElementById('container-zone')
        //     .append(document.getElementById('timer-zone').cloneNode(true));
    })

    $('#btn-remove-all').on('click', () => {
        $('#container-zone').empty()
    })

















    //! Event « Annimation »
    //? NB : Ne pas confondre avec l'event "toggle-event" -> CF les slides
    // $('h1').toggle(10_000);
})