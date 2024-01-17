$('#result-zone').hide();

$('#navigation').on('click', 'a', (event)=>{
    event.preventDefault();
    // console.log(event.target);

    const selectedLink = $(event.target).attr('href');
    console.log(selectedLink);

    $('#result-zone').hide();

        switch(selectedLink){
            case 'page-form':
                $('#result-zone').hide();
                $('#encode-zone').show();
                break;
            case 'page-data':
                $('#result-zone').show();
                $('#encode-zone').hide();
                break;
        }

})



    $('#form-add-person').on('submit', (event) => {
    event.preventDefault();
    // 
    const firstname = $('#input-firstname').val();
    const lastname = $('#input-lastname').val();

    // format querystring
    const demo = $('#form-add-person').serializeArray();

    

    //
    const data = {
        firstname,
        lastname
    };

    const dataStr = JSON.stringify(demo)
    console.log(data);

    // Ajax JQuery
    $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/people',
        data,
        dataType: 'json',
        success : ()=>{
            console.log('Données envoyées');
        },
        error: () =>{
            console.log('Error');
        }
    })


    /*
    const test = $.post(
        'http://localhost:3000/people', 
        data, 
        ()=>{
            console.log('Données envoyées');
        },
        'json'
    );
    $(test).fail(()=>{
        console.log('Données non envoyées');
    });
    $(test).done(()=>{
        console.log('Données envoyées');
    });
    */
    
})

$.ajax({
    method: 'GET',
    url: 'http://localhost:3000/people',
    success: (peopleData) =>{

        $( "<ul></ul>", {
            "class": "my-liste"
          }).appendTo( "#result-zone" );

          $("#result-zone ul").before("<button>Actualiser</button>")
          $.each(peopleData, (index, value) =>{
              $("#result-zone ul").append(`<li>${value.firstname} ${value.lastname}</li>`)
          })
    }
})





