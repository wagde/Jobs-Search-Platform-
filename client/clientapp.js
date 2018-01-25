var mod = angular.module('app', ['ngRoute']);

mod.service('getDataService', getDataService)

function getDataService($http) {

    this.getJobs = function (callback) {
        $http.get('/api/job').then(callback)
    }

    this.getSkills = function (callback) {
        $http.get('/api/skills').then(callback)

    }
    this.addJob = function (json, callback) {
        $http.post('api/addjob', json).then(callback)
    }

    this.userJobs = function (json, callback) {
        $http.post('api/myjob', json).then(callback);
    }
    this.updatejob = function (json, callback) {
        $http.post('api/updatejob', json).then(callback)
    }
    this.deletejob = function (json, callback) {
        $http.post('api/deletejob', json).then(callback)
    }
    this.getApplyierUser = function (json, callback) {
        $http.post('/api/getapplier', json).then(callback)
    }
    this.getlunglat = function (json, callback) {
        $http.post('/api/getlunglat', json).then(callback)
    }
    this.agentGet = function (json, callback) {
        $http.post('/api/agent', json, callback).then(callback);
    }


}


mod.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('');
    $routeProvider.when("/", {
        template: " <job-component></job-component>"
    })
    $routeProvider.when("/myjob", {
        template: "<myjob-component></myjob-component>"
    })
    $routeProvider.when("/regist", {
        template: "<regist-component></regist-component>"
    })
    $routeProvider.when("/myprofile", {
        template: "<profile-component></profile-component>"
    })
    $routeProvider.when("/myapplyjob", {
        template: "<applyjob-component></applyjob-component>"
    })
    $routeProvider.when("/addjob", {
        template: "<addjob-component></addjob-component>"
    })
    $routeProvider.when("/userapply", {
        template: "<userapply-component></userapply-component>"
    })
    $routeProvider.when("/agent", {
        template: "<agent-component></agent-component>"
    })
})


