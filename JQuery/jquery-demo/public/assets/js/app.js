
// intro

$(document).ready(function(){
    $("nav a").css('background-color','lightgreen');

    $(':header').css('color', 'hotpink');

    $(".btn:contains('OK')").css('font-weight', 'bold');


    $('h2:contains("Texte") + article:has(p) p').on('mouseenter', function(event){
        // console.log(this,event,event.target);
        $(event.target).addClass('belle')
    }).on('mouseleave', function(event){
        // console.log(this,event,event.target);
        $(event.target).removeClass('belle')
    }).css('border', '1px solid black')

    $('nav a').attr('title', function(){ return $(this).attr('href') });

    
    $('#others p').before('<button id="sublime">L\'harmonie cosmique est sublime</button>')
    .after('<hr/>')                
    .after(`
                    <p>Liste de personne : </p>
                    <ul>
                        <li>zaza</li>
                        <li>Bella</li>
                        <li>Dello</li>
                    </ul>
                    `);
    
    $('.btn-success:eq(1)').appendTo('#others')
    
    $('#sublime').on('click', () => {alert('Création du monde')})

    $('#others')
    .prepend('<button id="sublime">L\'harmonie cosmique est sublime</button>')
    .append(
        `
        <p>Liste de personne : </p>
        <ul>
            <li>zaza</li>
            <li>Bella</li>
            <li>Dello</li>
        </ul>
        `
    )

    // Manipulation du CSS
        $("li > a:contains('Demo')").css('color', 'red');
        const colorDemo = $("li > a:contains('Demo')").css('color');

        console.log(colorDemo);

        // Event
        $('button').on('click', ()=>{
            console.log('Click ! :o');
        })

        $(':header').on({
            mouseenter : ()=>{
                console.log('mouseenter');
            },
            mouseleave : ()=>{
                console.log('mouseleave');
            },
            dbclick : ()=>{
                console.log('double click');
            },
        }
        )

        $('header').one('click', () => {
            alert('ceci est le header')
        })
        $('header h3').css('color', 'orange')

        $('#sublime').trigger('trick')

        // Evenement jQuery
        // $('h1').toggle(1000)

        // 
        $('#btn-timer').on('click', ()=>{
            const now = (new Date()).toLocaleTimeString('fr-be');
            $('#timer-zone').text(now)
        })

        $('#btn-add-elem').on('click', () =>{
            $('#container-zone').append('<p>Exemple</p>')
        })

        $('#btn-copy-elem').on('click', () =>{
            $('#container-zone').append($('#timer-zone').clone())
        })

        $('#btn-remove-all').on('click', () =>{
            $('#container-zone').empty()
        })
})