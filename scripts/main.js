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
    }

})(jQuery);
