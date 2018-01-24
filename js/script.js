$(document).ready(function () {

    //Makes the cards draggable
    //I still am not sure why I need 'clone' <-- ask Axel
    $('.card').draggable({helper: 'clone'});

    $('.__column').droppable({
        //The columns will accept all elements with the 'card' class
        accept: '.card',
        drop: function(event, ui) {

            var movedItem = $(ui.draggable).draggable();
            $(this).append(movedItem);
        }
    });

    //Click Cards
    $(".card").click(function (e) { 
        e.preventDefault();
        
    });

    /* Delete cards */
    $(".delete-card").click(function (e) { 
        e.preventDefault();
        $(this).parent().remove();
    });
});
