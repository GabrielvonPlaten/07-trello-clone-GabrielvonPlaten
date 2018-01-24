$(document).ready(function () {
    $(".add-card-dialog").dialog({ autoOpen: false });

    $("#add-card").click(function () { 
        $(".add-card-dialog").dialog("open");
    });


    /* Card propeties */

    let cardTitle = $('#card-title-form').val();
    let cardButton = '<button class="delete-card">Delete</button>';


    $("#yes").click(function (e) { 
        e.preventDefault();

        $("<div/>", {
            class: 'card ui-draggable ui-draggable-handle',
            html: '<h3>' + $('#card-title-form').val() + '</h3>' + cardButton
         }).appendTo(".todo");
    });

});