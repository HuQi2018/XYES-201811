window.onload=function(){
    var top = $("#main").offset().top;
    if($(".wenben").length==1){
        var height = $(".wenben").offset().top;
    }
    $(window).scroll(function(){
        var this_scrollTop = $(this).scrollTop();
        if(this_scrollTop>top ){
            $("#btn_top").show();
            $("#list").css("position","fixed");
            $(".list-meun").css("transform","translateY(50px)");
        }
        if(this_scrollTop<top ){
            $("#btn_top").hide();
            $("#list").css("position","relative");
            $(".list-meun").css("transform","translateY(-100%)");
        }
        if($(".wenben").length==1){
            if(this_scrollTop>height ){
                $(".liebiao").css("position","fixed");
            }
            if(this_scrollTop<height ){
                $(".liebiao").css("position","relative");
            }
        }
    });
    
    var focus=document.getElementById("focus");
    var prev=document.getElementById("prev");
    var next=document.getElementById("next");
    var tupian=document.getElementById("tupian").getElementsByTagName("li");
    var slider=document.getElementById("touch-slider").getElementsByTagName("li");
    var imgs=document.getElementById("tupian").getElementsByTagName("img");
    var nowing=0;
    var time=0;
    window.clearInterval(time);
    time=window.setInterval(dong,3000);
    focus.onmouseover=function(){
        window.clearInterval(time);
    }
    focus.onmouseout=function(){
        window.clearInterval(time);
        time=window.setInterval(dong,3000);
    }
    next.onclick=dong;
    function dong(){
        if(nowing<tupian.length-1){
            nowing++;
        }else{
            nowing=0;
        }
        sliders();
        sliderli();
    }
    prev.onclick=function(){
        if(nowing>0){
            nowing--;
        }else{
            nowing=tupian.length-1;
        }
        sliders();
        sliderli();
    }
    for(var i=0;i<=slider.length-1;i++){
        slider[i].index=i;
        slider[i].onclick=function(){
            nowing=this.index;
            sliders();
            sliderli();
        }
    }
    function sliders(){
        for(var i=0;i<=tupian.length-1;i++){
            tupian[i].className="";
        }
        tupian[nowing].className="cur";
    }
    function sliderli(){
        for(var i=0;i<=tupian.length-1;i++){
            slider[i].className="";
        }
        slider[nowing].className="cur";
    }
}