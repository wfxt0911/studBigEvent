$(".toSignUp").on("click", function() {
    $(".login-box").hide();
    $(".signUp-box").show();
});
$(".toLogin").on("click", function() {
    $(".signUp-box").hide();
    $(".login-box").show();
});
// $(".btn-box").on("click", function(e) {
//     e.preventDefault();
//     pop("内容不能为空！", "remind");
// })
var form = layui.form;
var layer = layui.layer;
form.verify({
    psw: [/^[\S][a-zA-Z0-9]{6,12}$/, '密码必须6到12位，不能出现空格,且只能是数字或者字母'],
    repsw: function(value) {
        if ($(".textSignUpPsw").val() != value) {
            return "两次输入的密码不相等"
        }
    }
});
$(".signUp-form").on("submit", function(e) {
    e.preventDefault();
    var fd = $(".signUp-form").serialize();
    $.ajax({
        type: "POST",
        url: "/api/reguser",
        data: fd,
        success: function(res) {
            if (res.status == 0) {
                layer.msg('注册成功！');
            } else {
                layer.msg(res.message);
            }
            $(".toLogin").click();
        }
    });

})
$(".login-form").on("submit", function(e) {
    e.preventDefault();
    var fd = $(".login-form").serialize();
    $.ajax({
        type: "POST",
        url: "/api/login",
        data: fd,
        success: function(res) {
            if (res.status == 0) {
                layer.msg('登录成功！');
                localStorage.setItem("token", res.token);
                location.href = "/index.html";
            } else {
                layer.msg(res.message);
            }
        }
    });

})