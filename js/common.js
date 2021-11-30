$('document').ready(function () {
    // Check if user saw the modal
    var key = 'hadModal',
        hadModal = localStorage.getItem(key);

    // Show the modal only if new user
    if (!hadModal) {
        $('#PEOmodal2').modal('show');
    }

    // If modal is displayed, store that in localStorage
    $('#PEOmodal2').on('shown.bs.modal', function () {
        localStorage.setItem(key, true);
    })
    //$('#PEOmodal2').modal('show');
    $.exitIntent('enable');
    //Maps an event to the window closing event
    $(document).bind('exitintent', function () {
        if ($('#PEOmodal2').is(':visible')) {
            $('#PEOmodal').modal('hide');
        }
        else {
            $('#PEOmodal').modal('show');
        }
    });
    $('#PEOmodalclose, #E_close_popup').click(function () {
        $('#PEOmodal').modal('hide');
        $.exitIntent('disable');
    });
    $('#PEOmodalclose2').click(function () {
        $('#PEOmodal2').modal('hide');
    });
    $('.nothanks').click(function () {
        $('#TaxExit_Modal').modal('hide');
        $.exitIntent('disable');
    });

    var ad = false;
    $('#adPopup').hide();

    var iScrollPos = 0;
    $(".ad_close").click(function () {
        $('#adPopup').addClass("dis-none");
        $('#adPopup').hide();
    });
    $(window).scroll(function () {
        iScrollPos = 1;
        ad = true;
        if ($(window).scrollTop() > 85 && ad == true && iScrollPos > 0) {
            ad = false;
            $('#adPopup').show();
        }
    });


    var key = 'hadModal',
    hadModal = localStorage.getItem(key);

    // Show the modal only if new user
    if (!hadModal) {
        $('#PEOmodal2').modal('show');
    }

    // If modal is displayed, store that in localStorage
    $('#PEOmodal2').on('shown.bs.modal', function () {
        localStorage.setItem(key, true);
    })
    //$('#PEOmodal2').modal('show');
    $.exitIntent('enable');
    //Maps an event to the window closing event
    $(document).bind('exitintent', function () {
        if ($('#PEOmodal2').is(':visible')) {
            $('#PEOmodal').modal('hide');
        }
        else {
            $('#PEOmodal').modal('show');
        }
    });
    $('#PEOmodalclose, #E_close_popup').click(function () {
        $('#PEOmodal').modal('hide');
        $.exitIntent('disable');
    });
    $('#PEOmodalclose2').click(function () {
        $('#PEOmodal2').modal('hide');
    });
    $('.nothanks').click(function () {
        $('#TaxExit_Modal').modal('hide');
        $.exitIntent('disable');
    });
});