
$("#btn-add").on("click", () => {
    const task = $("#todo").val().trim();
    if (task) {
        $('#result').append('<p>' + task + '</p>');
    }
})

$("#btn-reset").on("click", () =>{
    $('#result').empty();
})