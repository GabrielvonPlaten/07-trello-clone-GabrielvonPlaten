$(document).ready(function () {
    //Create card dialog
     $('header').on('click', '#add-card', function () {
        $('#add-card-dialog').dialog('open');
    });


    $('#add-card-dialog').dialog({
        autoOpen: false,
        draggable: false,
        resizable: false,
        modal: true,
        height: 500,
        width: 300,
        show: {
            effect: "fadeIn",
            duration: 300
        },
        hide: {
            effect: "fadeOut",
            duration: 300
        },
        open: function(event, ui) {
            $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
        },
        create: function(e, ui) {
            $('#closeBtn').click(function() {
                $('#add-card-dialog').dialog('close');
            });
        } 
    });

    $( "#tabs" ).tabs();
    //Dialog datepicker
    $('#datetime').datepicker({dateFormat: 'dd-mm-yy'});

    //Create new card
    $('#add-card-dialog').on('click', '#add-new-card', function () {

        //Card propeties
        let cardTitle = $('#card-title-form').val();
        let cardDescription = $('#card-description').val();
        let deleteCard = '<button class="delete-card">Delete</button>';
        let datetime = $('#datetime').val();

        //Jquery Tabs Ids increment
        //I'm sure there's a better way of handling this.
        //jQuery UI Tabs uses ids to be able to create the tabs
        let tabIdIncrement = 1;
        let tabIdIncrementTwo = 2;

        let cardPropeties = `
        <h3 class="card__title">${cardTitle}</h3>
            <div class="tabs">
                <ul>
                    <li><a href="#tabs-${tabIdIncrement}">Card Description</a></li>
                    <li><a href="#tabs-${tabIdIncrementTwo}">Deadline</a></li>
                </ul>
            <div id="tabs-${tabIdIncrement}">
                <p class="card__description" title="Card Description"> ${cardDescription}</p>
            </div>
            <div id="tabs-${tabIdIncrementTwo}">
                </b>Deadline: ${datetime}
            </div>
        </div> 
        ${deleteCard}`

        //If the forms are filled, then execute
        if($('#card-title-form').val() && $('#card-description').val()) {

        $('<li/>', {
            class: 'card',
            html: cardPropeties
            }).fadeIn(200).appendTo('.todo')

            //Makes the card draggable
            $('.card').draggable({helper: 'clone'});


            //Makes the columns droppable
            $('.__column').droppable({
                accept: '.card',
                drop: function(event, ui) {
        
                    let movedItem = $(ui.draggable).draggable();
                    $(this).append(movedItem);
                }
            });

            $( ".tabs" ).tabs();
            /* Delete cards */
            $('.card').on('click', '.delete-card', function () {
                $(this).parent().slideUp(200);
            });

            //Increment the number
            tabIdIncrement++;
            tabIdIncrementTwo++;
        } else {
            alert('You must fill out the forms.');
        }
        
    });
});
