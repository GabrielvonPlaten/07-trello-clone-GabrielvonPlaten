$(document).ready(function () {
    $('.add-card-dialog').dialog({ autoOpen: false });
    $('header').on('click', '#add-card', function () { 
        $('.add-card-dialog').dialog('open');
    });

    //Makes the cards draggable
    //I still am not sure why I need 'clone' <-- ask Axel
    $('.card').draggable({helper: 'clone'});

    $('.__column').droppable({
        accept: '.card',
        drop: function(event, ui) {

            let movedItem = $(ui.draggable).draggable();
            $(this).append(movedItem);
        }
    });

    /* Card propeties */
    let cardTitle = $('#card-title-form').val();
    let cardDescription = $('#card-description').val();
    let deleteButton = '<button class="delete-card">Delete</button>';

    //Create new card
    $('.add-card-dialog').on('click', '#add-new-card', function () {
        //If the forms are filled, then execute
        if($('#card-title-form').val() && $('#card-description').val()) {

        $('<div/>', {
            class: 'card',
            html: '<h3 class="card__title">' + $('#card-title-form').val()
            + '</h3>' + '<p class="card-description">' + 
            $('#card-description').val() + '</p>' + deleteButton
            }).fadeIn(200).appendTo('.todo');
        } else {
            alert('You must fill out the forms.');
        }
    });

    //Click on card for description
    //Bugged
    $('.card-description').dialog({ autoOpen: false });
    $('.body').on('click', '.card', function () { 
        $('.card-description', this).dialog('open');
    });

    /* Delete cards */
    $('.card').on('click', '.delete-card', function () {
        $(this).parent().toggle('explode');
    });

});
