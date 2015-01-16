var app= angular.module('app', [])
app.controller('resumeController', function ($scope) {
    $scope.timeline = [{
        startTime: '2014-07',
        company: '北京天使汇',
        title: '前后端开发工程师',
        text: '',
        content: {
            'HTML&CSS': 40,
            Javascript: 70,
            Python: 80
        }
    }, {
        startTime: '2014-06',
        stopTime: '2014-07',
        company: '上海远途',
        title: 'Python 开发工程师',
        text: '负责现有 Django 项目维护；基于 Mezzanine 定制 CMS 系统',
        content: {
            Python: 50,
        }
    }, {
        startTime: '2012-02',
        stopTime: '2013-07',
        company: 'CSDN',
        title: '软件研发频道编辑&记者',
        text: '翻译、编写开发相关新闻、报道；参与会议现场直播',
        content: {
            Editor: 80,
            Journalist: 60
        }
    }];

    $scope.profile = {
        name: '王然',
        avatar: 'static/avatar.jpg',
        sumarry: '这是简介',
        title: '不专注的前后端工程师',
        google: '',
        github: 'kxxoling',
        bitbucket: 'windrunner1992',
        zhihu: 'kxxoling',
        v2ex: ''
    };

    $scope.skillsets = [{
        name: 'Python',
        percent: 70
    }]
});
