(function($){
    $.fn.extend({
        z15light: function(options) {
            var defaults = {
                opaticy:0.5,
                bgColor:'#000',
                closetext:'Close',
                prev:'Prev',
                next:'Next',
                prevHint:'"j" key',
                nextHint:'"k" key'
            };
            var options = $.extend(defaults, options);
            return this.each(function() {
                var o =options;
                var obj = $(this);
                var body = $('body');
                var allWidth=body.outerWidth(true);
                var allHeight=body.outerHeight(true);
                $(this).find("a").click(function() {
                    $(this).addClass('z15light-now');
                    $('body').append("<div id='z15light'></div>");
                    $('#z15light').css({
                        'backgroundColor':o.bgColor,
                        'width':'100%',
                        'height':'100%',
                        'position':'fixed',
                        'top':'0px',
                        'left':'0px'
                    }).fadeTo('slow', o.opaticy);
                    $('body').append("<div id='z15light-ramka'></div>");
                    $('#z15light-ramka').css({
                        'width':'100%',
                        'height':'100%',
                        'position':'absolute',
                        'position':'fixed',
                        'top':'0px',
                        'left':'0px',
                        'textAlign':'center',
                        'marginLeft':'auto',
                        'marginRight':'auto'
                    });
                    $('#z15light-ramka').append("<span id='z15light-box'><div id='z15light-close'>"+o.closetext+"</div><span id='z15light-img'></span><div><div id='z15light-left'>"+o.prev+"</div><div id='z15light-right'>"+o.next+"</div></div><div id='z15light-txt'></div></span>");
                    $('#z15light-box').css({
                        'border-radius':'10px',
                        'box-shadow':'rgba(0, 0, 0, 0.5) 0px 0px 9px',
                        'padding':'10px',
                        'margin':'10px',
                        'backgroundColor':'#fff',
                        'marginTop':'5px',
                        'display':'inline-block',
                        'background':'#fff no-repeat'
                    });
                    $('#z15light-close').css({
                        'text-align':'right',
                        'cursor':'pointer',
                        'fontSize':'9pt'
                    });
                    $('#z15light-left').css({
                        'float':'left',
                        'cursor':'pointer',
                        'fontSize':'9pt'
                    });
                    $('#z15light-right').css({
                        'float':'right',
                        'cursor':'pointer',
                        'fontSize':'9pt'
                    });
                    $('#z15light-txt').css({
                        'clear':'both',
                        'text-align':'left',
                        'paddingTop':'10px'
                    });
                    load($(this).attr('href'));
                    $('#z15light-txt').html($(this).attr('title'));
                    $('#z15light-left').click(function() {
                        var cl=$($('.z15light-now').prevAll('a')[0]);
                        if(cl.attr('href')){
                            $('.z15light-now').removeClass('z15light-now');
                            load(cl.attr('href'));
                            $('#z15light-txt').html(cl.attr('title'));
                            cl.addClass('z15light-now');
                        }
                    });
                    $('#z15light-right').click(function() {
                        var cl=$($('.z15light-now').nextAll('a')[0]);
                        if(cl.attr('href')){
                            $('.z15light-now').removeClass('z15light-now');
                            load(cl.attr('href'));
                            $('#z15light-txt').html(cl.attr('title'));
                            cl.addClass('z15light-now');
                        }
                    });
                    $(document).keypress(function(event) {
                        if (event.keyCode==37||event.keyCode==106){
                            $('#z15light-left').click();
                        };
                        if (event.keyCode==39||event.keyCode==108){
                            $('#z15light-right').click();
                        }; 
                    });
                    $('#z15light-close').click(function(){
                        $('#z15light-ramka').slideUp().remove();
                        $('#z15light').fadeOut().remove();
                    });
                    $('#z15light').click(function(){
                        $('#z15light-close').click();
                    });
                    return false;
                });
            });
        }
    });
})(jQuery);
function load(co){
    var img = new Image();
    $('#z15light-img').css({
        'background':'url(http://z15.pl/img/load.gif)  no-repeat center center'
    });
    img.onload = function(){
        var imgW=this.width;
        var imgH=this.height;
        if(imgW<300){
            var lib=300;
        }else{
            var lib=imgW;
        };
        $('#z15light-box').stop().animate({
            'width':lib
        },'slow');
        $('#z15light-img').stop().animate({
            'width':imgW,
            'height':imgH,
        },'slow').css({
            'background':'url('+co+')  no-repeat'
        });
    };
    img.src = co;
}
