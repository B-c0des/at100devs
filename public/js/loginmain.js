window.onload = () => {

    login = document.querySelector(".container");
    $(login).fadeIn();
    console.log("Please login, create an account, or use demo mode!");

    var buttons = document.querySelectorAll(".btn").length;

    for (var i = 0; i < buttons; i++) {
        document.querySelectorAll(".btn")[i].addEventListener("click", function () {

            faseout = document.querySelector(".container")
            $(faseout).fadeOut();


        });


    }
}