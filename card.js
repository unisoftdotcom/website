$(document).ready(function() {
    $.ajax({
        url: "http://unisoft-dot.com/card.json"
    }).then(function(data) {
       $('.transaction-number').append(data.number);
    });
});