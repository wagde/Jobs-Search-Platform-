mod.component('registComponent', {
    templateUrl: '/regist/regtemplate.html',
    controller: ['registService', 'getDataService', 'autoComp', function (registService, getDataService, autoComp) {

        this.$onInit = function () {
           autoComp.aoutocomp();
        }
        this.registService = registService;

    }]
});



