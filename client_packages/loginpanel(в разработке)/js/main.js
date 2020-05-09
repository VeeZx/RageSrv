$(document).ready(function () {
    $(".switch-form .tab").on("click", function(event) {
        console.log($(this).index());
        // Удаляем классы active со всего массива tab
        $(".switch-form").find(".active").removeClass("active");
        // Добавляем классы active если выполняется клик
        $(this).addClass("active");
        $(".tab-form").eq($(this).index()).addClass("active");
    });
});
