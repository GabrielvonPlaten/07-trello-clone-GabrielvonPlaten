$(document).ready(function () {
    $('#add-card-dialog').dialog({ autoOpen: false });
    $('header').on('click', '#add-card', function () { 
        $('#add-card-dialog').dialog('open');
    });

    //Create new card
    $('#add-card-dialog').on('click', '#add-new-card', function () {

        let cardTitle = $('#card-title-form').val();
        let cardDescription = $('#card-description').val();
        let deleteCard = '<button class="delete-card">Delete</button>';
        let datePicker = '<input class="date-picker">';

        //If the forms are filled, then execute
        if($('#card-title-form').val() && $('#card-description').val()) {
        
        /* Card propeties */
        let cardPropeties = 
            '<h3 class="card__title">' + cardTitle + '</h3>' + 
            '<p class="card__description" title="Card Description">' + cardDescription + '</p>' + 
            deleteCard +
            datePicker;

        $('<div/>', {
            class: 'card',
            html: cardPropeties
            }).fadeIn(200).appendTo('.todo')

            $('.card').draggable({helper: 'clone'});

            $('.__column').droppable({
                accept: '.card',
                drop: function(event, ui) {
        
                    let movedItem = $(ui.draggable).draggable();
                    $(this).append(movedItem);
                }
            });
            $('.date-picker').datepicker({});

            /* Delete cards */
            $('.card').on('click', '.delete-card', function () {
                $(this).parent().slideUp(200);
            });
        } else {
            alert('You must fill out the forms.');
        }
    });
});
