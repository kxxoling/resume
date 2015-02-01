var app= angular.module('app', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/resume', {templateUrl: '_resume.html', controller: 'resumeController'}).
                   when('/github', {templateUrl: '_github.html', controller: 'resumeController'}).
                   when('/contact', {templateUrl: '_contact.html', controller: 'resumeController'}).
                   when('/expand', {templateUrl: '_expand.html', controller: 'resumeController'}).
                   otherwise({redirectTo: '/expand'});
}]);

app.controller('resumeController', function ($scope) {

    workExp = [{
        startTime: '2014-07',
        company: '北京天使汇',
        title: '前后端开发工程师',
        text: '涉及项目几乎所有方面的开发；带过新人、做过演讲。总的来说，得到了相对全面的成长。',
        skillsets:[]
    }, {
        startTime: '2014-06',
        stopTime: '2014-07',
        company: '上海远途',
        title: 'Python 开发工程师',
        text: '负责现有 Django 项目维护；基于 Mezzanine 定制 CMS 系统',
        skillsets: [
            ['Python', 50],
        ]
    }, {
        startTime: '2012-02',
        stopTime: '2013-07',
        company: 'CSDN',
        title: '软件研发频道编辑&记者',
        text: '翻译、编写开发相关新闻、报道；参与会议现场直播',
        skillsets: [
            ['Editor', 80],
            ['Journalist', 60]
        ]
    }, {
        startTime: '2008-09',
        stopTime: '2012-07',
        school: '北京信息科技大学',
        major: '信息管理与信息系统',
        text: '一个涉及广泛的专业：学过 C/C++，做过 Java/.NET，学过经济学、管理学，也涉及到项目管理、研发、测试。',
        skillsets: [
            ['Editor', 80],
            ['Journalist', 60]
        ]
    }];

    projectExp = [{
        title: '天使汇主站',
        text: '',
        skillsets: [
            'HTML&CSS', 40,
            'Javascript', 70,
            'Python', 80
        ]
    }, {
        title: '天使汇统一登录系统',
        text: '',
        skillsets: [
            ['HTML&CSS', 40],
            ['Javascript', 70],
            ['Python', 80]
        ]
    }, {
        title: '天使汇自动补全系统',
        text: '',
        skillsets: [
            ['HTML&CSS', 40],
            ['Javascript', 70],
            ['Python', 80]
        ]
    }, {
        title: '车辆追踪系统',
        text: '',
        skillsets: [
            ['HTML&CSS', 40],
            ['Javascript', 70],
            ['Python', 80]
        ]
    }, {
        title: '各语言（微）博客',
        text: '分别使用 Java/C#/Node.js/Python 开发过博客系统',
        skillsets: [
            ['HTML&CSS', 40],
            ['Javascript', 70],
            ['Python', 80]
        ]
    }];

    $scope.timeline = workExp;

    $scope.profile = {
        name: '王然',
        avatar: 'images/avatar.jpg',
        sumarry: '这是简介',
        title: '不专注的前后端工程师',
        google: '',
        github: 'kxxoling',
        bitbucket: 'windrunner1992',
        zhihu: 'kxxoling',
        v2ex: '',
        mail: 'kxxoling@gmail.com'
    };

    $scope.skillsets = $scope.timeline[1].skillsets;

    $scope.chooseTime = function(el){
        $scope.skillsets = el.skillsets
    };

});

