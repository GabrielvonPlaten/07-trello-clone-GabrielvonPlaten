$(document).ready(function () {
    $(".dialog").dialog({ autoOpen: false });

    $("#add-card").click(function () { 
        $(".dialog").dialog("open");
    });

    /* Card propeties */
    let numberIncrement = 1;
    let cardTitle = '<h3>Card Title ';
    let placeholderPara = '<p>Excepteur fugiat proident quis reprehenderit</p>';
    let cardButton = '<button class="delete-card">Delete</button>';

    $("#yes").click(function (e) { 
        e.preventDefault();

        /* Title number */
        numberIncrement++;

        $("<div/>", {
            class: 'card',
            html: cardTitle + numberIncrement + '</h3>' + placeholderPara + cardButton
         }).appendTo(".todo");
    });

});