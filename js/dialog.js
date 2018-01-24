$(document).ready(function () {
    $(".add-card-dialog").dialog({ autoOpen: false });
    $("#add-card").click(function () { 
        $(".add-card-dialog").dialog("open");
    });


    /* Card propeties */
    let cardTitle = $('#card-title-form').val();
    let cardDescription = $('#card-description').val();
    let deleteButton = '<button class="delete-card">Delete</button>';

    //Create new card
    $("#yes").on("click", function (e) {
        if($('#card-title-form').val() && $('#card-description').val()) {
            
        $("<div/>", {
            class: 'card',
            html: '<h3 class="card__title">' + $('#card-title-form').val() + '</h3>' + '<p>' + $('#card-description').val() + '</p>' + deleteButton
         }).appendTo(".todo");
        } else {
            alert('You must fill the forms.');
        }
        e.preventDefault();
    });

    //Click on card for description
    $("p").dialog({ autoOpen: false });
    $(".card").on("click", function () { 
        $('p', this).dialog("open");
    });
});