var app= angular.module('app', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/resume', {templateUrl: 'resume.html', controller: 'resumeController'}).
                   when('/github', {templateUrl: 'github.html', controller: 'resumeController'}).
                   when('/contact', {templateUrl: 'contact.html', controller: 'resumeController'}).
                   when('/expand', {templateUrl: 'expand.html', controller: 'resumeController'}).
                   otherwise({redirectTo: '/expand'});
}]);

app.controller('resumeController', function ($scope, $http) {

    workExp = [{
        startTime: '2014-07',
        company: '北京天使汇',
        title: '前后端开发工程师',
        text: '涉及项目几乎所有方面的开发；带过新人、做过演讲。总的来说，得到了相对全面的成长。',
        skillsets: [
            ['HTML&CSS', 40],
            ['Javascript', 70],
            ['Python', 80]
        ]
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
        text: '涉及主站几乎所有页面，使用过 Redis、MongoDB、Tornado、jQuery（及插件）、Avalon、CoffeeScript 等技术。',
        skillsets: [
            ['HTML&CSS', 40],
            ['Javascript', 70],
            ['Python', 80]
        ]
    }, {
        title: '天使汇统一登录系统',
        text: '使用到的新技术有 RPC、JSONP 等。',
        skillsets: [
            ['Python', 70]
        ]
    }, {
        title: '车辆追踪系统',
        text: '基于 ArcGIS 开发了 VB 和 .NET 版本的车辆实时追踪系统。',
        skillsets: [
            ['HTML&CSS', 40],
            ['Javascript', 70],
            ['VB', 50],
            ['C#', 60]
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
    $scope.showWorkExp = true
    $scope.toggleTimeline = function(){
        if ($scope.showWorkExp === true){
            $scope.timeline = projectExp;
        } else {
            $scope.timeline = workExp;
        }
        $scope.showWorkExp = !$scope.showWorkExp
    };

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
        mobile: '13311561757',
        mail: 'kxxoling@gmail.com'
    };


    $scope.skillsets = $scope.timeline[1].skillsets;

    $scope.chooseTime = function(el){
        $scope.skillsets = el.skillsets
    };

    $scope.projectList = [];

    getGitHub = function(){
        GITHUB_URL = 'https://api.github.com/users/kxxoling/repos?sort=updated';
        $http.get(GITHUB_URL).then(function(result){
            $scope.projectList = result.data;
        });
    };

    $scope.jump = function(href){
        l = window.location.href;
        window.location = l.split('#')[0] + '#/' + href;
    };

    getGitHub();

    MAIL_TITLE = '我是一个有意思的人，希望和你一起做一番有意思的事！';

    $scope.mail = {
        title: MAIL_TITLE,
        content: '',
    }
    $scope.initMail = function(){
        $scope.mail.title = MAIL_TITLE,
        $scope.mail.content = '';
    }
});
