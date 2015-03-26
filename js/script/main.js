(function($){

    "use strict";

    window.onload = function() {
        angular.bootstrap(document, ['app']);

        $("#loader-wrapper").removeClass("loading").addClass("loaded");

        $('.hi .detail').typeTo("我是王然，这是我的个人简历。页面正在施工中，你可以随便看看，也欢迎稍后再来！");

        window.___gcfg = {lang: 'zh-CN'};

        (function() {
            var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
            po.src = 'https://apis.google.com/js/platform.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
        })();


        // Logging personal infomation
        var styleString = 'text-shadow: 0 1px 0 #ccc,\
                                        0 2px 0 #c9c9c9,\
                                        0 3px 0 #bbb,\
                                        0 4px 0 #b9b9b9,\
                                        0 5px 0 #aaa,\
                                        0 6px 1px rgba(0,0,0,.1),\
                                        0 0 5px rgba(0,0,0,.1),\
                                        0 1px 3px rgba(0,0,0,.3),\
                                        0 3px 5px rgba(0,0,0,.2),\
                                        0 5px 10px rgba(0,0,0,.25),\
                                        0 10px 10px rgba(0,0,0,.2),\
                                        0 20px 20px rgba(0,0,0,.15);\
                           font-size:20px';

        var logging = function(text, style){
            console.log("%c"+text, style);
        }
        var profile = angular.element('[ng-controller=resumeController]').scope().profile
        var mailString = 'E-mail: '.concat(profile.mail);
        var phoneString = 'Phone: '.concat(profile.mobile);
        logging(mailString, styleString);
        logging(phoneString, styleString);
    }

})(jQuery);
