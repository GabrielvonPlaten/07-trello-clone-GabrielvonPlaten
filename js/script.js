$(document).ready(function () {
    $('#add-card-dialog').dialog({ autoOpen: false });
    $('header').on('click', '#add-card', function () { 
        $('#add-card-dialog').dialog('open');
    });

    //Create new card
    $('#add-card-dialog').on('click', '#add-new-card', function () {
        //If the forms are filled, then execute
        if($('#card-title-form').val() && $('#card-description').val()) {

        /* Card propeties */
        let deleteButton = 
        '<button class="delete-card">Delete</button>';
        let readMoreButton = 
        '<button class="readmore">Read More</button>';

        let cardPropeties = 
            '<h3 class="card__title">' + 
            $('#card-title-form').val() + '</h3>' + 
            '<p class="card-description" title="Card Description">' + 
            $('#card-description').val() + '</p>'
            + deleteButton + readMoreButton

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
            //Card dialog
            $('.card-description').dialog({ autoOpen: false });
            $('.card').on('click', '.readmore', function () {
                $(this).find('.card-description').dialog('open');
            });

            /* Delete cards */
            $('.card').on('click', '.delete-card', function () {
                $(this).parent().toggle('explode');
            });
        } else {
            alert('You must fill out the forms.');
        }
    });
});
