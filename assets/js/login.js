$(".toSignUp").on("click", function() {
    $(".login-box").hide();
    $(".signUp-box").show();
});
$(".toLogin").on("click", function() {
    $(".signUp-box").hide();
    $(".login-box").show();
});