$(document).ready(()=>{
    var isDark = false;
    $('#theme-btn').click((e)=>{
        isDark = !isDark;
        if(isDark){
            e.target.value="Light Theme";
            $('#theme-btn').addClass("dark-theme").removeClass("light-theme");
            $(".logo").attr("src", "teacoder_logo_stock_white_transparent.png");
            $("body").attr("data-theme", "dark");
        }else{
            e.target.value="Dark Theme";
            $('#theme-btn').addClass("light-theme").removeClass("dark-theme");
            $(".logo").attr("src", "teacoder_logo_stock_black_transparent.png");
            $("body").attr("data-theme", "light");
        }
    });
});