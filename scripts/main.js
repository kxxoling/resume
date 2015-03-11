(function($){

	"use strict";

    window.onload = function() {
        angular.bootstrap(document, ['app'])

        $("#loader-wrapper").removeClass("loading").addClass("loaded")

        $('.hi .detail').typeTo("我是王然，这是我的个人简历。页面正在施工中，你可以随便看看，也欢迎稍后再来！");
    }

})(jQuery);
