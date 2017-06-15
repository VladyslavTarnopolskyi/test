$(document).ready(function () {
    $(".home-page").on('click', function (e) {
        e.preventDefault();
        $.ajax({
            url: 'pages/home.html',
            success: function (result) {
                $('.pages').html(result);
                console.log(result);
            }
        });
    });
    $(".catalog-page").on('click', function (e) {
        e.preventDefault();
        $.ajax({
            url: 'pages/catalog.html',
            success: function (result) {
                $('.pages').html(result);
                console.log(result);
            }
        });
    });
    $(".delivery-page").on('click', function (e) {
        e.preventDefault();
        $.ajax({
            url: 'pages/delivery.html',
            success: function (result) {
                $('.pages').html(result);
            }
        });
    });
    $(".price-list-page").on('click', function (e) {
        e.preventDefault();
        $.ajax({
            url: 'pages/price-list.html',
            success: function (result) {
                $('.pages').html(result);
            }
        });
    });
    $(".contacts-page").on('click', function (e) {
        e.preventDefault();
        $.ajax({
            url: 'pages/contacts.html',
            success: function (result) {
                $('.pages').html(result);
            }
        });
    });

    //feedback
    $("#contactform").submit(function() {
        console.log(1);
        var th = $(this);
        var a = th.attr("action");
        $("#message").slideUp(750, function() {
            console.log(2);
            $("#message").hide();
            $("#submit").attr("disabled", "disabled");
            $.post(a, {
                name: $("#name").val(),
                tel: $("#tel").val(),
                email: $("#email").val(),
                comments: $("#comments").val()
            }, function(a) {
                console.log(3);
                document.getElementById("message").innerHTML = a;
                $("#message").slideDown("slow");
                $("#submit").removeAttr("disabled");
                if (null != a.match("success")) $("#contactform").slideDown("slow");
                if (null != a.match("success")) $(setTimeout(function() {
                    $('#myModal').modal('hide');
                    th.trigger("reset");
                    $("#message").hide();
                }, 2000));
            });
        });
        return false;
    });

});
