$(document).ready(function(){
    $('.mainform').validate({
        rules: {
            fname: {
                required: true,
                minlength: 5,
            },
            sname: {
                required: true,
                minlength: 1,
            },
            number: {
                required: true,
              
            },
            passkey: {
                required: true,
                minlength: 5,
            },
            day: {
                required: true,
            },
            mon: {
                required: true,
            },
            year: {
                required: true
            }
            
            }
        })
    });

