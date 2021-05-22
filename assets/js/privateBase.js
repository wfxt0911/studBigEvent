// 自己写的功能已停用
function pop(msg, type) {
    if (type && type == "remind") {
        console.log("2");
        var box = $('<div><i class="iconfont icon-cuowu"></i><span>' + msg + '</span></div>');
    }
    box.css({
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: " translate(-50%,-50%)",
        width: "200px",
        height: "70px",
        lineHeight: "70px",
        textAlign: "center",
        fontSize: "18px",
        backgroundColor: "#ffffff",
        border: "1px solid #cccccc"
    });
    box.children("i").css({
        // display: "inline-block",
        // marginTop: "10px",
        marginRight: "10px",
        fontSize: "18px",
        lineHeight: "70px",
    });
    $("body").append(box);
    var timer1 = null;
    var timer2 = null;
    timer1 = setInterval(() => {
        box.css("marginLeft", "-3px");
        console.log("1");

    }, 50);
    timer2 = setInterval(() => {
        console.log("2");
        box.css("marginLeft", "3px");
    }, 100);
    setTimeout(() => {
        box.css("marginLeft", "0");
        clearInterval(timer1);
        clearInterval(timer2);
    }, 800);
    setTimeout(() => {

        box.remove();
    }, 3000);

}

$.ajaxPrefilter(function(options) {

    options.url = "http://api-breakingnews-web.itheima.net" + options.url;

});