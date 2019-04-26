$( function() {
    $( "#datepicker" ).datepicker();

    $('.basicAutoComplete').autoComplete({
        resolverSettings: {
            url: 'country-list.json'
        }
    });
} );

